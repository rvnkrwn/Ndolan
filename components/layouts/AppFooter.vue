<template>
  <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
    <nav class="grid grid-flow-col gap-4">
      <a class="link link-hover">Beranda</a>
      <a class="link link-hover">Tempat Wisata</a>
      <a class="link link-hover">Tentang Kami</a>
    </nav>
    <nav>
      <div class="grid grid-flow-col gap-4">
        <NuxtLink to="https://instagram.com" target="_blank">
          <Icon icon="akar-icons:instagram-fill" width="24" height="24" />
        </NuxtLink>
        <NuxtLink to="https://x.com" target="_blank">
          <Icon icon="pajamas:twitter" width="24" height="24" />
        </NuxtLink>
        <NuxtLink to="https://youtube.com" target="_blank">
          <Icon icon="akar-icons:youtube-fill" width="30" height="30" />
        </NuxtLink>
      </div>
    </nav>
    <aside>
      <p>Copyright © 2024 - All right reserved by {{ appName }}</p>
    </aside>
  </footer>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'

const runtimeConfig = useRuntimeConfig()
const appName: String | null = String(runtimeConfig.public.appName)
</script>
