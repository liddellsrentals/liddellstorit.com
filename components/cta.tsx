import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-primary-foreground text-balance">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-primary-foreground/80 leading-relaxed">
            Reserve your portable storage container today. We serve Paragould, Arkansas and the surrounding areas.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              tracking={{
                interaction_type: 'link',
                interaction_text: 'Reserve Now',
                interaction_location: 'cta',
                link_url: 'https://www.liddellstorall.com/pages/storit',
              }}
            >
              <Link href="https://www.liddellstorall.com/pages/storit" target="_blank" rel="noopener noreferrer">
                Reserve Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
