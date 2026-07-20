import { readFile } from 'node:fs/promises'
import { INDEXNOW_ENDPOINT, INDEXNOW_KEY, INDEXNOW_KEY_URL, SITE_ORIGIN } from './seo-config.mjs'

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const sitemapFlagIndex = args.indexOf('--sitemap')

if (sitemapFlagIndex >= 0 && !args[sitemapFlagIndex + 1]) {
  throw new Error('--sitemap requires a file path or URL')
}

const sitemapSource = sitemapFlagIndex >= 0 ? args[sitemapFlagIndex + 1] : `${SITE_ORIGIN}/sitemap.xml`
const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds))

function parseSitemap(xml) {
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim())

  if (urls.length === 0) {
    throw new Error('The sitemap contains no URLs')
  }

  const uniqueUrls = [...new Set(urls)]
  if (uniqueUrls.length !== urls.length) {
    throw new Error('The sitemap contains duplicate URLs')
  }

  for (const value of uniqueUrls) {
    const url = new URL(value)
    if (url.origin !== SITE_ORIGIN || url.protocol !== 'https:' || !url.pathname.endsWith('/') || url.search || url.hash) {
      throw new Error(`Invalid IndexNow URL: ${value}`)
    }
  }

  return uniqueUrls
}

async function fetchText(url, attempts = 3) {
  let lastError

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, { cache: 'no-store' })
      if (response.ok) {
        return await response.text()
      }
      lastError = new Error(`${url} returned HTTP ${response.status}`)
    } catch (error) {
      lastError = error
    }

    if (attempt < attempts) {
      await sleep(attempt * 2000)
    }
  }

  throw lastError
}

async function readSitemap(source) {
  if (/^https?:\/\//.test(source)) {
    const cacheBuster = process.env.GITHUB_SHA || Date.now().toString()
    const url = new URL(source)
    url.searchParams.set('deployment', cacheBuster)
    return fetchText(url, 5)
  }

  return readFile(source, 'utf8')
}

async function waitForDeployedKey() {
  const cacheBuster = process.env.GITHUB_SHA || Date.now().toString()

  for (let attempt = 1; attempt <= 24; attempt += 1) {
    try {
      const url = new URL(INDEXNOW_KEY_URL)
      url.searchParams.set('deployment', cacheBuster)
      const contents = await fetchText(url, 1)
      if (contents.trim() === INDEXNOW_KEY) {
        return
      }
    } catch {
      // GitHub Pages and its custom-domain cache may take a short time to converge.
    }

    if (attempt < 24) {
      await sleep(5000)
    }
  }

  throw new Error(`IndexNow key was not available at ${INDEXNOW_KEY_URL} after 2 minutes`)
}

async function submit(urlList) {
  const payload = {
    host: new URL(SITE_ORIGIN).host,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_URL,
    urlList,
  }

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    })

    if (response.status === 200 || response.status === 202) {
      console.log(`IndexNow accepted ${urlList.length} URLs with HTTP ${response.status}.`)
      return
    }

    const body = (await response.text()).slice(0, 500)
    const retryable = response.status === 429 || response.status >= 500
    if (!retryable || attempt === 3) {
      throw new Error(`IndexNow returned HTTP ${response.status}${body ? `: ${body}` : ''}`)
    }

    await sleep(attempt * 5000)
  }
}

const sitemap = await readSitemap(sitemapSource)
const urlList = parseSitemap(sitemap)

if (dryRun) {
  console.log(`IndexNow dry run passed for ${urlList.length} URLs using ${INDEXNOW_KEY_URL}.`)
} else {
  await waitForDeployedKey()
  await submit(urlList)
}
