/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        hb: {
          red: '#D90429',
          yellow: '#FFC300',
          white: '#FFFFFF',
          dark: '#0F0F0F',
          text: '#111111',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255, 195, 0, 0.18), 0 0 80px rgba(217, 4, 41, 0.18)',
        glass: '0 1px 0 rgba(255, 255, 255, 0.08) inset, 0 20px 60px rgba(0,0,0,0.55)',
      },
      backgroundImage: {
        'hb-radial':
          'radial-gradient(900px circle at var(--mx,50%) var(--my,20%), rgba(255,195,0,0.18), transparent 55%), radial-gradient(800px circle at 20% 70%, rgba(217,4,41,0.20), transparent 60%), radial-gradient(700px circle at 90% 10%, rgba(255,255,255,0.08), transparent 55%)',
        'hb-gradient': 'linear-gradient(135deg, #D90429 0%, #FFC300 100%)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-10px,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 6s ease-in-out infinite',
        marquee: 'marquee 24s linear infinite',
      },
    },
  },
  plugins: [],
}
