<template>
  <div class="overflow-x-hidden">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '~/components/layouts/AppFooter.vue'
import AppHeader from '~/components/layouts/AppHeader.vue'

</script>

<style scoped>

</style>
