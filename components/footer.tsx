"use client"

import Link from "next/link"
import { Phone, MapPin, ExternalLink } from "lucide-react"
import { trackInteraction } from "@/lib/analytics"

export function Footer() {
  return (
    <footer id="contact" className="py-16 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Liddell Stor-It</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              A service of Liddell Stor All. Providing convenient portable storage solutions to Paragould, Arkansas and surrounding communities.
            </p>
            <Link
              href="https://www.liddellstorall.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors"
              onClick={() =>
                trackInteraction({
                  interaction_type: 'link',
                  interaction_text: 'Visit Liddell Stor All',
                  interaction_location: 'footer',
                  link_url: 'https://www.liddellstorall.com',
                })
              }
            >
              Visit Liddell Stor All
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wide mb-4">Contact</h4>
            <div className="space-y-4">
              <Link
                href="tel:8702369391"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                onClick={() =>
                  trackInteraction({
                    interaction_type: 'link',
                    interaction_text: '(870) 236-9391',
                    interaction_location: 'footer',
                    link_url: 'tel:8702369391',
                  })
                }
              >
                <Phone className="h-4 w-4" />
                <span>(870) 236-9391</span>
              </Link>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Paragould, Arkansas</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wide mb-4">Quick Links</h4>
            <div className="space-y-3">
              <Link
                href="https://www.liddellstorall.com/pages/storit"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                onClick={() =>
                  trackInteraction({
                    interaction_type: 'link',
                    interaction_text: 'Reserve a Container',
                    interaction_location: 'footer',
                    link_url: 'https://www.liddellstorall.com/pages/storit',
                  })
                }
              >
                Reserve a Container
              </Link>
              <Link
                href="https://www.liddellstorall.com/pages/about-us"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                onClick={() =>
                  trackInteraction({
                    interaction_type: 'link',
                    interaction_text: 'About Us',
                    interaction_location: 'footer',
                    link_url: 'https://www.liddellstorall.com/pages/about-us',
                  })
                }
              >
                About Us
              </Link>
              <Link
                href="https://www.liddellstorall.com/pages/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                onClick={() =>
                  trackInteraction({
                    interaction_type: 'link',
                    interaction_text: 'Contact Us',
                    interaction_location: 'footer',
                    link_url: 'https://www.liddellstorall.com/pages/contact',
                  })
                }
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-primary-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} Liddell Stor-It. A service of Liddell Stor All. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
