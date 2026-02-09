import type { Metadata } from 'next'

interface AICaseStudyPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: AICaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `AI Project: ${slug}`,
  }
}

export default async function AICaseStudyPage({ params }: AICaseStudyPageProps) {
  const { slug } = await params

  return (
    <div className="container-padding mx-auto section-spacing">
      <div className="max-w-4xl mx-auto">
        <article>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">
              AI Project: {slug}
            </h1>
            <p className="text-muted">Content coming soon.</p>
          </header>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-muted">
              This is a placeholder for the AI case study with slug:{' '}
              <code className="text-primary">{slug}</code>
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
