<template>
  <div>
    <section class="h-[30%] w-full overflow-hidden bg-blend-soft-light relative bg-black/30 backdrop-blur">
      <img src="/images/pattren.png" alt="" class="absolute object-cover h-full w-full -z-10">
      <div class="container mx-auto p-10 pt-28">
        <h1 class="comfortaa-bold text-xl text-white">
          Destinasi Wisata
        </h1>
        <hr class="w-20 border-white">
        <div class="mt-4">
          <div
            class="min-w-[60%] md:min-w-[35rem] h-14 rounded-box bg-base-100 flex justify-between items-center overflow-hidden p-4 border border-t-1 border-r-4 border-b-4 border-slate-700"
          >
            <input
              id="search"
              v-model="keyword"
              class="w-full h-full p-2 outline-none bg-transparent"
              name="search"
              placeholder="Cari sesuatu disini..."
              type="search"
            >
            <Icon height="24" icon="ic:round-search" width="24" />
          </div>
        </div>
      </div>
    </section>
    <div class="h-fit w-full overflow-y-auto py-8">
      <div class="grid grid-cols-1 gap-4 px-8 container mx-auto lg:grid-cols-3">
        <div v-for="(d,i ) in destinations" :key="i" data-aos="fade-up" data-aos-easing="ease-in-back" :data-aos-delay="i*100">
          <NuxtLink :to="'/wisata/'+d['slug']" class="card rounded-box p-2">
            <div class="h-60 overflow-hidden rounded-lg">
              <img :src="'images/'+d['image0']" alt="" class="mx-auto h-60 min-w-full">
            </div>
            <div class="w-11/12 mx-auto bg-base-100/20 backdrop-blur shadow-xl rounded-box p-4 grid grid-cols-2 gap-2 -mt-12 relative py-8 pt-16">
              <h3 class="capitalize col-span-2 text-center text-xl font-semibold px-6 py-2 bg-base-100 absolute -top-[15%] left-1/2 -translate-x-1/2 w-3/4 rounded-box shadow-xl">
                {{ d['name'] }}
              </h3>
              <p class="flex justify-start items-center gap-2">
                <Icon height="14" icon="mdi:location" width="14" />
                {{ d['city'] }}
              </p>
              <h4 class="text-end text-sm">
                {{ d['price'] }}<span class="text-xs"> /orang</span>
              </h4>
              <p class="text-start text-sm col-span-2 text-base-content/70">
                {{ d['description'].slice(0,150) }}...<strong>selengkapnya</strong>
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { destinations as data } from '~/data/destinations'
const keyword = ref(useRoute().query.q ? useRoute().query.q : '')

useHead({
  title: 'Wisata - Ndolan.'
})

onMounted(() => {
  useNuxtApp().$aos().init() // Initialize AOS after mounted
  window.addEventListener('resize', () => {
    useNuxtApp().$aos().refresh() // Refresh AOS on window resize
  })
})

const destinations = computed(() => {
  const key = keyword.value?.toString().toLocaleLowerCase()
  if (key) {
    return data.filter(item => item.name.toLowerCase().includes(key) || item.city.toLowerCase().includes(key) || item.description.toLowerCase().includes(key))
  } else {
    return data
  }
})

</script>

<style scoped>

</style>
