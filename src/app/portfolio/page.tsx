import type { Metadata } from 'next'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { PORTFOLIO_CATEGORIES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore our work across websites, AI, education, social work, workshops, and consulting.',
}

export default function PortfolioPage() {
  return (
    <div className="container-padding mx-auto section-spacing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">Portfolio</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Content coming soon. Explore our work across various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_CATEGORIES.map((category) => (
            <Card key={category.slug} hover>
              <Link href={`/portfolio/${category.slug}`} className="block no-underline">
                <h2 className="text-2xl font-serif font-bold text-text mb-3 hover:text-primary transition-colors">
                  {category.label}
                </h2>
                <p className="text-muted mb-4">
                  Content coming soon. Explore our {category.label.toLowerCase()} work.
                </p>
                <Button variant="ghost" size="sm" asChild>
                  <span>View Projects →</span>
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
