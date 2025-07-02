export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
  keyframes: {
    typing: {
      '0%': { maxWidth: '0' },
      '100%': { maxWidth: '100%' },
    },
    blink: {
      '0%, 100%': { borderColor: 'transparent' },
      '50%': { borderColor: '#E9A6A6' },
    },
  },
  animation: {
    typing: 'typing 4s steps(30, end) infinite',
    blink: 'blink 0.7s step-end infinite',
  },
  colors: {
    peach: '#F9B1A6',
     darkblue: {
          400: '#00008B', // or any shade of dark blue you want
        },
  },
  fontFamily: {
    lobster: ['LobsterTwo', 'cursive'],
    lilita: ['LilitaOne', 'cursive'],
    dmsans: ['DMSans', 'sans-serif'],
  },
}
  },
    };
