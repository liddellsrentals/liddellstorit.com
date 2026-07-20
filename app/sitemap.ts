import type { MetadataRoute } from 'next'
import { contentFreshnessDate, guides, serviceAreas } from '@/lib/site-content'
import { buildSiteUrl } from '@/lib/seo'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const freshnessDate = new Date(contentFreshnessDate)

  return [
    {
      url: buildSiteUrl(),
      lastModified: freshnessDate,
    },
    {
      url: buildSiteUrl('/faq/'),
      lastModified: freshnessDate,
    },
    {
      url: buildSiteUrl('/container-quality-standards/'),
      lastModified: freshnessDate,
    },
    {
      url: buildSiteUrl('/storage-demo/'),
      lastModified: freshnessDate,
    },
    {
      url: buildSiteUrl('/guides/'),
      lastModified: freshnessDate,
    },
    ...guides.map((guide) => ({
      url: buildSiteUrl(`/guides/${guide.slug}/`),
      lastModified: new Date(guide.updatedAt),
    })),
    {
      url: buildSiteUrl('/service-areas/'),
      lastModified: freshnessDate,
    },
    ...serviceAreas.map((area) => ({
      url: buildSiteUrl(`/service-areas/${area.slug}/`),
      lastModified: freshnessDate,
    })),
  ]
}
