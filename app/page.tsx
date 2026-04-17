import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { UseCases } from "@/components/use-cases"
import { TrustSignals } from "@/components/trust-signals"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqPreview } from "@/components/faq-preview"
import { ResourceLinks } from "@/components/resource-links"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { buildPortableStorageProductSchema } from "@/lib/seo"
import { siteConfig } from '@/lib/site-content'

export default function Home() {
  return (
    <>
      <JsonLd data={buildPortableStorageProductSchema(siteConfig.url)} />
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <UseCases />
        <TrustSignals />
        <TestimonialsSection />
        <FaqPreview />
        <ResourceLinks />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
