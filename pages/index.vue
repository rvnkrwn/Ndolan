<template>
  <div>
    <section id="zero">
      <div class="h-[90vh] w-full relative">
        <video id="myVideo" autoplay class="object-cover h-full w-full" loop muted>
          <source
            src="http://assets.sanora.my.id/videos/lv_0_20240304124131.mp4"
            type="video/mp4"
          >
        </video>
      </div>
      <div class="absolute w-3/4 z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1>
          <span class="text-3xl md:text-4xl" data-aos="fade-down" data-aos-delay="200">Mari Menjelajah</span>
          <br>
          <span class="!text-blue-500 text-5xl font-bold md:text-6xl" data-aos="fade-up" data-aos-delay="400">Di Banyumas</span>
        </h1>
        <p data-aos="zoom-in-up" data-aos-delay="600" class="mt-8 max-w-[40rem] mx-auto md:text-lg">
          mari menjelajah dengan paltform kami dimana kalian semua akan belajar,berwisata,dan lainnya di Banyumas, jawa tengah. dimana dengan keindahan alam serta berada di bawah kaki gunung selamet dan juga memiliki banyak sejarah yang dapat kita pelajari
        </p>
        <button
          class="btn bg-base-100/20 backdrop-blur border-transparent text-white mt-10 hover:border-base-100 hover:text-base-content"
          data-aos="zoom-in"
          @click="scrollToId('#recommendation')"
        >
          Jelajahi Sekarang!
        </button>
      </div>
    </section>
    <section id="search">
      <div class="w-full h-fit transform -translate-y-1/2 flex items-center justify-center">
        <form
          method="get"
          action="/wisata"
          class="min-w-[80%] md:min-w-[35rem] h-14 rounded-box shadow-lg shadow-black/20 bg-base-100 flex justify-between items-center overflow-hidden p-4"
        >
          <input
            id="search"
            class="w-full h-full p-2 outline-none bg-transparent"
            name="q"
            placeholder="Cari sesuatu disini..."
            type="search"
          >
          <Icon height="24" icon="ic:round-search" width="24" />
        </form>
      </div>
    </section>
    <section id="about">
      <ParticleDot />
      <div class="container h-fit mx-auto px-4 py-16">
        <h1 class="comfortaa-semibold text-center text-2xl font-bold p-2 md:text-3xl" data-aos="fade-down" data-aos-delay="200">
          Kenal Kami.
        </h1>
        <div class="p-4 mt-6 flex flex-col gap-4 md:grid md:grid-cols-2 md:items-center">
          <!-- <img alt="travel-ilus" class="mx-auto w-3/4" src="/images/travel-ilus.svg" data-aos="fade-down-right" data-aos-delay="400"> -->
          <img
            alt="travel-ilus"
            class="mx-auto w-3/4"
            :src="currentTheme != 'dark' ? '/images/logo-text-black.png' : '/images/logo-text-white.png'"
            data-aos="fade-down-right"
            data-aos-delay="400"
          >
          <div class="comfortaa-normal text-base-content/70 text-center text-sm md:text-lg md:text-start p-4" data-aos="fade-down-left" data-aos-delay="600">
            <p>
              Ndolan adalah suatu platform yang berisikan mengenai informasi seputar wisata di Banyumas. Di dalam
              website Ndolan terdapat berbagai hal seperti tempat wisata, transportasi yang bisa digunakan, dan lain
              sebagainya.
            </p>
            <p>
              Ndolan diambil dari salah satu bahasa jawa yaitu Ndolan yang artinya jalan-jalan. Karena Banyumas identik
              dengan kota yang indah dan asri yang enak untuk menjadi tempat singgah ataupun tempat berwisata untuk
              beristirahat maka dibuatlah website Ndolan supaya bisa membantu pengguna.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="recommendation">
      <div class="relative h-[100dvh] sm:h-[80dvh]">
        <img src="/images/gunung.jpg" alt="" class="object-cover h-full w-full">
        <div class="absolute w-11/12 z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-base-100/20 backdrop-blur p-6 rounded-box text-start">
          <h1 class="text-5xl xl:text-7xl" data-aos="fade-down-right" data-aos-delay="400">
            Siap Menjelajah Banyumas untuk <br> <strong>Petualangan Baru</strong>
          </h1>
          <p class="mt-2 w-4/5 md:text-lg" data-aos="fade-down-left" data-aos-delay="200">
            Jelajahi keindahan alam dan warisan budaya yang kaya di daerah ini. Dari gunung hijau hingga sungai yang mengalir tenang, Banyumas menawarkan petualangan tak terlupakan. Rasakan sensasi baru dan kenangannya yang manis!
          </p>
          <button
            class="btn bg-base-100/20 backdrop-blur border-transparent text-white mt-10 hover:border-base-100 hover:text-base-content"
            data-aos="zoom-in-up"
            data-aos-delay="400"
            @click="scrollToId('#destinations')"
          >
            Cari Tau Sekarang!
          </button>
        </div>
      </div>
    </section>
    <section v-if="destinations" id="destinations">
      <div class="w-full h-[80dvh] px-4 py-16">
        <div class="h-full w-full grid gap-3 grid-cols-2 grid-rows-6 md:grid-cols-3 md:grid-rows-4">
          <div v-for="(destination, i) in destinations.slice(0,4)" :key="i" :class="['rounded-2xl relative overflow-hidden', `item-${i+1}`]" data-aos="zoom-out" :data-aos-delay="i % 2 === 0 ? 200 : 400">
            <NuxtLink :to="'/wisata/'+destination['slug']">
              <img
                :src="'images/'+destination['image0']"
                alt="cover"
                class="w-full h-full object-cover"
              >
              <div class="w-11/12 h-auto bg-base-100/20 text-white backdrop-blur rounded-2xl absolute bottom-2 left-1/2 transform -translate-x-1/2 grid gap-0 grid-cols-2 p-4 border border-base-100/40 md:bottom-4">
                <div>
                  <h3 class="capitalize text-sm md:text-xl">
                    {{ destination["name"] }}
                  </h3>
                  <p class="flex items-center gap-1 text-[10px] mt-2 md:text-xs">
                    <Icon height="14" icon="mdi:location" width="14" />
                    {{ destination["city"] }}
                  </p>
                </div>
                <div>
                  <h4 class="text-sm text-end md:text-lg">
                    {{ destination["price"] }} <br><span class="text-[10px] md:text-xs">/orang</span>
                  </h4>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="card item-5 place-content-center">
            <div class="flex justify-between gap-4 items-center px-4 md:px-12">
              <h1 class="text-xl lg:text-5xl">
                100+
              </h1>
              <p class="flex-1 text-xs lg:textarea-lg">
                <span>Top Wisata di Banyumas</span>
                <br>
                <span class="hidden lg:block text-xs">Cari Wisata Impian Kamu di Banyumas</span>
              </p>
              <NuxtLink
                class="btn btn-sm text-xs bg-base-100/20 backdrop-blur border-transparent text-base-100 hover:border-base-100 hover:text-base-content"
                to="/wisata"
              >
                Temukan Sekarang
                <Icon height="24" icon="mdi:arrow-right-thin" width="24" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { gsap } from 'gsap/dist/gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import ParticleDot from '~/components/variation/ParticleDot.vue'
import { destinations } from '~/data/destinations'

const currentTheme = useState('currentTheme')

onMounted(() => {
  useNuxtApp().$aos().init() // Initialize AOS after mounted
  window.addEventListener('resize', () => {
    useNuxtApp().$aos().refresh() // Refresh AOS on window resize
  })
})

gsap.registerPlugin(ScrollToPlugin)
const scrollToId = (id: string) => {
  gsap.to(window, { duration: 1, scrollTo: id, ease: 'power2.inOut' })
}

useHead({
  title: 'Beranda - Ndolan.'
})

</script>

<style scoped>
.item-1 {
  @apply row-span-3;
}

.item-2 {
  @apply row-span-3;
}

.item-3 {
  @apply row-span-2;
}

.item-4 {
  @apply row-span-2;
}

.item-5 {
  @apply row-span-1 col-span-2 bg-base-content text-base-100
}
</style>
