import type { Metadata } from 'next'
import PricingCard from '@/components/pricing/PricingCard'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Explore our pricing tiers and find the right plan for your needs.',
}

export default function PricingPage() {
  const pricingTiers = [
    {
      name: 'Starter',
      price: 'Contact',
      description: 'Perfect for getting started',
      features: [
        'Feature placeholder 1',
        'Feature placeholder 2',
        'Feature placeholder 3',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Professional',
      price: 'Contact',
      description: 'Best for growing teams',
      features: [
        'All Starter features',
        'Feature placeholder 4',
        'Feature placeholder 5',
        'Feature placeholder 6',
      ],
      cta: 'Get Started',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Contact',
      description: 'For large organizations',
      features: [
        'All Professional features',
        'Feature placeholder 7',
        'Feature placeholder 8',
        'Feature placeholder 9',
      ],
      cta: 'Contact Us',
      highlighted: false,
    },
  ]

  return (
    <div className="container-padding mx-auto section-spacing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">
            Pricing Plans
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Content coming soon. Choose a plan that fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </div>
    </div>
  )
}
