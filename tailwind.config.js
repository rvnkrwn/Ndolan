/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './components/**/**/*.{js,vue,ts}',
    './layouts/*.vue',
    './layouts/**/*.vue',
    './pages/*.vue',
    './pages/**/*.vue',
    './pages/**/**/*.vue',
    './app.vue',
    './error.vue'
  ],
  daisyui: {
    themes: [
      'light',
      'dark'
    ]
  },
  plugins: [require('daisyui')]
}
