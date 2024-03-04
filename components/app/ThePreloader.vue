<template>
  <div id="preloader" class="fixed z-[999999] h-screen w-screen top-0 left-0 bg-white/50 text-black backdrop-blur-xl flex items-center justify-center">
    <div class="text-5xl font-bold">
      {{ percentage }}%
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
const percentage = ref(0)

onMounted(() => {
  const tl = gsap.timeline()

  tl.to(percentage, {
    progress: 100,
    duration: 1,
    onUpdate () {
      percentage.value = Math.floor(percentage.progress)
    }
  })

  tl.fromTo('#preloader', {
    clipPath: 'polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)'
  }, {
    clipPath: 'polygon(0% 100%, 0% 100%, 0% 0%, 0% 0%)',
    duration: 1
  })
})
</script>