import * as Sentry from '@sentry/nextjs'

/**
 * Initialize Sentry for error tracking
 * Only initializes if SENTRY_DSN environment variable is set
 */
export function initSentry() {
  const dsn = process.env.SENTRY_DSN

  if (dsn) {
    Sentry.init({
      dsn,
      tracesSampleRate: 1.0,
      debug: false,
      replaysOnErrorSampleRate: 1.0,
      replaysSessionSampleRate: 0.1,
      integrations: [
        Sentry.replayIntegration({
          maskAllText: true,
          blockAllMedia: true,
        }),
      ],
    })
  }
}

export { Sentry }
