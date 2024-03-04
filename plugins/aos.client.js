import AOS from 'aos'
import 'aos/dist/aos.css' // Import the CSS

export default defineNuxtPlugin(() => {
  return {
    provide: {
      aos: () => AOS
    }
  }
})
