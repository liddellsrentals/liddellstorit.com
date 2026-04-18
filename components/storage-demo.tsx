import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/site-content'

const videoUrl = 'https://www.youtube.com/watch?v=XOkwt7pYjok'
const embedUrl = 'https://www.youtube.com/embed/XOkwt7pYjok'

export function StorageDemo() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
          <div>
            <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Video demo</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground text-balance">
              See how portable storage comes together
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
              This short demo shows how Liddell Stor-It brings storage to you, making moving, renovation, and overflow storage easier to plan.
            </p>

            <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p><span className="font-medium text-foreground">What this video explains:</span> how the service works, what customers can expect, and why portable storage is easier than making multiple trips.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-3 shadow-sm">
            <div className="aspect-video overflow-hidden rounded-xl bg-black">
              <iframe
                className="h-full w-full"
                src={embedUrl}
                title="Let Us Bring Storage To You"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Video source: <Link href={videoUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">YouTube</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
