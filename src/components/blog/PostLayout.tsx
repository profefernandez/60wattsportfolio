import { ReactNode } from 'react'
import { formatDate } from '@/lib/utils'

export interface PostLayoutProps {
  title: string
  date: string
  author: string
  tags?: string[]
  children: ReactNode
}

/**
 * Blog post full layout
 * Structured layout for individual blog posts
 */
export default function PostLayout({ title, date, author, tags = [], children }: PostLayoutProps) {
  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">{title}</h1>
        <div className="flex flex-wrap gap-4 text-muted text-sm mb-6">
          <div>
            <span className="font-medium text-text">Published:</span>{' '}
            <time dateTime={date}>{formatDate(date)}</time>
          </div>
          <div>
            <span className="font-medium text-text">Author:</span> {author}
          </div>
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-surface text-primary border border-muted rounded-full"
                aria-label={`Tag: ${tag}`}
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
