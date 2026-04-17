import Image from 'next/image'
import { trustFacts, siteConfig } from '@/lib/site-content'

export function TrustSignals() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Trust & credibility</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground text-balance">
              Local service backed by real community roots
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
              {siteConfig.name} is part of {siteConfig.parentName}, with a long local history in Paragould and a business model centered on straightforward service, clean operations, and responsive support.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {trustFacts.map((fact) => (
                <div key={fact} className="rounded-lg border border-border bg-background p-4 text-sm text-foreground">
                  {fact}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-muted p-8 border border-border">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-background">
              <Image
                src="/images/owner.jpg"
                alt="Lance Liddell, owner of Liddell Stor-It"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm uppercase tracking-wide text-accent font-medium mt-6 mb-4">Owner note</p>
            <blockquote className="text-lg leading-relaxed text-foreground">
              “At Liddell StorAll, we strive to be professional, clean, and to love our local community.”
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground">
              Lance Liddell, Owner
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
