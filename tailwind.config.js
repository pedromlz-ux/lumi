/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Integrated new colors
        'background-alt': "var(--background)",
        'foreground-alt': "var(--foreground)",
        'primary-alt': "var(--text-primary)",
        'secondary-alt': "var(--text-secondary)",
        'base-100': "var(--base-100)",
        'base-200': "var(--base-200)",
        'base-300': "var(--base-300)",
        'base-content': "var(--base-content)",
        'neutral': {
          DEFAULT: "var(--neutral-color)",
          content: "var(--neutral-content)",
        },
        'highlight': "var(--highlight-color)",
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.1" },
          "50%": { opacity: "0.2" },
        },
        "scale-pulse": {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)", opacity: "0.05" },
          "50%": { transform: "translate(-50%, -50%) scale(1.1)", opacity: "0.1" },
        },
        // Integrated new keyframes
        simpleFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseBar: {
          '0%, 100%': { 
            height: '24px',
            opacity: '0.6'
          },
          '50%': { 
            height: '12px',
            opacity: '0.2'
          }
        },
        pulseBarShort: {
          '0%, 100%': { 
            height: '16px',
            opacity: '0.6'
          },
          '50%': { 
            height: '8px',
            opacity: '0.2'
          }
        },
        glow: {
          '0%, 100%': { 
            opacity: '0.5',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '0.8',
            transform: 'scale(1.1)'
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 10s ease-in-out infinite 2s",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "scale-pulse": "scale-pulse 4s ease-in-out infinite",
        // Integrated new animations
        'fade-in': 'simpleFadeIn 0.3s ease-out forwards',
        'pulse-bar': 'pulseBar 1.5s ease-in-out infinite',
        'pulse-bar-delay': 'pulseBarShort 1.5s ease-in-out 0.2s infinite',
        'pulse-bar-delay2': 'pulseBar 1.5s ease-in-out 0.4s infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      fontFamily: {
        handwritten: ["Caveat", "cursive"],
        sans: ['var(--font-noto)'],
        signika: ['var(--font-signika)'],
        'dm-sans': ['var(--font-dm-sans)'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}