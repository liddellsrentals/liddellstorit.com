import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { serviceAreaFreshnessDate, serviceAreas, siteConfig, type ServiceArea } from '@/lib/site-content'
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

const formatMonthYear = (value: string) =>
  new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date(value))

function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug)
}

const formatDriveTime = (minutes: number) => {
  if (minutes < 60) return `about ${minutes} minutes`
  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  const hourLabel = hours === 1 ? '1 hour' : `${hours} hours`
  return rest < 5 ? `about ${hourLabel}` : `about ${hourLabel} ${rest} minutes`
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
    alternates: {
      canonical: `/service-areas/${area.slug}/`,
    },
  }
}

export default async function ServiceAreaPage({ params }: ServiceAreaPageProps) {
  const { slug } = await params
  const serviceArea = getServiceArea(slug)

  if (!serviceArea) {
    notFound()
  }

  const locationName = serviceArea.title
  const { radiusMiles, feeWithinRadius } = siteConfig.deliveryZone
  const cityName = serviceArea.city ?? serviceArea.title
  const hasDistance = typeof serviceArea.roadMiles === 'number' && typeof serviceArea.driveMinutes === 'number'
  const withinZone = hasDistance && serviceArea.roadMiles! <= radiusMiles
  const nearbyAreas = (serviceArea.nearby ?? [])
    .map((slug) => serviceAreas.find((area) => area.slug === slug))
    .filter((area): area is ServiceArea => Boolean(area))

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
            <p className="mt-3 text-xs uppercase tracking-wide text-accent">Updated {formatMonthYear(serviceAreaFreshnessDate)}</p>

            {hasDistance && (
              <dl className="mt-10 grid gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-3">
                <div className="bg-background p-5">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">Distance from our yard</dt>
                  <dd className="mt-1 text-2xl font-serif font-light text-foreground">{serviceArea.roadMiles} mi</dd>
                </div>
                <div className="bg-background p-5">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">Typical drive time</dt>
                  <dd className="mt-1 text-2xl font-serif font-light text-foreground">{serviceArea.driveMinutes} min</dd>
                </div>
                <div className="bg-background p-5">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">County</dt>
                  <dd className="mt-1 text-2xl font-serif font-light text-foreground">{serviceArea.county}</dd>
                </div>
              </dl>
            )}

            <h2 className="mt-12 text-2xl font-serif font-light text-foreground">
              Portable storage delivery in {cityName}
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground">
              <p>Portable storage keeps the container close to your project, whether you are moving, clearing space for a remodel, or managing business overflow.</p>
              <p>Delivery and pickup are scheduled around your timeline, and our team can help you choose the right container for the job.</p>
              {hasDistance && (
                <p>
                  {cityName} is about {serviceArea.roadMiles} miles from our yard at {siteConfig.address.streetAddress} in{' '}
                  {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} &mdash;{' '}
                  {formatDriveTime(serviceArea.driveMinutes!)} by road.
                </p>
              )}
            </div>

            {hasDistance && (
              <>
                <h2 className="mt-12 text-2xl font-serif font-light text-foreground">
                  Delivery and pickup to {cityName}
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground">
                  {withinZone ? (
                    <p>
                      At {serviceArea.roadMiles} miles out, {cityName} sits inside the {radiusMiles}-mile radius our
                      standard ${feeWithinRadius} delivery and ${feeWithinRadius} pickup fees cover. Container
                      relocation within that radius is also ${feeWithinRadius}.
                    </p>
                  ) : (
                    <p>
                      At {serviceArea.roadMiles} miles out, {cityName} is beyond the {radiusMiles}-mile radius our
                      standard ${feeWithinRadius} delivery and pickup fees cover, so delivery here is quoted per job.
                      Call {siteConfig.formattedPhone} for a delivery quote to {cityName}.
                    </p>
                  )}
                  <p>
                    Monthly container rental is the same wherever we deliver:{' '}
                    {siteConfig.containerOffers
                      .map((offer) => `${offer.size} at $${offer.monthlyRent} per month`)
                      .join(', and ')}
                    .
                  </p>
                </div>
              </>
            )}

            {nearbyAreas.length > 0 && (
              <>
                <h2 className="mt-12 text-2xl font-serif font-light text-foreground">
                  Other areas we serve near {cityName}
                </h2>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed">
                  {nearbyAreas.map((area) => (
                    <li key={area.slug}>
                      <Link href={`/service-areas/${area.slug}/`} className="text-accent hover:text-accent/80 transition-colors">
                        {area.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-10 rounded-lg bg-muted p-6 text-sm leading-relaxed text-muted-foreground">
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
