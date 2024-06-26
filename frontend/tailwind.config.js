/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        "25": "6.25rem",
        "50": "12.5rem"
      },
      backgroundImage: {
        "header-desktop": "url('/images/headerBgDesktop.png')",
        "header-mobile": "url('/images/headerBgMobile.webp')",
        "products": "url('/images/body-bg.png')",
        "club": "linear-gradient(90deg, #10B981 0%, #059669 100%)",
        "club-btn": " linear-gradient(270deg, #FDBA74 0%, #FED7AA 100%)",
      },

      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
        gray: {

          "primary": "#768392"
        },
        blue: {

          "primary": "#696CFF"
        },
        purple: {
          "primary": "#696CFF"
        },
        light: {
          primary: "#435971",
        }
      },
      backgroundColor: {
        black: {

          'dark': '#2A2C38',
        }
      },
      boxShadow: {
        "main": "0px 1px 10px 0px rgba(0, 0, 0, 0.05)"
      },
      dropShadow: {
        'main': " 0px 0px 10px rgba(0, 0, 0, 0.40)"
      },
      borderRadius: {
        '4xl': '2rem'
      },
      fontFamily: {
        "Dana": "Dana",
        "DanaMedium": "Dana Medium",
        "DanaDemiBold": "Dana DemiBold",
        "MorabbaLight": "Morabba Light",
        "MorabbaMedium": "Morabba Medium",
        "MorabbaBold": "Morabba Bold",
      },
      letterSpacing: {
        "tightest": "-0.065em",
      },
      transitionProperty: {
        "height": "height",

      },
      container: {
        center: "true",
        // padding: {
        //   DEFAULT: '1rem',
        //   lg: '0.625rem'
        // }
      },

    },
    screens: {
      'xs': '395px',
      // => @media (min-width: 640px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }


      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', "& > *")
      addVariant('child-hover', "& > *:hover")
    }
  ],
}