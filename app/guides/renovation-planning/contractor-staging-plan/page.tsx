import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { contentFreshnessDate, siteConfig } from '@/lib/site-content'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { buildPortableStorageProductSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Contractor Staging Plan | Liddell Stor-It',
  description: 'How to stage rooms so contractors can work efficiently during a renovation.',
}

const formatMonthYear = (value: string) => new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

export default function ContractorStagingPlanPage() {
  return (
    <>
      <Header variant="solid" />
      <main className="pt-16"><section className="py-20 bg-background"><div className="container mx-auto px-6 lg:px-8 max-w-3xl"><Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/guides' }, { name: 'Renovation Planning', url: '/guides/renovation-planning' }, { name: 'Contractor Staging Plan', url: '/guides/renovation-planning/contractor-staging-plan' }]} /><JsonLd data={buildPortableStorageProductSchema(`${siteConfig.url}/guides/renovation-planning/contractor-staging-plan`)} /><p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Cluster article</p><h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">How do you build a contractor staging plan?</h1><p className="mt-3 text-xs uppercase tracking-wide text-accent">Last updated: {formatMonthYear(contentFreshnessDate)}</p><p className="mt-5 text-muted-foreground leading-relaxed">A staging plan keeps the work area open, helps the crew move efficiently, and reduces the amount of clutter in the house during the remodel.</p><div className="mt-10 space-y-4"><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">What should the room look like?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Keep the path clear and leave only the items that contractors need to access for the project.</p></div><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">What should move to storage?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Move furniture, decor, and extra household items out of the room before work begins.</p></div><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">Why does staging matter?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">It helps the project stay organized and lowers the chance of delays caused by clutter or blocked access.</p></div></div><div className="mt-8 flex flex-wrap gap-4 text-sm"><Link href="/guides/renovation-planning" className="text-accent hover:text-accent/80 transition-colors">Back to Renovation Planning</Link><Link href="/guides/renovation-planning/pre-renovation-timeline" className="text-accent hover:text-accent/80 transition-colors">Pre-renovation timeline</Link></div></div></section></main><Footer /></>
  )
}
