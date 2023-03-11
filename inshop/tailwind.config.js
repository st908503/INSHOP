/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      backgroundImage: {
        'man': "url('../src/assets/images/man.png')",
        'woman': "url('../src/assets/images/woman.png')",
      },
      keyframes: {
        moving: {
          '0%': {
            transform: 'translateX(150px)'
          },
          '50%': {
            transform: 'translateX(0)'
          },
        }
      },
      animation: {
        'moving': 'moving 4s ease-in-out',
      },
    },
  },
  plugins: [],
}
