'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

/**
 * Main navigation component with mobile hamburger menu
 * Fully keyboard accessible with ARIA labels
 */
export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <nav aria-label="Main navigation">
      {/* Desktop Navigation */}
      <div className="hidden md:flex md:gap-6 lg:gap-8">
        {NAV_ITEMS.map((item) => {
          const hasChildren = item.children && item.children.length > 0
          const isActive = isActiveLink(item.href)

          if (hasChildren) {
            return (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    'text-base font-medium transition-colors hover:text-primary focus:outline-none focus:text-primary',
                    isActive ? 'text-primary' : 'text-text'
                  )}
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {item.label}
                </Link>
                {/* Dropdown menu */}
                <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 bg-surface border border-muted rounded-md shadow-lg overflow-hidden">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn(
                        'block px-4 py-3 text-sm transition-colors hover:bg-background hover:text-primary focus:bg-background focus:text-primary focus:outline-none',
                        isActiveLink(child.href) ? 'text-primary bg-background' : 'text-text'
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            )
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-base font-medium transition-colors hover:text-primary focus:outline-none focus:text-primary',
                isActive ? 'text-primary' : 'text-text'
              )}
            >
              {item.label}
            </Link>
          )
        })}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-text hover:text-primary hover:bg-surface focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
          {mobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-surface border-b border-muted shadow-lg">
            <div className="container-padding py-4 space-y-1">
              {NAV_ITEMS.map((item) => {
                const hasChildren = item.children && item.children.length > 0
                const isActive = isActiveLink(item.href)

                return (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'block px-4 py-3 text-base font-medium rounded-md transition-colors hover:bg-background hover:text-primary focus:outline-none focus:bg-background focus:text-primary',
                        isActive ? 'text-primary bg-background' : 'text-text'
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {hasChildren && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'block px-4 py-2 text-sm rounded-md transition-colors hover:bg-background hover:text-primary focus:outline-none focus:bg-background focus:text-primary',
                              isActiveLink(child.href) ? 'text-primary bg-background' : 'text-muted'
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
