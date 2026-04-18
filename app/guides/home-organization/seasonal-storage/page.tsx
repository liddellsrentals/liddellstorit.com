import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { contentFreshnessDate, siteConfig } from '@/lib/site-content'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { buildPortableStorageProductSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Seasonal Storage | Liddell Stor-It',
  description: 'How to store seasonal items without cluttering your home year-round.',
}

const formatMonthYear = (value: string) => new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

export default function SeasonalStoragePage() {
  return (
    <>
      <Header variant="solid" />
      <main className="pt-16"><section className="py-20 bg-background"><div className="container mx-auto px-6 lg:px-8 max-w-3xl"><Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/guides' }, { name: 'Home Organization', url: '/guides/home-organization' }, { name: 'Seasonal Storage', url: '/guides/home-organization/seasonal-storage' }]} /><JsonLd data={buildPortableStorageProductSchema(`${siteConfig.url}/guides/home-organization/seasonal-storage`)} /><p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Cluster article</p><h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">How should you handle seasonal storage?</h1><p className="mt-3 text-xs uppercase tracking-wide text-accent">Last updated: {formatMonthYear(contentFreshnessDate)}</p><p className="mt-5 text-muted-foreground leading-relaxed">Seasonal storage works best when you treat it like a rotation system instead of a pile in the corner.</p><div className="mt-10 space-y-4"><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">What should be stored away?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Store holiday decor, patio furniture, sports gear, and other items that only matter part of the year.</p></div><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">How do you keep it organized?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Group items by season and label them clearly so swapping them in and out is quick.</p></div><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">What is the benefit?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">You keep the house usable now while still holding onto items you need later in the year.</p></div></div><div className="mt-8 flex flex-wrap gap-4 text-sm"><Link href="/guides/home-organization" className="text-accent hover:text-accent/80 transition-colors">Back to Home Organization</Link><Link href="/guides/home-organization/decluttering-by-room" className="text-accent hover:text-accent/80 transition-colors">Decluttering by room</Link></div></div></section></main><Footer /></>
  )
}
