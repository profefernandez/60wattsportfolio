/**
 * Type definitions for 60 Watts of Clarity portfolio website
 */

/**
 * Blog post metadata and content
 */
export interface BlogPost {
  title: string
  slug: string
  date: string
  excerpt: string
  content: string
  tags: string[]
  author: string
  published: boolean
}

/**
 * Portfolio item/case study
 */
export interface PortfolioItem {
  title: string
  slug: string
  category: 'websites' | 'ai' | 'education' | 'social-work' | 'workshops' | 'consulting'
  description: string
  client?: string
  date: string
  tags: string[]
  content: string
  featured: boolean
  coverImage?: string
}

/**
 * Pricing tier information
 */
export interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
}

/**
 * Navigation item structure
 */
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

/**
 * Site metadata
 */
export interface SiteMetadata {
  title: string
  description: string
  url: string
  author: string
  social: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}
