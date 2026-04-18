import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { contentFreshnessDate, siteConfig } from '@/lib/site-content'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { buildPortableStorageProductSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'How to Load a Storage Container | Liddell Stor-It',
  description: 'Loading tips for balancing weight, protecting items, and leaving room where needed.',
}

const formatMonthYear = (value: string) => new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

export default function LoadStorageContainerPage() {
  return (
    <>
      <Header variant="solid" />
      <main className="pt-16"><section className="py-20 bg-background"><div className="container mx-auto px-6 lg:px-8 max-w-3xl"><Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/guides' }, { name: 'Moving Tips', url: '/guides/moving-tips' }, { name: 'How to Load a Storage Container', url: '/guides/moving-tips/how-to-load-a-storage-container' }]} /><JsonLd data={buildPortableStorageProductSchema(`${siteConfig.url}/guides/moving-tips/how-to-load-a-storage-container`)} /><p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Cluster article</p><h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">How should you load a storage container?</h1><p className="mt-3 text-xs uppercase tracking-wide text-accent">Last updated: {formatMonthYear(contentFreshnessDate)}</p><p className="mt-5 text-muted-foreground leading-relaxed">Loading works best when the container starts with a stable base and the weight is spread evenly from one side to the other.</p><div className="mt-10 space-y-4"><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">What goes in first?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Put heavy furniture and appliances on the floor first so they create a stable foundation.</p></div><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">How do you keep the load balanced?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Alternate large items from side to side and fill gaps with lighter boxes or soft goods.</p></div><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">What should stay accessible?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Keep items you may need sooner near the door so you do not have to unpack everything to reach them.</p></div></div><div className="mt-8 flex flex-wrap gap-4 text-sm"><Link href="/guides/moving-tips" className="text-accent hover:text-accent/80 transition-colors">Back to Moving Tips</Link><Link href="/guides/moving-tips/how-to-pack-fragile-items" className="text-accent hover:text-accent/80 transition-colors">Fragile packing</Link></div></div></section></main><Footer /></>
  )
}
