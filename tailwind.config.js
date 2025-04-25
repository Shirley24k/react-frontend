export default {
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx}",
      "./src/screens/**/*.{js,ts,jsx,tsc}",
      "app/**/*.{ts,tsx}",
      "components/**/*.{ts,tsx}",
      "./index.html"
    ],
    theme: {
      extend: {
        colors: {
          beige: "var(--beige)",
          "dark-beige": "var(--dark-beige)",
          "dark-plum": "var(--dark-plum)",
          "gray-300": "var(--gray-300)",
          "light-apple-green": "var(--light-apple-green)",
          "light-green": "var(--light-green)",
          "light-purple": "var(--light-purple)",
          "warm-off-white": "var(--warm-off-white)",
          white: "var(--white)",
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
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
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
        },
        fontFamily: {
          description: "var(--description-font-family)",
          "section-title": "var(--section-title-font-family)",
          "small-text": "var(--small-text-font-family)",
          sans: [
            "ui-sans-serif",
            "system-ui",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"',
          ],
        },
        boxShadow: { "shadow-dark-500-20": "var(--shadow-dark-500-20)" },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
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
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
      container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
    darkMode: ["class"],
  };
  