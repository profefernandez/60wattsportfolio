import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFoundPage() {
  return (
    <div className="container-padding mx-auto section-spacing">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-serif font-bold text-primary mb-6">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-muted mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
