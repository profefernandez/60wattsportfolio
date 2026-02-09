import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface PortfolioGridProps {
  children: ReactNode
  columns?: 1 | 2 | 3
  className?: string
}

/**
 * Grid layout for portfolio items
 * Responsive grid that adapts to screen size
 */
export default function PortfolioGrid({ children, columns = 3, className }: PortfolioGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  }

  // eslint-disable-next-line security/detect-object-injection
  return <div className={cn('grid gap-6 md:gap-8', gridCols[columns], className)}>{children}</div>
}
