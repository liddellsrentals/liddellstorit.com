import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { serviceAreas, siteConfig } from '@/lib/site-content'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd } from '@/components/json-ld'
import { buildPortableStorageProductSchema } from '@/lib/seo'

type ServiceAreaPageProps = {
  params: Promise<{
    slug: string
  }>
}

export const dynamic = 'force-static'
export const dynamicParams = false

function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug)
}

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({ params }: ServiceAreaPageProps): Promise<Metadata> {
  const { slug } = await params
  const area = getServiceArea(slug)

  if (!area) {
    return {
      title: 'Service Area | Liddell Stor-It',
      description: 'Portable storage delivery areas for Liddell Stor-It.',
    }
  }

  return {
    title: `${area.title} | Liddell Stor-It`,
    description: area.description,
  }
}

export default async function ServiceAreaPage({ params }: ServiceAreaPageProps) {
  const { slug } = await params
  const serviceArea = getServiceArea(slug)

  if (!serviceArea) {
    notFound()
  }

  const locationName = serviceArea.title

  return (
    <>
      <Header variant="solid" />
      <main className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
            <Breadcrumbs
              items={[
                { name: 'Home', url: '/' },
                { name: 'Service Areas', url: '/service-areas' },
                { name: serviceArea.title, url: `/service-areas/${serviceArea.slug}/` },
              ]}
            />
            <JsonLd data={buildPortableStorageProductSchema(`https://liddellstorit.com/service-areas/${serviceArea.slug}/`)} />
            <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Service area</p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground text-balance">{serviceArea.title}</h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              {serviceArea.description}
            </p>
            <div className="mt-10 space-y-4 text-sm leading-relaxed text-foreground">
              <p>Portable storage keeps the container close to your project, whether you are moving, clearing space for a remodel, or managing business overflow.</p>
              <p>Delivery and pickup are scheduled around your timeline, and our team can help you choose the right container for the job.</p>
            </div>
            <div className="mt-8 rounded-lg bg-muted p-6 text-sm leading-relaxed text-muted-foreground">
              Call {siteConfig.formattedPhone} to check delivery availability for {locationName} and nearby communities.
            </div>
            <div className="mt-8 flex gap-6 text-sm">
              <Link href="/service-areas/" className="text-accent hover:text-accent/80 transition-colors">All service areas</Link>
              <Link href={siteConfig.reserveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">Reserve now</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
