import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Reserve Online or Call",
    description: "Choose your container size and rental period. Reserve online through our website or give us a call to schedule your delivery.",
  },
  {
    number: "02",
    title: "We Deliver",
    description: "We deliver the storage container right to your driveway or preferred location at a time that works for you.",
  },
  {
    number: "03",
    title: "Load at Your Pace",
    description: "Take your time loading your belongings. No rush, no pressure. Access your container whenever you need.",
  },
  {
    number: "04",
    title: "Store or Relocate",
    description: "Keep the container on-site for easy access, or have us move it to another location. Portable storage where you want it, when you want it.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground text-balance">
              How It Works
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
              Getting a portable storage container is easy. We handle the heavy lifting so you can focus on what matters.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="https://www.liddellstorall.com/pages/storit" target="_blank" rel="noopener noreferrer">
                  Reserve Your Container
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="text-4xl font-serif font-light text-accent/40">
                    {step.number}
                  </span>
                </div>
                <div className={index < steps.length - 1 ? "pb-8 border-b border-border" : ""}>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
