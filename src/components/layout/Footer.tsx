import Link from 'next/link'
import { SITE_NAME, SITE_AUTHOR } from '@/lib/constants'

/**
 * Site footer with copyright and links
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-muted bg-surface" role="contentinfo">
      <div className="container-padding mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-serif font-bold text-primary mb-2">
              {SITE_NAME}
            </h2>
            <p className="text-sm text-muted">
              The first social work human-centered AI practice.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-lg font-serif font-bold text-text mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about" 
                  className="text-muted hover:text-primary transition-colors focus:outline-none focus:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/portfolio" 
                  className="text-muted hover:text-primary transition-colors focus:outline-none focus:text-primary"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-muted hover:text-primary transition-colors focus:outline-none focus:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/pricing" 
                  className="text-muted hover:text-primary transition-colors focus:outline-none focus:text-primary"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-muted hover:text-primary transition-colors focus:outline-none focus:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-bold text-text mb-4">Connect</h3>
            <p className="text-sm text-muted mb-4">
              Founded by {SITE_AUTHOR}, Psychology Professor
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-muted text-center">
          <p className="text-sm text-muted">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
