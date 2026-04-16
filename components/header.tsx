"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between py-6">
          <Link href="/" className="flex flex-col">
            <span className="text-xl font-serif font-semibold text-primary-foreground tracking-tight">
              Liddell Stor-It
            </span>
            <span className="text-xs text-primary-foreground/70 tracking-wide">
              Portable Storage Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#contact"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Contact
            </Link>
            <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="https://www.liddellstorall.com/pages/storit" target="_blank" rel="noopener noreferrer">
                Reserve Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground font-bold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-foreground/95 backdrop-blur-sm rounded-lg p-6 mb-4">
            <div className="flex flex-col gap-4">
              <Link
                href="#services"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#how-it-works"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#contact"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-primary-foreground/20">
                <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                  <Link href="https://www.liddellstorall.com/pages/storit" target="_blank" rel="noopener noreferrer">
                    Reserve Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
