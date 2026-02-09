import { ReactNode } from 'react'
import { formatDate } from '@/lib/utils'

export interface CaseStudyProps {
  title: string
  client?: string
  date: string
  tags?: string[]
  children: ReactNode
}

/**
 * Case study template component
 * Structured layout for portfolio case studies
 */
export default function CaseStudy({ title, client, date, tags = [], children }: CaseStudyProps) {
  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">{title}</h1>
        <div className="flex flex-wrap gap-4 text-muted text-sm mb-6">
          {client && (
            <div>
              <span className="font-medium text-text">Client:</span> {client}
            </div>
          )}
          <div>
            <span className="font-medium text-text">Date:</span> {formatDate(date)}
          </div>
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-surface text-primary border border-muted rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <div className="prose prose-invert prose-lg max-w-none">{children}</div>
    </article>
  )
}
