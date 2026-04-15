import { Home, Hammer, Box, Building2 } from "lucide-react"

const useCases = [
  {
    icon: Home,
    title: "Moving",
    description: "Pack at your own pace before your move. Keep your belongings secure and accessible until you're ready.",
  },
  {
    icon: Hammer,
    title: "Home Renovation",
    description: "Clear out rooms for renovation projects. Store furniture and belongings safely on-site while work is being done.",
  },
  {
    icon: Box,
    title: "Decluttering",
    description: "Create space in your home by storing seasonal items, extra furniture, or belongings you're not ready to part with.",
  },
  {
    icon: Building2,
    title: "Business Storage",
    description: "Temporary storage for business inventory, equipment, or supplies. Convenient and cost-effective.",
  },
]

export function UseCases() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground text-balance">
            Perfect For Any Situation
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether you're moving, renovating, or just need extra space, our portable storage containers are the solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase) => (
            <div 
              key={useCase.title} 
              className="bg-card rounded-lg p-8 flex gap-6 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <useCase.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
