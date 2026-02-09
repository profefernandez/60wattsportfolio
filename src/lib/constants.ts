import { NavItem } from '@/types'

/**
 * Site name and branding
 */
export const SITE_NAME = '60 Watts of Clarity'
export const SITE_TAGLINE = 'The missing instructions to AI'
export const SITE_DESCRIPTION = 'The first social work human-centered AI practice.'
export const SITE_AUTHOR = 'Jason Fernandez, LMSW'

/**
 * Operational philosophy framework
 */
export const FRAMEWORK = ['Learn', 'Build', 'Deploy'] as const

/**
 * Portfolio categories
 */
export const PORTFOLIO_CATEGORIES = [
  { slug: 'websites', label: 'Websites' },
  { slug: 'ai', label: 'AI' },
  { slug: 'education', label: 'Education' },
  { slug: 'social-work', label: 'Social Work' },
  { slug: 'workshops', label: 'Workshops' },
  { slug: 'consulting', label: 'Consulting' },
] as const

/**
 * Main navigation structure
 */
export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
    children: [
      { label: 'Overview', href: '/portfolio' },
      { label: 'Websites', href: '/portfolio/websites' },
      { label: 'AI', href: '/portfolio/ai' },
      { label: 'Education', href: '/portfolio/education' },
      { label: 'Social Work', href: '/portfolio/social-work' },
      { label: 'Workshops', href: '/portfolio/workshops' },
      { label: 'Consulting', href: '/portfolio/consulting' },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

/**
 * Social media links (placeholder)
 */
export const SOCIAL_LINKS = {
  twitter: '',
  linkedin: '',
  github: '',
} as const
