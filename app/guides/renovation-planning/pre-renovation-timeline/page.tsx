import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { contentFreshnessDate, siteConfig } from '@/lib/site-content'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { buildPortableStorageProductSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Pre-Renovation Timeline | Liddell Stor-It',
  description: 'A pre-renovation timeline to help you clear rooms and reserve storage before remodeling starts.',
}

const formatMonthYear = (value: string) => new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

export default function PreRenovationTimelinePage() {
  return (
    <>
      <Header variant="solid" />
      <main className="pt-16"><section className="py-20 bg-background"><div className="container mx-auto px-6 lg:px-8 max-w-3xl"><Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/guides' }, { name: 'Renovation Planning', url: '/guides/renovation-planning' }, { name: 'Pre-Renovation Timeline', url: '/guides/renovation-planning/pre-renovation-timeline' }]} /><JsonLd data={buildPortableStorageProductSchema(`${siteConfig.url}/guides/renovation-planning/pre-renovation-timeline`)} /><p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Cluster article</p><h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">What should your pre-renovation timeline include?</h1><p className="mt-3 text-xs uppercase tracking-wide text-accent">Last updated: {formatMonthYear(contentFreshnessDate)}</p><p className="mt-5 text-muted-foreground leading-relaxed">A timeline keeps the project moving because the storage, packing, and room-clearing steps happen before work starts.</p><div className="mt-10 space-y-4"><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">What happens first?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Reserve storage and decide what needs to leave the room before demolition or materials arrive.</p></div><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">What comes next?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Pack the furniture, boxes, and decor that will be in the way once work begins.</p></div><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">What is the goal?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Have the rooms cleared early enough that contractors can start without delay.</p></div></div><div className="mt-8 flex flex-wrap gap-4 text-sm"><Link href="/guides/renovation-planning" className="text-accent hover:text-accent/80 transition-colors">Back to Renovation Planning</Link><Link href="/guides/renovation-planning/how-to-protect-furniture-during-remodel" className="text-accent hover:text-accent/80 transition-colors">Protect furniture</Link></div></div></section></main><Footer /></>
  )
}
