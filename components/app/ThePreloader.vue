<template>
  <div id="preloader" class="fixed z-[999999] h-screen w-screen top-0 left-0 bg-white/50 text-black backdrop-blur-xl flex items-center justify-center">
    <img src="/images/preloading.gif" alt="">
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

onMounted(() => {
  const tl = gsap.timeline()

  tl.fromTo('#preloader', {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
  }, {
    clipPath: 'polygon(0% -100%, 100% -100%, 100% 0%, 0% 0%)',
    duration: 1,
    delay: 1.5
  })
})
</script>