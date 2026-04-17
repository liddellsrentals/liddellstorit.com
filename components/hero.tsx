import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stor-it-hero.jpg"
          alt="Liddell Stor-It portable storage container delivered to a residential driveway"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
            Serving the North East Arkansas Community & Surrounding Areas
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-primary-foreground leading-tight text-balance">
            Portable Storage
            <br />
            <span className="font-normal">Delivered to You</span>
          </h1>
          <p className="hidden sm:block mt-6 text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
            Need extra space? We deliver convenient, secure storage containers right to your location. Perfect for moving, renovation projects, or simply decluttering your home.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              tracking={{
                interaction_type: 'link',
                interaction_text: 'Reserve Now',
                interaction_location: 'hero',
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
