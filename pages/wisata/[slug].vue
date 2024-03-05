<template>
  <div>
    <section class="h-[30%] w-full overflow-hidden bg-blend-soft-light relative bg-black/30 backdrop-blur">
      <img src="/images/pattren.png" alt="" class="absolute object-cover h-full w-full -z-10">
      <div class="container mx-auto p-10 pt-28" />
    </section>
    <section>
      <div class="container mx-auto py-10">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:p-6">
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

            <div class="p-4 pt-10">
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
                <Icon icon="simple-icons:googlemaps" width="24" height="24" />
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
                    <span class="underline">{{ data['maps'] }}</span>
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

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

const modules = [Autoplay, Pagination]

const slug = useRoute().params.slug

const data = ref({})

onMounted(() => {
  destinations.value?.forEach((d) => {
    if (d.slug === slug) {
      data.value = d
    }
  })
})

const destinations = ref([
  {
    slug: 'curug-jenggala',
    name: 'Curug Jenggala',
    address: 'Jalan Limboro, Dusun III Kalipagu, Ketenger, Kecamatan Baturraden, Kabupaten Banyumas, Jawa Tengah.',
    description: 'Curug Jenggala adalah air terjun yang berlokasi di Ketenger, Baturaden, Banyumas. Air terjun ini memiliki ketinggian 30 meter dari permukaan tanah.Tempat wisata Banyumas ini mempunyai tiga air terjun yang tingginya sejajar. Air terjun yang berada di tengah memiliki arus yang paling deras. Wisata Banyumas ini menampilkan keindahan alam yang masih asli dan air terjun yang memesona. Di bawah air terjun terdapat sungai dengan batuan besar.Lokasinya berada di Dusun Kalipagu, Ketenger, Baturraden, Kabupaten Banyumas, Jawa Tengah 53152. Objek wisata ini berada di kaki Gunung Slamet yang membuatnya memiliki daya tarik tersendiri.',
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
    description: 'Telaga Sunyi merupakan sebuah telaga yang mata airnya bersumber dari Gunung Slamet. Airnya begitu jernih dan sejuk, sampai warnanya terlihat kebiruan. Betapa jernihnya air di telaga ini memungkinkan Anda untuk melihat dasarnya dengan mata telanjang.Air di telaga ini sangat jernih, bahkan bisa diminum langsung tanpa harus dimasak dulu, karena belum tercemar polutan. Namun, Anda tidak perlu melakukannya jika merasa ragu.Sesuai namanya, suasana di telaga ini memang sunyi. Telaga yang tenang dan kucuran air terjun menjadikan suasana terasa syahdu, cocok untuk merenung. Tak heran kalau danau ini kerap jadi tempat bertapa di masa lalu.',
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
    description: 'Small World Purwokerto terletak di Jl Raya Baturaden Barat No 270, Baturaden, Banyumas, Jawa Tengah. Kawasan Small World Purwokerto merupakan tempat wisata edukasi dengan bangunan miniatur dari berbagai belahan dunia. Tempat wisata ini menjadi pilihan wisata untuk wisatawan lokal maupun luar daerah.',
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
    description: 'Taman Mas kemambang merupakan bangunan dengan desain arsitektur khas Jawa. Bangunan ini dibuat dari kayu. Di sekitarnya terdapat kolam ikan menjadikan tempat ini nyaman untuk bersantai. Di sini, pengunjung dapat menikmati pemandangan Gunung Slamet yang indah. Anda tidak perlu khawatir jika membawa serta anak, karena di Taman Mas Kemambang juga terdapat fasilitas bermain anak.',
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
    description: 'Curug Telu adalah air terjun dengan tiga aliran di Baturraden. Karena lokasinya terletak di area hutan yang terbilang masih aslli, air terjun ini menawarkan pemandangan alam yang autentik.Asal kamu tahu saja, selain sebagai tempat wisata alam, air tejun ini juga digunakan untuk menyediakan air bagi masyarakat sekitar.',
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
    description: 'Di water park ini, kamu dan keluarga dapat menikmati bermain air dengan bebas di berbagai kolam renang yang tersedia. Selain itu, ada beragam wahana air yang menarik untuk dicoba.Selain fasilitas bermain air, Waterpark ini juga menyediakan area bersantai yang nyaman dan beberapa spot foto yang selalu populer di antara pengunjung.',
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
    description: 'Menara Pandang Teratai Purwokerto merupakan sebuah menara yang berada di Kedungwuluh, Purwokerto Barat, Kabupaten Banyumas. Menara pandang setinggi 117 meter yang dibangun sejak tahun 2021 ini merupakah sebuah proyek infrastruktur pariwisata baru di Kawasan Kota Baru Purwokerto yang berada di wilayah Jalan Bung Karno.',
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
    description: 'Taman Kota Andhang Pangrenan merupakan tempat wisata Banyumas alternatif yang bisa menjadi pilihan menarik. Terletak di Kelurahan Karangklesem Purwokerto Selatan, ',
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
    description: 'Museum Pangsar Soedirman atau lebih dikenal sebagai Museum Panglima Besar Jendral Soedirman. Museum ini merupakan objek wisata budaya berbasis edukasi yang menyimpan sisi sejarah dari perjuangan Jendral Soedirman. Pada Bangunan luarnya terdapat patung Jendral Soedirman menunggangi kuda disertai monumen berlambang Garuda Pancasila yang melambangkan perjuangannya untuk melawan penjajah demi kemerdekaan NKRI. Apa saja yang bisa kita lakukan di sini? Kita disuguhkan beberapa benda peninggalan bersejarah seperti, senjata, kursi angkut yang digunakan Jendral Soedirman saat sakit, dan diorama yang menampilkan beberapa lukisan dan miniatur riwayat perjuangan hingga riwayat hidup sang jendral. Selain itu, kita juga dapat membacanya dalam bentuk buku. Lokasinya bertempat di Pasir Kidul, Kec. Purwokerto Barat, Kab. Banyumas, Jawa Tengah',
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
    description: 'Museum ini diresmikan oleh Kamardy Arief, Direktur Utama Bank Rakyat Indonesia pada tanggal 19 Desember 1990. Didirikan di Purwokerto karena di kota inilah cikal bakal BRI didirikan oleh Patih R. Aria Wiriatmadja pada tanggal 16 Desember 1895. Di dalam museum yang terdiri dari dua lantai ini, pengunjung dapat menyaksikan maket kantor pusat BRI di Jakarta dan mendapat gambaran perkembangan Bank Rakyat Indonesia dari yang semula satu kantor bank kecil menjadi salah satu bank besar di Indonesia dengan kantor cabang sampai ke tingkat kecamatan-kecamatan di seluruh Indonesia. Museum tersebut juga memamerkan koleksi mata uang logam dan kertas dari VOC sampai sekarang, termasuk juga mata uang Portugis Timor Timur dan mata uang logam masa Majapahit. Di lantai dasar, pengunjung dapat menyaksikan beragam sarana kerja yang digunakan dalam aktivitas perbankan. Koleksi utama dari museum ini adalah Replika Gedung De Poerwokertosche Hulp-en Spaarbank der Inlandsche Bestuurs Ambtenaren.',
    open: '09.00-14.00',
    price: '10.000',
    image0: 'MUSEUM-BRI-2.jpg',
    image1: 'museum-BRI-purwokerto.jpg',
    city: 'Purwokerto Barat',
    maps: ''
  }
]
)
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
