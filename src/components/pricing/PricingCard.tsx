import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
  onCtaClick?: () => void
}

/**
 * Pricing tier card component
 * Displays pricing information with features list
 */
export default function PricingCard({
  name,
  price,
  description,
  features,
  cta,
  highlighted = false,
  onCtaClick,
}: PricingCardProps) {
  return (
    <Card
      className={highlighted ? 'ring-2 ring-primary shadow-glow' : ''}
      role="article"
      aria-label={`${name} pricing tier`}
    >
      {highlighted && (
        <div className="mb-4 text-center">
          <span className="inline-block px-3 py-1 text-xs font-bold bg-primary text-background rounded-full">
            Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-serif font-bold text-text mb-2">{name}</h3>
        <div className="text-4xl font-bold text-primary mb-2">{price}</div>
        <p className="text-sm text-muted">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-muted text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={highlighted ? 'cta' : 'primary'}
        className="w-full"
        onClick={onCtaClick}
        aria-label={`${cta} for ${name} plan`}
      >
        {cta}
      </Button>
    </Card>
  )
}
