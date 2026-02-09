import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'cta' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

/**
 * Button component with multiple variants
 * - Primary: Amber background with warm glow on hover
 * - CTA: Terracotta background for call-to-action
 * - Ghost: Transparent with subtle border
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none'

    const variants = {
      primary: 'bg-primary text-background hover:shadow-glow hover:brightness-110',
      cta: 'bg-accent text-text hover:brightness-110',
      ghost:
        'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-background',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        // eslint-disable-next-line security/detect-object-injection
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)

Button.displayName = 'Button'

export default Button
