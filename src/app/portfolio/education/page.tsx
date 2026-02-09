import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Education Portfolio',
  description: 'Educational programs and teaching materials.',
}

export default function EducationPortfolioPage() {
  return (
    <div className="container-padding mx-auto section-spacing">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">Education</h1>
          <p className="text-xl text-muted">
            Content coming soon. Educational programs and teaching materials.
          </p>
        </div>

        {/* Placeholder for portfolio items */}
        <div className="text-center py-16">
          <p className="text-lg text-muted">No projects yet. Check back soon!</p>
        </div>
      </div>
    </div>
  )
}
