import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#006c49',
          container: '#10b981',
          fixed: '#6ffbbe',
          'fixed-dim': '#4edea3',
        },
        secondary: {
          DEFAULT: '#416650',
          container: '#c0e9cd',
          fixed: '#c3ecd0',
          'fixed-dim': '#a7d0b4',
        },
        tertiary: {
          DEFAULT: '#3f6751',
          container: '#82ac93',
          fixed: '#c1edd1',
          'fixed-dim': '#a5d0b6',
        },
        surface: {
          DEFAULT: '#e9ffed',
          dim: '#bbe4c7',
          bright: '#e9ffed',
          'container-lowest': '#ffffff',
          'container-low': '#d4fee0',
          container: '#cef8db',
          'container-high': '#c8f2d5',
          'container-highest': '#c3ecd0',
          tint: '#006c49',
          variant: '#c3ecd0',
        },
        background: '#e9ffed',
        'on-background': '#002111',
        'on-surface': '#002111',
        'on-surface-variant': '#3c4a42',
        'on-primary': '#ffffff',
        'on-primary-container': '#00422b',
        'on-primary-fixed': '#002113',
        'on-primary-fixed-variant': '#005236',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#456b54',
        'on-secondary-fixed': '#002111',
        'on-secondary-fixed-variant': '#2a4e39',
        'on-tertiary': '#ffffff',
        'on-tertiary-container': '#18402d',
        'on-tertiary-fixed': '#002112',
        'on-tertiary-fixed-variant': '#274e3a',
        'inverse-surface': '#123724',
        'inverse-on-surface': '#d1fbdd',
        'inverse-primary': '#4edea3',
        outline: '#6c7a71',
        'outline-variant': '#bbcabf',
        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
        // Brand dark sections
        'dark-green': '#1a3d28',
        'darkest-green': '#002111',
        // CTA green
        'brand-green': '#10B981',
      },
      borderRadius: {
        DEFAULT: '1rem',
        sm: '0.5rem',
        md: '0.75rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
        full: '9999px',
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        headline: ['Pretendard Variable', 'Pretendard', 'sans-serif'],
        body: ['Pretendard Variable', 'Pretendard', 'sans-serif'],
        label: ['Pretendard Variable', 'Pretendard', 'sans-serif'],
        brand: ['Pretendard Variable', 'Pretendard', 'sans-serif'],
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
      },
      backgroundSize: {
        'dot-40': '40px 40px',
      },
    },
  },
  plugins: [],
}

export default config
