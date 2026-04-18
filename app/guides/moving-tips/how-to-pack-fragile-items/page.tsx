import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { contentFreshnessDate, siteConfig } from '@/lib/site-content'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { buildPortableStorageProductSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'How to Pack Fragile Items | Liddell Stor-It',
  description: 'Practical steps for packing fragile items so they stay protected in storage.',
}

const formatMonthYear = (value: string) => new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

export default function PackFragileItemsPage() {
  return (
    <>
      <Header variant="solid" />
      <main className="pt-16"><section className="py-20 bg-background"><div className="container mx-auto px-6 lg:px-8 max-w-3xl"><Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/guides' }, { name: 'Moving Tips', url: '/guides/moving-tips' }, { name: 'How to Pack Fragile Items', url: '/guides/moving-tips/how-to-pack-fragile-items' }]} /><JsonLd data={buildPortableStorageProductSchema(`${siteConfig.url}/guides/moving-tips/how-to-pack-fragile-items`)} /><p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Cluster article</p><h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">How do you pack fragile items safely?</h1><p className="mt-3 text-xs uppercase tracking-wide text-accent">Last updated: {formatMonthYear(contentFreshnessDate)}</p><p className="mt-5 text-muted-foreground leading-relaxed">Fragile items need padding, support, and a loading plan that keeps them away from heavy pressure.</p><div className="mt-10 space-y-4"><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">What comes first?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Wrap each item individually and use sturdy boxes with enough cushioning on every side.</p></div><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">How should boxes be labeled?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Mark boxes as fragile and keep them visible so they are not buried under heavy furniture.</p></div><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">Where should fragile boxes go?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Place them on top of stable items or in a section where nothing heavy will be stacked above them.</p></div></div><div className="mt-8 flex flex-wrap gap-4 text-sm"><Link href="/guides/moving-tips" className="text-accent hover:text-accent/80 transition-colors">Back to Moving Tips</Link><Link href="/guides/moving-tips/move-day-checklist" className="text-accent hover:text-accent/80 transition-colors">Move-day checklist</Link></div></div></section></main><Footer /></>
  )
}
