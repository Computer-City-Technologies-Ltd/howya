export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Boba Bloom | Premium Bubble Tea',
      meta: [
        { name: 'description', content: 'Discover handcrafted premium bubble tea made with the finest ingredients. Taste happiness, one sip at a time.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            display: ['Poppins', 'sans-serif'],
            body: ['Inter', 'sans-serif']
          },
          colors: {
            primary: {
              50: '#FFFBEB',
              100: '#FEF3C7',
              200: '#FDE68A',
              300: '#FCD34D',
              400: '#FBBF24',
              500: '#F59E0B',
              600: '#D97706',
              700: '#B45309',
              800: '#92400E',
              900: '#78350F'
            },
            secondary: {
              50: '#F5F3FF',
              100: '#EDE9FE',
              200: '#DDD6FE',
              300: '#C4B5FD',
              400: '#A78BFA',
              500: '#7C3AED',
              600: '#6D28D9',
              700: '#5B21B6',
              800: '#4C1D95',
              900: '#3B0764'
            },
            accent: {
              50: '#F0FDF4',
              100: '#DCFCE7',
              200: '#BBF7D0',
              300: '#86EFAC',
              400: '#4ADE80',
              500: '#22C55E',
              600: '#16A34A',
              700: '#15803D',
              800: '#166534',
              900: '#14532D'
            },
            pink: {
              50: '#FDF2F8',
              100: '#FCE7F3',
              200: '#FBCFE8',
              300: '#F9A8D4',
              400: '#F472B6',
              500: '#EC4899',
              600: '#DB2777',
              700: '#BE185D',
              800: '#9D174D',
              900: '#831843'
            },
            cream: '#FFF8F0',
            soft: '#F8FAFC'
          },
          animation: {
            'float': 'float 6s ease-in-out infinite',
            'float-slow': 'float 8s ease-in-out infinite',
            'float-slower': 'float 10s ease-in-out infinite',
            'float-delayed': 'float 6s ease-in-out 2s infinite',
            'bubble-rise': 'bubbleRise 4s ease-in-out infinite',
            'bubble-rise-delayed': 'bubbleRise 4s ease-in-out 1s infinite',
            'bubble-rise-slow': 'bubbleRise 6s ease-in-out 0.5s infinite',
            'fade-up': 'fadeUp 0.8s ease-out forwards',
            'fade-left': 'fadeLeft 0.8s ease-out forwards',
            'fade-right': 'fadeRight 0.8s ease-out forwards',
            'scale-in': 'scaleIn 0.6s ease-out forwards',
            'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
            'drift': 'drift 20s ease-in-out infinite',
            'drift-reverse': 'drift 25s ease-in-out infinite reverse',
            'spin-slow': 'spin 12s linear infinite',
            'ripple': 'ripple 0.6s linear',
            'shimmer': 'shimmer 2s linear infinite',
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-20px)' }
            },
            bubbleRise: {
              '0%': { transform: 'translateY(100%) scale(0.5)', opacity: '0' },
              '50%': { opacity: '0.8' },
              '100%': { transform: 'translateY(-100%) scale(1)', opacity: '0' }
            },
            fadeUp: {
              '0%': { transform: 'translateY(40px)', opacity: '0' },
              '100%': { transform: 'translateY(0)', opacity: '1' }
            },
            fadeLeft: {
              '0%': { transform: 'translateX(-40px)', opacity: '0' },
              '100%': { transform: 'translateX(0)', opacity: '1' }
            },
            fadeRight: {
              '0%': { transform: 'translateX(40px)', opacity: '0' },
              '100%': { transform: 'translateX(0)', opacity: '1' }
            },
            scaleIn: {
              '0%': { transform: 'scale(0.8)', opacity: '0' },
              '100%': { transform: 'scale(1)', opacity: '1' }
            },
            pulseGlow: {
              '0%, 100%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' },
              '50%': { boxShadow: '0 0 40px rgba(245, 158, 11, 0.6)' }
            },
            drift: {
              '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
              '25%': { transform: 'translate(10px, -10px) rotate(5deg)' },
              '50%': { transform: 'translate(-5px, -20px) rotate(-3deg)' },
              '75%': { transform: 'translate(-10px, -5px) rotate(2deg)' }
            },
            ripple: {
              '0%': { transform: 'scale(1)', opacity: '1' },
              '100%': { transform: 'scale(2.5)', opacity: '0' }
            },
            shimmer: {
              '0%': { transform: 'translateX(-100%)' },
              '100%': { transform: 'translateX(100%)' }
            }
          },
          backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          }
        }
      }
    }
  }
})
