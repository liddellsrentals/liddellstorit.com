import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { buildBreadcrumbList, type BreadcrumbItem } from '@/lib/seo'
import { JsonLd } from '@/components/json-ld'

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <li key={item.url} className="flex items-center gap-2">
                {isLast ? (
                  <span className="text-foreground">{item.name}</span>
                ) : (
                  <Link href={item.url} className="hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                )}
                {!isLast && <ChevronRight className="h-3.5 w-3.5" />}
              </li>
            )
          })}
        </ol>
      </nav>
      <JsonLd data={buildBreadcrumbList(items)} />
    </>
  )
}
