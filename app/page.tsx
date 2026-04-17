import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { UseCases } from "@/components/use-cases"
import { TrustSignals } from "@/components/trust-signals"
import { FaqPreview } from "@/components/faq-preview"
import { ResourceLinks } from "@/components/resource-links"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <UseCases />
        <TrustSignals />
        <FaqPreview />
        <ResourceLinks />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
