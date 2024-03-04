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
        <div
          class="min-w-[80%] md:min-w-[35rem] h-14 rounded-box shadow-lg shadow-black/20 bg-base-100 flex justify-between items-center overflow-hidden p-4"
        >
          <input
            id="search"
            class="w-full h-full p-2 outline-none bg-transparent"
            name="search"
            placeholder="Cari sesuatu disini..."
            type="search"
          >
          <Icon height="24" icon="ic:round-search" width="24" />
        </div>
      </div>
    </section>
    <section id="about">
      <ParticleDot />
      <div class="container h-fit mx-auto px-4 py-16">
        <h1 class="comfortaa-semibold text-center text-2xl font-bold p-2 md:text-3xl" data-aos="fade-down" data-aos-delay="200">
          Kenal Kami.
        </h1>
        <div class="p-4 mt-6 flex flex-col gap-4 md:grid md:grid-cols-2 md:items-center">
          <img alt="travel-ilus" class="mx-auto w-3/4" src="/images/travel-ilus.svg" data-aos="fade-down-right" data-aos-delay="400">
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

onMounted(() => {
  useNuxtApp().$aos().init() // Initialize AOS after mounted
  window.addEventListener('resize', () => {
    useNuxtApp().$aos().refresh() // Refresh AOS on window resize
  })
})

const destinations = ref([
  {
    slug: 'curug-jenggala',
    name: 'Curug Jenggala',
    address: 'Jalan Limboro, Dusun III Kalipagu, Ketenger, Kecamatan Baturraden, Kabupaten Banyumas, Jawa Tengah.',
    Deskripsi: 'Curug Jenggala adalah air terjun yang berlokasi di Ketenger, Baturaden, Banyumas. Air terjun ini memiliki ketinggian 30 meter dari permukaan tanah.Tempat wisata Banyumas ini mempunyai tiga air terjun yang tingginya sejajar. Air terjun yang berada di tengah memiliki arus yang paling deras. Wisata Banyumas ini menampilkan keindahan alam yang masih asli dan air terjun yang memesona. Di bawah air terjun terdapat sungai dengan batuan besar.Lokasinya berada di Dusun Kalipagu, Ketenger, Baturraden, Kabupaten Banyumas, Jawa Tengah 53152. Objek wisata ini berada di kaki Gunung Slamet yang membuatnya memiliki daya tarik tersendiri.',
    open: '07.00-17.00',
    price: '10.000',
    image0: 'curug jenggala.jpg',
    image1: 'curug jenggala2.jpg',
    city: 'Baturaden',
    maps: 'https://maps.app.goo.gl/3kGU9f48wRWSX6jt9'
  },
  {
    slug: 'telaga-sunyi',
    name: 'Telaga Sunyi',
    address: 'Sawah & Hutan, Limpakuwus, Sumbang, Kabupaten Banyumas, Jawa Tengah.',
    Deskripsi: 'Telaga Sunyi merupakan sebuah telaga yang mata airnya bersumber dari Gunung Slamet. Airnya begitu jernih dan sejuk, sampai warnanya terlihat kebiruan. Betapa jernihnya air di telaga ini memungkinkan Anda untuk melihat dasarnya dengan mata telanjang.Air di telaga ini sangat jernih, bahkan bisa diminum langsung tanpa harus dimasak dulu, karena belum tercemar polutan. Namun, Anda tidak perlu melakukannya jika merasa ragu.Sesuai namanya, suasana di telaga ini memang sunyi. Telaga yang tenang dan kucuran air terjun menjadikan suasana terasa syahdu, cocok untuk merenung. Tak heran kalau danau ini kerap jadi tempat bertapa di masa lalu.',
    open: '07.00–17.00',
    price: '10.000',
    image0: 'telaga-sunyi-baturraden-3.png',
    image1: 'Telaga_sunyi_purwokerto.jpg',
    city: 'Sumbang',
    maps: 'https://maps.app.goo.gl/39VWipc1sboSoVXA8'
  },
  {
    slug: 'new-small-world',
    name: 'New Small Word',
    address: 'Jalan Raya Baturaden Barat Nomor 271 Desa Ketenger, Purwokerto, Jawa Tengah. ',
    Deskripsi: 'Small World Purwokerto terletak di Jl Raya Baturaden Barat No 270, Baturaden, Banyumas, Jawa Tengah. Kawasan Small World Purwokerto merupakan tempat wisata edukasi dengan bangunan miniatur dari berbagai belahan dunia. Tempat wisata ini menjadi pilihan wisata untuk wisatawan lokal maupun luar daerah.',
    open: '08.00-16.00',
    price: '20.000',
    image0: 'new-Small-World-Purwokerto (1).jpg',
    image1: 'New-Small-World-Purwokerto.jpg',
    city: 'Ketenger',
    maps: 'https://maps.app.goo.gl/Dky5RAB7tr2ZeRWV9'
  },
  {
    slug: 'taman-balai-kemambang',
    name: 'Taman Balai Kemambang',
    address: 'alan Karang Kobar Nomor 9, Glempang, Bancarkembar, Kecamatan Purwokerto Utara, Kabupaten Banyumas, Jawa Tengah.',
    Deskripsi: 'Taman Mas kemambang merupakan bangunan dengan desain arsitektur khas Jawa. Bangunan ini dibuat dari kayu. Di sekitarnya terdapat kolam ikan menjadikan tempat ini nyaman untuk bersantai. Di sini, pengunjung dapat menikmati pemandangan Gunung Slamet yang indah. Anda tidak perlu khawatir jika membawa serta anak, karena di Taman Mas Kemambang juga terdapat fasilitas bermain anak.',
    open: '09.00-17.00',
    price: '10.000',
    image0: 'mas kemambang (1).jpg',
    image1: 'mas kemambang (2).jpg',
    city: 'Glempang',
    maps: 'https://maps.app.goo.gl/kfoxoLaXfVtPXpRCA'
  },
  {
    slug: 'curug-telu',
    name: 'Curug Telu',
    address: 'Sawah & Hutan, Karangsalam, Baturraden, Kabupaten Banyumas, Jawa Tengah',
    Deskripsi: 'Curug Telu adalah air terjun dengan tiga aliran di Baturraden. Karena lokasinya terletak di area hutan yang terbilang masih aslli, air terjun ini menawarkan pemandangan alam yang autentik.Asal kamu tahu saja, selain sebagai tempat wisata alam, air tejun ini juga digunakan untuk menyediakan air bagi masyarakat sekitar.',
    open: '07.00–17.30',
    price: '5.000',
    image0: 'curug telu (1).jpg',
    image1: 'curug telu (2).jpg',
    city: 'Baturaden',
    maps: 'https://maps.app.goo.gl/CTYNKAk1V8N8HjpB6'
  },
  {
    slug: 'dream-land-water-park',
    name: 'Dream Land Water Park',
    address: 'Pancasan, Kabupaten Banyumas, Jawa Tengah ',
    Deskripsi: 'Di water park ini, kamu dan keluarga dapat menikmati bermain air dengan bebas di berbagai kolam renang yang tersedia. Selain itu, ada beragam wahana air yang menarik untuk dicoba.Selain fasilitas bermain air, Waterpark ini juga menyediakan area bersantai yang nyaman dan beberapa spot foto yang selalu populer di antara pengunjung.',
    open: '08.00–18.00',
    price: '20.000 – 25.000',
    image0: 'dreamland (2).webp',
    image1: 'dreamland.jpg',
    city: 'Pancasan',
    maps: 'https://maps.app.goo.gl/YpeLeM16FXs1G5US6'
  },
  {
    slug: 'menara-pandang-teratai-purwokerto',
    name: 'Menara Pandang Teratai Purwokerto',
    address: 'Jl Bung Karno, Kalibener, Kedungwuluh, Purwokerto Timur, Banyumas.',
    Deskripsi: 'Menara Pandang Teratai Purwokerto merupakan sebuah menara yang berada di Kedungwuluh, Purwokerto Barat, Kabupaten Banyumas. Menara pandang setinggi 117 meter yang dibangun sejak tahun 2021 ini merupakah sebuah proyek infrastruktur pariwisata baru di Kawasan Kota Baru Purwokerto yang berada di wilayah Jalan Bung Karno.',
    open: '09.00-22.00',
    price: '20.000 – 25.000',
    image0: 'Menara-Pandang.jpeg',
    image1: 'menara pandang (2).jpg',
    city: 'Purwokerto Timur',
    maps: 'https://maps.app.goo.gl/3RBe45xYst4wQcGY7'
  },
  {
    slug: 'taman-andhang-pangrenan-purwokerto',
    name: 'Taman Andhang Pangrenan Purwokerto',
    address: 'Jl. Gerilya Karangklesem Kec. Purwokerto Sel. Kabupaten Banyumas, Jawa Tengah 53144, Indonesia, Karangklesem, Purwokerto Selatan',
    Deskripsi: 'Taman Kota Andhang Pangrenan merupakan tempat wisata Banyumas alternatif yang bisa menjadi pilihan menarik. Terletak di Kelurahan Karangklesem Purwokerto Selatan, ',
    open: '08.00-19.00',
    price: '5.000 – 10.000',
    image0: 'taman andhang.jpg',
    image1: 'wahana-andhang-pangrenan.jpg',
    city: 'Karang Klesem',
    maps: 'https://maps.app.goo.gl/5AAeiTrVY3yL1PPp6'
  },
  {
    slug: 'museum-panglima-jendral-sudirman',
    name: 'Museum Panglima Jendral Sudirman',
    address: 'Jl. Patimura No.240a, RW.1, Dusun II, Pasir Kidul, Purwokerto Barat, Kabupaten Banyumas',
    Deskripsi: 'Museum Pangsar Soedirman atau lebih dikenal sebagai Museum Panglima Besar Jendral Soedirman. Museum ini merupakan objek wisata budaya berbasis edukasi yang menyimpan sisi sejarah dari perjuangan Jendral Soedirman. Pada Bangunan luarnya terdapat patung Jendral Soedirman menunggangi kuda disertai monumen berlambang Garuda Pancasila yang melambangkan perjuangannya untuk melawan penjajah demi kemerdekaan NKRI. Apa saja yang bisa kita lakukan di sini? Kita disuguhkan beberapa benda peninggalan bersejarah seperti, senjata, kursi angkut yang digunakan Jendral Soedirman saat sakit, dan diorama yang menampilkan beberapa lukisan dan miniatur riwayat perjuangan hingga riwayat hidup sang jendral. Selain itu, kita juga dapat membacanya dalam bentuk buku. Lokasinya bertempat di Pasir Kidul, Kec. Purwokerto Barat, Kab. Banyumas, Jawa Tengah',
    open: '08.00-16.00',
    price: '5.000',
    image0: 'jensoed 2.webp',
    image1: 'muesum jensoed.jpg',
    city: 'Purwokerto Barat',
    maps: ''
  },
  {
    slug: 'museum-bank-rakyat-indonesia',
    name: 'Museum Bank Rakyat Indonesia',
    address: 'Jl. Jend. Sudirman No. 57, Kecamatan Purwokerto Barat, Kabupaten Banyumas',
    Deskripsi: 'Museum ini diresmikan oleh Kamardy Arief, Direktur Utama Bank Rakyat Indonesia pada tanggal 19 Desember 1990. Didirikan di Purwokerto karena di kota inilah cikal bakal BRI didirikan oleh Patih R. Aria Wiriatmadja pada tanggal 16 Desember 1895. Di dalam museum yang terdiri dari dua lantai ini, pengunjung dapat menyaksikan maket kantor pusat BRI di Jakarta dan mendapat gambaran perkembangan Bank Rakyat Indonesia dari yang semula satu kantor bank kecil menjadi salah satu bank besar di Indonesia dengan kantor cabang sampai ke tingkat kecamatan-kecamatan di seluruh Indonesia. Museum tersebut juga memamerkan koleksi mata uang logam dan kertas dari VOC sampai sekarang, termasuk juga mata uang Portugis Timor Timur dan mata uang logam masa Majapahit. Di lantai dasar, pengunjung dapat menyaksikan beragam sarana kerja yang digunakan dalam aktivitas perbankan. Koleksi utama dari museum ini adalah Replika Gedung De Poerwokertosche Hulp-en Spaarbank der Inlandsche Bestuurs Ambtenaren.',
    open: '09.00-14.00',
    price: '10.000',
    image0: 'MUSEUM-BRI-2.jpg',
    image1: 'museum-BRI-purwokerto.jpg',
    city: 'Purwokerto Barat',
    maps: ''
  }
]
)

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
