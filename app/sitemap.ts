import type { MetadataRoute } from 'next'
import { contentFreshnessDate, guides, serviceAreas, siteConfig } from '@/lib/site-content'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const freshnessDate = new Date(contentFreshnessDate)

  return [
    {
      url: siteConfig.url,
      lastModified: freshnessDate,
    },
    {
      url: `${siteConfig.url}/faq`,
      lastModified: freshnessDate,
    },
    {
      url: `${siteConfig.url}/container-quality-standards`,
      lastModified: freshnessDate,
    },
    {
      url: `${siteConfig.url}/guides`,
      lastModified: freshnessDate,
    },
    ...guides.map((guide) => ({
      url: `${siteConfig.url}/guides/${guide.slug}`,
      lastModified: new Date(guide.updatedAt),
    })),
    {
      url: `${siteConfig.url}/service-areas`,
      lastModified: freshnessDate,
    },
    ...serviceAreas.map((area) => ({
      url: `${siteConfig.url}/service-areas/${area.slug}/`,
      lastModified: freshnessDate,
    })),
  ]
}
