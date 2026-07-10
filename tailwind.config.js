/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Core surfaces
        void: '#050505', // primary background
        navy: '#07111F', // dark navy panels / section alternation

        // Signal / accent colors
        'neon-pink': '#FF4DB8',
        'neon-purple': '#6A00FF',
        'neon-cyan': '#00EAFF',
        'neon-orange': '#FF8A00',
        paper: '#FFFFFF',

        // Tonal ramps derived from the accents, used for borders/glows at low opacity
        'pink-glow': 'rgba(255, 77, 184, 0.35)',
        'purple-glow': 'rgba(106, 0, 255, 0.35)',
        'cyan-glow': 'rgba(0, 234, 255, 0.35)',
        'orange-glow': 'rgba(255, 138, 0, 0.35)',
      },
      fontFamily: {
        hero: ['"Bebas Neue"', 'sans-serif'],
        display: ['"Orbitron"', 'sans-serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
      fontSize: {
        // Fluid type scale (clamp) so the hero never overflows on mobile
        'hero-xl': 'clamp(3.5rem, 10vw, 9rem)',
        'hero-lg': 'clamp(2.5rem, 7vw, 6rem)',
        'display-lg': 'clamp(1.75rem, 4vw, 3rem)',
        'display-md': 'clamp(1.25rem, 2.5vw, 2rem)',
      },
      backgroundImage: {
        'vice-sunset':
          'linear-gradient(180deg, #6A00FF 0%, #FF4DB8 45%, #FF8A00 100%)',
        'cyber-grid':
          'linear-gradient(rgba(0,234,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,234,255,0.08) 1px, transparent 1px)',
        'glass-panel':
          'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))',
      },
      boxShadow: {
        'glow-pink': '0 0 20px rgba(255,77,184,0.5), 0 0 60px rgba(255,77,184,0.15)',
        'glow-purple': '0 0 20px rgba(106,0,255,0.5), 0 0 60px rgba(106,0,255,0.15)',
        'glow-cyan': '0 0 20px rgba(0,234,255,0.5), 0 0 60px rgba(0,234,255,0.15)',
        'glow-orange': '0 0 20px rgba(255,138,0,0.5), 0 0 60px rgba(255,138,0,0.15)',
        glass: '0 8px 32px rgba(0,0,0,0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.6, filter: 'brightness(1)' },
          '50%': { opacity: 1, filter: 'brightness(1.3)' },
        },
        scanline: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
        gridScroll: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 -100px' },
        },
      },
      animation: {
        float: 'floatY 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        scanline: 'scanline 8s linear infinite',
        'grid-scroll': 'gridScroll 12s linear infinite',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      zIndex: {
        loader: 999,
        cursor: 998,
        nav: 900,
        modal: 800,
      },
    },
  },
  plugins: [],
};
