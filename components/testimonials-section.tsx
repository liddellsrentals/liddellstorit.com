'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '@/lib/site-content'

export function TestimonialsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const slideRef = useRef<HTMLElement>(null)
  const [slideStep, setSlideStep] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const node = scrollerRef.current
    const slide = slideRef.current

    if (!node || !slide) {
      return
    }

    const getStep = () => {
      const children = Array.from(node.children) as HTMLElement[]

      if (children.length > 1) {
        return children[1].offsetLeft - children[0].offsetLeft
      }

      return slide.getBoundingClientRect().width
    }

    const handleScroll = () => {
      const step = getStep()
      setActiveIndex(Math.round(node.scrollLeft / step))
    }

    const syncSlideWidth = () => {
      setSlideStep(getStep())
    }

    const resizeObserver = new ResizeObserver(() => {
      syncSlideWidth()
      handleScroll()
    })

    resizeObserver.observe(node)
    resizeObserver.observe(slide)
    node.addEventListener('scroll', handleScroll, { passive: true })
    syncSlideWidth()
    handleScroll()

    return () => {
      node.removeEventListener('scroll', handleScroll)
      resizeObserver.disconnect()
    }
  }, [])

  const scrollToIndex = (index: number) => {
    const node = scrollerRef.current

    if (!node) {
      return
    }

    const clampedIndex = Math.max(0, Math.min(testimonials.length - 1, index))
    node.scrollTo({ left: slideStep * clampedIndex, behavior: 'smooth' })
    setActiveIndex(clampedIndex)
  }

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-wide text-accent font-medium mb-4">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground text-balance">
              What customers say about the container experience
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A few examples of the feedback people share after using Liddell Stor-It for moves, remodels, and overflow storage.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors disabled:opacity-40"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={activeIndex === testimonials.length - 1}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors disabled:opacity-40"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden">
          <div ref={scrollerRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth lg:gap-6" aria-label="Customer testimonials carousel">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.quote}
                ref={index === 0 ? slideRef : undefined}
                className="w-full shrink-0 snap-start rounded-2xl border border-border bg-card p-8 shadow-sm md:w-[calc(50%-0.5rem)] md:p-6 lg:w-[calc(33.333%-1rem)]"
              >
                <div className="flex items-start gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border bg-muted">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} headshot`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex gap-1 text-accent" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={`${testimonial.quote}-${index}`} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-6 text-2xl md:text-2xl font-serif font-light leading-tight text-foreground text-balance">
                      “{testimonial.quote}”
                    </blockquote>
                    <div className="mt-8 flex flex-col gap-1 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{testimonial.name}</span>
                      <span>{testimonial.location}</span>
                      <span className="text-xs uppercase tracking-wide text-accent">{testimonial.useCase}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
