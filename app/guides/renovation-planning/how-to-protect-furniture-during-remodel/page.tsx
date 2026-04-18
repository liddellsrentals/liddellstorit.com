import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { contentFreshnessDate, siteConfig } from '@/lib/site-content'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { buildPortableStorageProductSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'How to Protect Furniture During a Remodel | Liddell Stor-It',
  description: 'How to protect furniture during a remodel and keep it safe in storage.',
}

const formatMonthYear = (value: string) => new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

export default function ProtectFurnitureRemodelPage() {
  return (
    <>
      <Header variant="solid" />
      <main className="pt-16"><section className="py-20 bg-background"><div className="container mx-auto px-6 lg:px-8 max-w-3xl"><Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/guides' }, { name: 'Renovation Planning', url: '/guides/renovation-planning' }, { name: 'How to Protect Furniture During a Remodel', url: '/guides/renovation-planning/how-to-protect-furniture-during-remodel' }]} /><JsonLd data={buildPortableStorageProductSchema(`${siteConfig.url}/guides/renovation-planning/how-to-protect-furniture-during-remodel`)} /><p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Cluster article</p><h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">How do you protect furniture during a remodel?</h1><p className="mt-3 text-xs uppercase tracking-wide text-accent">Last updated: {formatMonthYear(contentFreshnessDate)}</p><p className="mt-5 text-muted-foreground leading-relaxed">Furniture stays safer when it is moved out of the work zone, wrapped well, and stored where dust and debris cannot reach it.</p><div className="mt-10 space-y-4"><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">What is the first step?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Clear the room and move the largest pieces before demolition begins.</p></div><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">How should you wrap items?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Use padding, blankets, and protective covers so surfaces do not get scratched or dusty.</p></div><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">Why use a container?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">It gives you a controlled place to store furniture until the remodel is finished.</p></div></div><div className="mt-8 flex flex-wrap gap-4 text-sm"><Link href="/guides/renovation-planning" className="text-accent hover:text-accent/80 transition-colors">Back to Renovation Planning</Link><Link href="/guides/renovation-planning/contractor-staging-plan" className="text-accent hover:text-accent/80 transition-colors">Contractor staging plan</Link></div></div></section></main><Footer /></>
  )
}
