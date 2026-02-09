import type { Metadata } from 'next'

interface WebsiteCaseStudyPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: WebsiteCaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `Website Project: ${slug}`,
  }
}

export default async function WebsiteCaseStudyPage({ params }: WebsiteCaseStudyPageProps) {
  const { slug } = await params

  return (
    <div className="container-padding mx-auto section-spacing">
      <div className="max-w-4xl mx-auto">
        <article>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">
              Website Project: {slug}
            </h1>
            <p className="text-muted">
              Content coming soon.
            </p>
          </header>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-muted">
              This is a placeholder for the website case study with slug: <code className="text-primary">{slug}</code>
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
