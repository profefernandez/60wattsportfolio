import type { Metadata } from 'next'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `Blog Post: ${slug}`,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // In a real app, you would fetch the blog post data here
  // For now, just show a placeholder
  const { slug } = await params

  return (
    <div className="container-padding mx-auto section-spacing">
      <div className="max-w-3xl mx-auto">
        <article>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">
              Blog Post: {slug}
            </h1>
            <p className="text-muted">Content coming soon.</p>
          </header>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-muted">
              This is a placeholder for the blog post with slug:{' '}
              <code className="text-primary">{slug}</code>
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
