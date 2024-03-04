<template>
  <div class="fixed w-full p-4 z-[9999]">
    <ThePreloader />
    <header class="container mx-auto bg-base-100/20 text-white backdrop-blur p-4 md:p-6 rounded-box flex justify-between items-center">
      <div id="logo">
        <h1 class="comfortaa-bold">
          {{ appName }}
        </h1>
      </div>
      <nav class="hidden md:block">
        <ul class="flex gap-4">
          <li v-for="(menu, i) in menus" :key="i">
            <NuxtLink :to="menu['path']">
              {{ menu['label'] }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div id="features" class="flex gap-2">
        <div id="menu-toggle" class="cursor-pointer md:hidden" aria-label="menuButton" @click="openMenu(!isOpen)">
          <Icon v-if="isOpen" icon="line-md:menu-to-close-alt-transition" width="24" height="24" />
          <Icon v-else icon="line-md:close-to-menu-alt-transition" width="24" height="24" />
        </div>
        <div id="darkMode" class="cursor-pointer" aria-label="darkModeButton" @click="theme === 'light' ? theme = 'dark' : theme = 'light' ">
          <Icon v-if="theme === 'dark'" icon="line-md:moon-alt-to-sunny-outline-loop-transition" width="24" height="24" />
          <Icon v-else icon="line-md:sunny-outline-to-moon-alt-loop-transition" width="24" height="24" />
        </div>
      </div>
    </header>
    <div id="sidebar" class="container mx-auto p-4 bg-base-100/20 backdrop-blur rounded-box mt-3 leading-10 hidden md:hidden">
      <ul>
        <li v-for="(menu, i) in menus" :key="i">
          <NuxtLink :to="menu['path']" @click="openMenu(false)">
            {{ menu['label'] }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { gsap } from 'gsap'
import ThePreloader from '~/components/app/ThePreloader.vue'

const runtimeConfig = useRuntimeConfig()
const appName: String | null = String(runtimeConfig.public.appName)
const isOpen = ref<boolean>(false)
const theme = ref('light')

const openMenu = (x: boolean) => {
  const sidebar = document.querySelector('#sidebar')

  isOpen.value = x

  if (isOpen.value) {
    gsap.fromTo(sidebar, {
      y: -200,
      opacity: 0
    }, {
      duration: 0.5,
      onStart: () => {
        sidebar?.classList.remove('hidden')
      },
      opacity: 1,
      y: 0,
      ease: 'power3.inOut'
    })
  } else {
    gsap.fromTo(sidebar, {
      y: 0,
      opacity: 1
    }, {
      duration: 0.5,
      opacity: 0,
      y: 200,
      ease: 'power3.inOut',
      onComplete: () => {
        sidebar?.classList.add('hidden')
      }
    })
  }
}

useHead({
  htmlAttrs: {
    lang: 'id',
    'data-theme': () => theme.value
  }
})

const menus = [
  { label: 'Beranda', path: '/' },
  { label: 'Tempat Wisata', path: '/wisata' },
  { label: 'Tentang Kami', path: '/tentang-kami' }
]

onMounted(() => {
  const header = document.querySelector('header')
  const sidebar = document.querySelector('#sidebar')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100 || (isOpen.value && window.scrollY > 100)) {
      header?.classList.add('scroll-active')
      sidebar?.classList.add('scroll-active')
    } else {
      header?.classList.remove('scroll-active')
      sidebar?.classList.remove('scroll-active')
    }
  })
})
</script>

<style scoped>
.scroll-active {
@apply bg-base-100/50 shadow-lg shadow-black/20 !text-base-content;
}

.scroll-active ul li a {
@apply !text-base-content;
}

ul li a {
font-weight: 400;
font-style: normal;
font-family: "Poppins", sans-serif;
font-size: small;
@apply text-white;
}
</style>
