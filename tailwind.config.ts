import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#1A1A1A',
        surface: '#2A2725',
        primary: '#F5A623',
        accent: '#C75B39',
        text: '#EDE8E2',
        muted: '#6B6560',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(245, 166, 35, 0.3)',
        'glow-lg': '0 0 30px rgba(245, 166, 35, 0.4)',
      },
    },
  },
  plugins: [],
}

export default config
