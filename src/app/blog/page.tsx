import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights and articles about AI, social work, and human-centered design.',
}

export default function BlogPage() {
  return (
    <div className="container-padding mx-auto section-spacing">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">
            Blog
          </h1>
          <p className="text-xl text-muted">
            Content coming soon. Insights and articles about AI, social work, and human-centered design.
          </p>
        </div>

        {/* Placeholder for blog posts */}
        <div className="text-center py-16">
          <p className="text-lg text-muted">
            No blog posts yet. Check back soon!
          </p>
        </div>
      </div>
    </div>
  )
}
