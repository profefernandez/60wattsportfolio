import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { SITE_NAME, SITE_TAGLINE, FRAMEWORK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Home',
}

export default function HomePage() {
  return (
    <div className="container-padding mx-auto">
      {/* Hero Section */}
      <section className="section-spacing text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-text mb-6 text-glow">
          {SITE_NAME}
        </h1>
        <p className="text-xl md:text-2xl text-primary mb-4 font-medium">
          {SITE_TAGLINE}
        </p>
        <p className="text-lg text-muted mb-12 max-w-2xl mx-auto">
          The first social work human-centered AI practice. Founded by Jason Fernandez, LMSW 
          and Psychology Professor.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="cta" size="lg" asChild>
            <Link href="/portfolio">View Portfolio</Link>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      {/* Framework Section */}
      <section className="section-spacing bg-surface rounded-lg p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-text mb-12">
          Our Approach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FRAMEWORK.map((step, index) => (
            <div key={step} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-background flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {index + 1}
              </div>
              <h3 className="text-2xl font-serif font-bold text-text mb-3">{step}</h3>
              <p className="text-muted">
                Content coming soon.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
          Explore our services and discover how we can help you navigate the world of AI 
          with a human-centered approach.
        </p>
        <Button variant="primary" size="lg" asChild>
          <Link href="/pricing">View Pricing</Link>
        </Button>
      </section>
    </div>
  )
}
