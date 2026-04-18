import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { contentFreshnessDate, siteConfig } from '@/lib/site-content'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { buildPortableStorageProductSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Decluttering by Room | Liddell Stor-It',
  description: 'A room-by-room decluttering approach that makes home organization easier.',
}

const formatMonthYear = (value: string) => new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

export default function DeclutteringByRoomPage() {
  return (
    <>
      <Header variant="solid" />
      <main className="pt-16"><section className="py-20 bg-background"><div className="container mx-auto px-6 lg:px-8 max-w-3xl"><Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/guides' }, { name: 'Home Organization', url: '/guides/home-organization' }, { name: 'Decluttering by Room', url: '/guides/home-organization/decluttering-by-room' }]} /><JsonLd data={buildPortableStorageProductSchema(`${siteConfig.url}/guides/home-organization/decluttering-by-room`)} /><p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Cluster article</p><h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">How do you declutter one room at a time?</h1><p className="mt-3 text-xs uppercase tracking-wide text-accent">Last updated: {formatMonthYear(contentFreshnessDate)}</p><p className="mt-5 text-muted-foreground leading-relaxed">A room-by-room approach keeps the process manageable because you can see progress without trying to tackle the whole house at once.</p><div className="mt-10 space-y-4"><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">What should you do first?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Clear surfaces, sort the visible clutter, and move anything you are keeping into a single pile.</p></div><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">How do you avoid burnout?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Finish one room before starting another so the process feels concrete instead of endless.</p></div><div className="rounded-lg border border-border bg-card p-6"><h2 className="text-xl font-medium text-foreground">Where does storage help?</h2><p className="mt-3 text-sm leading-relaxed text-foreground">Use storage for items you want to keep but do not need in the room right now.</p></div></div><div className="mt-8 flex flex-wrap gap-4 text-sm"><Link href="/guides/home-organization" className="text-accent hover:text-accent/80 transition-colors">Back to Home Organization</Link><Link href="/guides/home-organization/garage-organization" className="text-accent hover:text-accent/80 transition-colors">Garage organization</Link></div></div></section></main><Footer /></>
  )
}
