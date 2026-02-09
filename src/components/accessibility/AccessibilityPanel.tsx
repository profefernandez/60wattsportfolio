'use client'

/**
 * Accessibility settings panel
 * Provides user controls for enhanced accessibility
 * Note: Actual settings implementation would require state management
 */
export default function AccessibilityPanel() {
  return (
    <aside 
      className="bg-surface border border-muted rounded-lg p-6"
      aria-label="Accessibility settings"
    >
      <h2 className="text-xl font-serif font-bold text-text mb-4">
        Accessibility Settings
      </h2>
      <p className="text-sm text-muted mb-4">
        This site is designed to meet WCAG 2.1 AAA accessibility standards.
      </p>
      <div className="space-y-4">
        <div>
          <h3 className="text-base font-medium text-text mb-2">Features</h3>
          <ul className="text-sm text-muted space-y-2 list-disc list-inside">
            <li>High contrast color scheme (7:1 ratio minimum)</li>
            <li>Keyboard navigation support</li>
            <li>Screen reader compatible</li>
            <li>Reduced motion support</li>
            <li>Focus indicators on all interactive elements</li>
          </ul>
        </div>
      </div>
    </aside>
  )
}
