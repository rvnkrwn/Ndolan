<template>
  <div class="h-[115vh] w-full relative overflow-y-auto">
    <video id="myVideo" autoplay class="object-cover h-full w-full" loop muted>
      <source
        src="http://assets.sanora.my.id/videos/lv_0_20240304124131.mp4"
        type="video/mp4"
      >
    </video>
    <div class="container md:max-w-[50%] absolute p-6 top-2/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 md:-translate-y-1/2">
      <div class="shadow p-5 bg-base-100/20 backdrop-blur text-white text-center rounded-box md:py-12">
        <h1 class="text-xl md:text-2xl">
          Tentang Kami
        </h1>
        <hr class="w-20 mx-auto mt-1">
        <br>
        <img :src="currentTheme != 'dark' ? '/images/logo-text-black.png' : '/images/logo-text-white.png'" alt="" class="h-[25vh] mx-auto md:h-[40vh]">
        <p class="text-sm comfortaa-normal -mt-2">
          Ndolan adalah suatu platform yang berisikan mengenai informasi seputar wisata di Banyumas. Di dalam
          website Ndolan terdapat berbagai hal seperti tempat wisata, transportasi yang bisa digunakan, dan lain
          sebagainya.
        </p>
        <p class="text-sm comfortaa-normal mt-3">
          Ndolan diambil dari salah satu bahasa jawa yaitu Ndolan yang artinya jalan-jalan. Karena Banyumas identik
          dengan kota yang indah dan asri yang enak untuk menjadi tempat singgah ataupun tempat berwisata untuk
          beristirahat maka dibuatlah website Ndolan supaya bisa membantu pengguna.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentTheme = useState('currentTheme')
</script>
