import { Truck, Shield, Clock, Home } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Delivery & Pickup",
    description: "We deliver the storage container directly to your location and pick it up when you're done. No need to rent a truck or make multiple trips.",
  },
  {
    icon: Shield,
    title: "Secure Storage",
    description: "Our heavy-duty steel containers keep your belongings safe from weather and theft. Lock it up with your own padlock for added security.",
  },
  {
    icon: Clock,
    title: "Flexible Rental",
    description: "Rent for as long as you need—whether it's a few weeks during a move or several months during a renovation project.",
  },
  {
    icon: Home,
    title: "On-Site Convenience",
    description: "Keep your belongings close by with on-site storage. Access your items whenever you need them without driving to a storage facility.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground text-balance">
            Storage Made Simple
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Portable storage containers that come to you. No loading, no driving, no hassle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
