import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  return {
    title: `Blog Post: ${params.slug}`,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // In a real app, you would fetch the blog post data here
  // For now, just show a placeholder

  return (
    <div className="container-padding mx-auto section-spacing">
      <div className="max-w-3xl mx-auto">
        <article>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">
              Blog Post: {params.slug}
            </h1>
            <p className="text-muted">
              Content coming soon.
            </p>
          </header>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-muted">
              This is a placeholder for the blog post with slug: <code className="text-primary">{params.slug}</code>
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
