import Link from 'next/link'
import Card from '@/components/ui/Card'
import { formatDate, truncate } from '@/lib/utils'

export interface PostCardProps {
  title: string
  slug: string
  date: string
  excerpt: string
  tags?: string[]
  author?: string
}

/**
 * Blog post preview card
 * Displays summary information for a blog post
 */
export default function PostCard({ title, slug, date, excerpt, tags = [], author }: PostCardProps) {
  return (
    <Card hover asChild>
      <Link href={`/blog/${slug}`} className="block no-underline">
        <article>
          <header className="mb-4">
            <h3 className="text-2xl font-serif font-bold text-text mb-2 hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="text-sm text-muted flex gap-4">
              <time dateTime={date}>{formatDate(date)}</time>
              {author && <span>By {author}</span>}
            </div>
          </header>
          <p className="text-muted mb-4">{truncate(excerpt, 150)}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-medium bg-background text-primary border border-muted rounded"
                  aria-label={`Tag: ${tag}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </article>
      </Link>
    </Card>
  )
}
