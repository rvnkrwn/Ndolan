<template>
  <div>
    <section class="h-[30%] w-full overflow-hidden bg-blend-soft-light relative bg-black/30 backdrop-blur">
      <img src="/images/pattren.png" alt="" class="absolute object-cover h-full w-full -z-10">
      <div class="container mx-auto p-10 pt-28" />
    </section>
    <section>
      <div class="container mx-auto pb-10">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 p-4 md:p-6">
          <swiper
            :space-between="30"
            :centered-slides="true"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: false,
            }"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper rounded-box"
          >
            <swiper-slide>
              <img :src="'/images/'+data['image0']" alt="">
            </swiper-slide>
            <swiper-slide>
              <img :src="'/images/'+data['image1']" alt="">
            </swiper-slide>
          </swiper>

          <div class="p-4 md:p-0">
            <div class="lg:hidden">
              <h1 class="text-xl font-bold">
                {{ data['name'] }}
              </h1>
              <p class="flex items-center gap-1 text-[10px] mb-4 md:text-xs">
                <Icon height="14" icon="mdi:location" width="14" />
                {{ data['city'] }}
              </p>
              <p class="text-sm md:text-md md:col-span-2">
                {{ data['description'] }}
              </p>
            </div>

            <div class="pt-10">
              <div class="flex gap-4 mb-4 bg-base-content text-base-300 p-5 rounded-2xl">
                <Icon icon="ph:clock" width="24" height="24" />
                <div class="grid">
                  <span>Estimasi Jam Buka : </span>
                  <span>{{ data['open'] }} WIB</span>
                </div>
              </div>
              <div class="flex gap-4 mb-4 bg-base-content text-base-300 p-5 rounded-2xl">
                <Icon icon="game-icons:money-stack" width="24" height="24" />
                <div class="grid">
                  <span>Estimasi Harga Tiket Masuk : </span>
                  <span>Rp. {{ data['price'] }}</span>
                </div>
              </div>
              <div class="flex gap-4 mb-4 bg-base-content text-base-300 p-5 rounded-2xl">
                <Icon icon="simple-icons:googlemaps" width="35" height="35" />
                <div class="grid">
                  <span>Alamat Wisata : </span>
                  <span>{{ data['address'] }}</span>
                </div>
              </div>
              <div class="flex gap-4 mb-4 bg-base-content text-base-300 p-5 rounded-2xl">
                <Icon icon="fluent-mdl2:nav-2-d-map-view" width="24" height="24" />
                <div class="grid">
                  <span>Dapatkan Arahan : </span>
                  <NuxtLink :to="data['maps']" target="_blank">
                    <span class="underline text-xs sm:text-base">{{ data['maps'] }}</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <div class="hidden lg:block lg:col-span-2">
            <h1 class="text-5xl font-bold">
              {{ data['name'] }}
            </h1>
            <p class="flex items-center gap-1 text-[10px] mb-4 md:text-lg mt-1">
              <Icon icon="simple-icons:googlemaps" width="20" height="20" />
              {{ data['city'] }}
            </p>
            <p class="text-sm md:text-lg">
              {{ data['description'] }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import { destinations } from '~/data/destinations'
// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

const modules = [Autoplay, Pagination]

const slug = useRoute().params.slug

const data = ref({})

onMounted(() => {
  destinations?.forEach((d) => {
    if (d.slug === slug) {
      data.value = d
    }
  })
})
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
