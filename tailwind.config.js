/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background:         'rgb(var(--color-background) / <alpha-value>)',
        foreground:         'rgb(var(--color-foreground) / <alpha-value>)',
        primary:            'rgb(var(--color-primary) / <alpha-value>)',
        card:               'rgb(var(--color-card) / <alpha-value>)',
        'card-border':      'rgb(var(--color-card-border) / <alpha-value>)',
        secondary:          'rgb(var(--color-secondary) / <alpha-value>)',
        'secondary-border': 'rgb(var(--color-secondary-border) / <alpha-value>)',
        muted:              'rgb(var(--color-muted) / <alpha-value>)',
        'muted-foreground': 'rgb(var(--color-muted-foreground) / <alpha-value>)',
        destructive:        'rgb(var(--color-destructive) / <alpha-value>)',
        'success-text':     'rgb(var(--color-success-text) / <alpha-value>)',
        'success-bg':       'rgb(var(--color-success-bg) / <alpha-value>)',
        'success-border':   'rgb(var(--color-success-border) / <alpha-value>)',
      },
      fontFamily: {
        sans:    ['PTSans_400Regular', 'System'],
        heading: ['SpaceGrotesk_700Bold', 'System'],
      },
    },
  },
  plugins: [],
};
