import Link from 'next/link'
import { SITE_NAME, SITE_TAGLINE } from '@/lib/constants'
import Nav from './Nav'

/**
 * Site header with logo and navigation
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-muted bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-padding mx-auto">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link 
              href="/" 
              className="flex flex-col no-underline hover:no-underline focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background rounded-md px-2 py-1"
              aria-label={`${SITE_NAME} - Home`}
            >
              <span className="text-2xl font-serif font-bold text-primary">
                {SITE_NAME}
              </span>
              <span className="text-sm text-muted">
                {SITE_TAGLINE}
              </span>
            </Link>
          </div>
          <Nav />
        </div>
      </div>
    </header>
  )
}
