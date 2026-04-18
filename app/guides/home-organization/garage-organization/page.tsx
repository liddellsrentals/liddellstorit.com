import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { contentFreshnessDate, siteConfig } from '@/lib/site-content'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { buildPortableStorageProductSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Garage Organization | Liddell Stor-It',
  description: 'Garage organization tips for sorting tools, seasonal items, and bulky storage overflow.',
}

const formatMonthYear = (value: string) => new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

export default function GarageOrganizationPage() {
  return (
    <>
      <Header variant="solid" />
      <main className="pt-16"><section className="py-20 bg-background"><div className="container mx-auto px-6 lg:px-8 max-w-3xl"><Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/guides' }, { name: 'Home Organization', url: '/guides/home-organization' }, { name: 'Garage Organization', url: '/guides/home-organization/garage-organization' }]} /><JsonLd data={buildPortableStorageProductSchema(`${siteConfig.url}/guides/home-organization/garage-organization`)} /><p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Cluster article</p><h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">How can you organize a garage better?</h1><p className="mt-3 text-xs uppercase tracking-wide text-accent">Last updated: {formatMonthYear(contentFreshnessDate)}</p><p className="mt-5 text-muted-foreground leading-relaxed">A better garage starts with sorting what you use often from what only needs occasional access.</p><div className="mt-10 space-y-4"><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">What belongs up front?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Keep everyday tools, active projects, and frequently used gear within easy reach.</p></div><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">What should move out of the way?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Move seasonal decor, overflow boxes, and large items you are not using into storage.</p></div><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">Why does this help?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">It turns the garage back into useful space instead of a catch-all room for everything else.</p></div></div><div className="mt-8 flex flex-wrap gap-4 text-sm"><Link href="/guides/home-organization" className="text-accent hover:text-accent/80 transition-colors">Back to Home Organization</Link><Link href="/guides/home-organization/seasonal-storage" className="text-accent hover:text-accent/80 transition-colors">Seasonal storage</Link></div></div></section></main><Footer /></>
  )
}
