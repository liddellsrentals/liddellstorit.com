import { readdir, readFile } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { INDEXNOW_KEY, SITE_ORIGIN } from './seo-config.mjs'

const outputDirectory = join(process.cwd(), 'out')

function parseSitemap(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim())
}

function canonicalLinks(html) {
  return [...html.matchAll(/<link\b[^>]*\brel="canonical"[^>]*>/g)].map((match) => {
    const href = match[0].match(/\bhref="([^"]+)"/)
    return href?.[1]
  })
}

function htmlPathForUrl(value) {
  const pathname = new URL(value).pathname
  return pathname === '/' ? join(outputDirectory, 'index.html') : join(outputDirectory, pathname, 'index.html')
}

async function exportedPageUrls(directory) {
  const urls = []

  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = join(directory, entry.name)

    if (entry.isDirectory()) {
      urls.push(...(await exportedPageUrls(entryPath)))
    } else if (entry.name === 'index.html') {
      const outputPath = relative(outputDirectory, entryPath).replaceAll('\\', '/')
      if (outputPath === '404/index.html' || outputPath === '_not-found/index.html') continue
      urls.push(outputPath === 'index.html' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}/${outputPath.replace(/index\.html$/, '')}`)
    }
  }

  return urls
}

function assertPageUrl(value) {
  const url = new URL(value)
  if (url.origin !== SITE_ORIGIN || url.protocol !== 'https:' || !url.pathname.endsWith('/') || url.search || url.hash) {
    throw new Error(`Non-canonical page URL: ${value}`)
  }
}

function validateJsonLd(html, pageUrl) {
  const scripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]

  for (const script of scripts) {
    const roots = JSON.parse(script[1])
    const queue = Array.isArray(roots) ? [...roots] : [roots]

    while (queue.length > 0) {
      const value = queue.shift()
      if (!value || typeof value !== 'object') continue

      if (value['@type'] === 'BreadcrumbList') {
        for (const item of value.itemListElement || []) {
          assertPageUrl(item.item)
        }
      }

      if (value['@type'] === 'Product') {
        assertPageUrl(value.url)
        if (value.url !== pageUrl) {
          throw new Error(`Product schema URL ${value.url} does not match page ${pageUrl}`)
        }
      }

      queue.push(...(Array.isArray(value) ? value : Object.values(value)))
    }
  }
}

const sitemapXml = await readFile(join(outputDirectory, 'sitemap.xml'), 'utf8')
const sitemapUrls = parseSitemap(sitemapXml)
const uniqueUrls = new Set(sitemapUrls)

if (sitemapUrls.length === 0 || uniqueUrls.size !== sitemapUrls.length) {
  throw new Error('Sitemap URLs must be present and unique')
}

const exportedUrls = await exportedPageUrls(outputDirectory)
const missingFromSitemap = exportedUrls.filter((url) => !uniqueUrls.has(url))
const missingFromExport = sitemapUrls.filter((url) => !exportedUrls.includes(url))

if (missingFromSitemap.length > 0 || missingFromExport.length > 0) {
  throw new Error(
    `Sitemap/export mismatch. Missing from sitemap: ${missingFromSitemap.join(', ') || 'none'}. Missing from export: ${missingFromExport.join(', ') || 'none'}.`,
  )
}

for (const pageUrl of sitemapUrls) {
  assertPageUrl(pageUrl)
  const html = await readFile(htmlPathForUrl(pageUrl), 'utf8')
  const canonicals = canonicalLinks(html)

  if (canonicals.length !== 1 || canonicals[0] !== pageUrl) {
    throw new Error(`${pageUrl} must have exactly one self-referencing canonical; found ${canonicals.join(', ') || 'none'}`)
  }

  validateJsonLd(html, pageUrl)
}

for (const notFoundPath of ['404.html', '404/index.html', '_not-found/index.html']) {
  const html = await readFile(join(outputDirectory, notFoundPath), 'utf8')
  if (canonicalLinks(html).length > 0) {
    throw new Error(`${notFoundPath} must not declare a canonical URL`)
  }
}

const exportedKey = (await readFile(join(outputDirectory, `${INDEXNOW_KEY}.txt`), 'utf8')).trim()
if (exportedKey !== INDEXNOW_KEY) {
  throw new Error('The exported IndexNow key file does not match the configured key')
}

console.log(`SEO check passed for ${sitemapUrls.length} canonical pages.`)
