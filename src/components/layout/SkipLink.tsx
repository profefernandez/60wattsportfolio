/**
 * Skip to main content link for keyboard navigation
 * WCAG 2.1 AAA - Provides a way to bypass navigation blocks
 */
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-primary focus:text-background focus:font-bold focus:rounded-md focus:shadow-glow"
    >
      Skip to main content
    </a>
  )
}
