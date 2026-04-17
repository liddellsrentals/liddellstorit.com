import type { MetadataRoute } from 'next'
import { guides, serviceAreas, siteConfig } from '@/lib/site-content'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: siteConfig.url,
      lastModified: now,
    },
    {
      url: `${siteConfig.url}/faq`,
      lastModified: now,
    },
    {
      url: `${siteConfig.url}/guides`,
      lastModified: now,
    },
    ...guides.map((guide) => ({
      url: `${siteConfig.url}/guides/${guide.slug}`,
      lastModified: new Date(guide.updatedAt),
    })),
    {
      url: `${siteConfig.url}/service-areas`,
      lastModified: now,
    },
    ...serviceAreas.map((area) => ({
      url: `${siteConfig.url}/service-areas/${area.slug}/`,
      lastModified: now,
    })),
  ]
}
