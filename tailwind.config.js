/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
        // Your Pastel Theme Colors
        'pastel-green-light': 'var(--pastel-green-light)',
        'pastel-green-medium': 'var(--pastel-green-medium)',
        'pastel-pink-light': 'var(--pastel-pink-light)',
        'pastel-pink-medium': 'var(--pastel-pink-medium)',
        'neutral-background': 'var(--neutral-background)',
        'neutral-card-bg': 'var(--neutral-card-bg)',
        'neutral-border': 'var(--neutral-border)',
        // Text Colors from your theme
        'text-dark': 'var(--text-dark)',
        'text-medium': 'var(--text-medium)',
        'text-light': 'var(--text-light)',
        // Button colors
        'button-primary-bg': 'var(--button-primary-bg)',
        'button-primary-text': 'var(--button-primary-text)',
        'button-primary-hover-bg': 'var(--button-primary-hover-bg)',
        'button-primary-hover-text': 'var(--button-primary-hover-text)',
      },
      fontFamily: {
        primary: ['Lato', 'sans-serif'], // Corresponds to --font-primary
        headings: ['Playfair Display', 'serif'], // Corresponds to --font-headings
      }
    },
  },
  plugins: [],
}

