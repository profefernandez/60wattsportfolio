import type { Metadata } from 'next'
import { SITE_AUTHOR } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about 60 Watts of Clarity and our founder Jason Fernandez, LMSW.',
}

export default function AboutPage() {
  return (
    <div className="container-padding mx-auto section-spacing">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-8">
          About 60 Watts of Clarity
        </h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-muted mb-8">Content coming soon.</p>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-text mb-4">Our Mission</h2>
            <p className="text-muted">Content coming soon.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-text mb-4">About the Founder</h2>
            <p className="text-muted">
              Founded by {SITE_AUTHOR}, Psychology Professor. Content coming soon.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif font-bold text-text mb-4">
              Why &ldquo;60 Watts of Clarity&rdquo;?
            </h2>
            <p className="text-muted">Content coming soon.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
