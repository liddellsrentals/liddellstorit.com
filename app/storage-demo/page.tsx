import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { contentFreshnessDate, siteConfig } from '@/lib/site-content'

const videoId = 'XOkwt7pYjok'
const videoTitle = 'Let Us Bring Storage To You'
const videoDescription = 'A short demo video that shows how Liddell Stor-It brings portable storage to your location for moving, renovation, and extra space.'
const thumbnailUrl = 'https://i.ytimg.com/vi/XOkwt7pYjok/hqdefault.jpg'
const embedUrl = `https://www.youtube.com/embed/${videoId}`
const watchUrl = `https://www.youtube.com/watch?v=${videoId}`

export const metadata: Metadata = {
  title: 'Storage Demo Video | Liddell Stor-It',
  description: videoDescription,
}

const formatMonthYear = (value: string) =>
  new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: videoTitle,
  description: videoDescription,
  thumbnailUrl,
  contentUrl: watchUrl,
  embedUrl,
  url: `${siteConfig.url}/storage-demo`,
  publisher: {
    '@type': 'Organization',
    name: siteConfig.parentName,
    url: siteConfig.url,
  },
  mainEntityOfPage: `${siteConfig.url}/storage-demo`,
  isFamilyFriendly: true,
}

export default function StorageDemoPage() {
  return (
    <>
      <Header variant="solid" />
      <main className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Storage Demo', url: '/storage-demo' }]} />
            <JsonLd data={videoSchema} />
            <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Video</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">{videoTitle}</h1>
            <p className="mt-3 text-xs uppercase tracking-wide text-accent">Last updated: {formatMonthYear(contentFreshnessDate)}</p>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-3xl">
              Watch the demo to see how Liddell Stor-It delivers portable storage to your location, making moving, renovation, and extra storage simpler.
            </p>

            <div className="mt-10 rounded-2xl border border-border bg-card p-3 shadow-sm">
              <div className="aspect-video overflow-hidden rounded-xl bg-black">
                <iframe
                  className="h-full w-full"
                  src={embedUrl}
                  title={videoTitle}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="rounded-lg border border-border bg-card p-6">
                <h2 className="text-xl font-medium text-foreground">What the video covers</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  The demo shows what customers can expect, how the service works, and why portable storage is easier than renting a truck and making multiple trips.
                </p>
              </article>
              <article className="rounded-lg border border-border bg-card p-6">
                <h2 className="text-xl font-medium text-foreground">Transcript-style summary</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Liddell Stor-It brings the container to you, helps you keep the move or project organized, and makes it simple to reserve, load, and use the unit on your timeline.
                </p>
              </article>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm">
              <Link href="/" className="text-accent hover:text-accent/80 transition-colors">Back to home</Link>
              <Link href={watchUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">Open on YouTube</Link>
              <Link href={siteConfig.reserveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">Reserve a container</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
