import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with 60 Watts of Clarity.',
}

export default function ContactPage() {
  return (
    <div className="container-padding mx-auto section-spacing">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-muted">
            Content coming soon. We&apos;d love to hear from you.
          </p>
        </div>

        <Card className="p-8">
          <form className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-text mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-background border border-muted rounded-md text-text focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background"
                placeholder="Your name"
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-text mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-background border border-muted rounded-md text-text focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-text mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-background border border-muted rounded-md text-text focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-4 focus:ring-offset-background resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <Button type="submit" variant="cta" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}
