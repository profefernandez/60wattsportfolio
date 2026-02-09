'use client'

import { useState } from 'react'
import { PORTFOLIO_CATEGORIES } from '@/lib/constants'
import Button from '@/components/ui/Button'

export interface PortfolioFilterProps {
  onFilterChange?: (category: string | null) => void
}

/**
 * Filter controls for portfolio items
 * Allows users to filter by category
 */
export default function PortfolioFilter({ onFilterChange }: PortfolioFilterProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const handleFilterClick = (category: string | null) => {
    setActiveFilter(category)
    onFilterChange?.(category)
  }

  return (
    <div className="flex flex-wrap gap-3" role="group" aria-label="Portfolio filters">
      <Button
        variant={activeFilter === null ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => handleFilterClick(null)}
        aria-pressed={activeFilter === null}
      >
        All
      </Button>
      {PORTFOLIO_CATEGORIES.map((category) => (
        <Button
          key={category.slug}
          variant={activeFilter === category.slug ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => handleFilterClick(category.slug)}
          aria-pressed={activeFilter === category.slug}
        >
          {category.label}
        </Button>
      ))}
    </div>
  )
}
