import { HTMLAttributes, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  asChild?: boolean
}

/**
 * Card component using surface color
 * Optional hover effect with amber glow
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'

    return (
      <Comp
        ref={ref}
        className={cn(
          'rounded-lg bg-surface border border-muted p-6',
          hover && 'glow-hover cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)

Card.displayName = 'Card'

export default Card
