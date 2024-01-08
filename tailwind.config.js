import { nextui } from '@nextui-org/react'

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    }
  },
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            background: '#e2e2e2',
            foreground: '#0f0f0f',
            success: "#00ff73",
            danger: "#f31818"
          }
        },
        dark: {
          layout: {},
          colors: {
            background: '#0f0f0f',
            foreground: '#e2e2e2',
            success: '#2da806',
            danger: '#9f0606',
          }
        }
      }
    })
  ]
}
export default config
