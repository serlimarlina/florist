<template>
  <div class="relative">
    <div class="w-full py-2 bg-indigo-400 text-center text-black text-xs">
      Get 50% Discount now!
    </div>
    <div class="bg-white w-full sticky top-0 z-20 shadow">
      <div class="w-full lg:px-20 px-8 py-6 flex justify-between items-center">
        <a aria-current="page" href="/" class="router-link-active router-link-exact-active cursor-pointer">
          <img src="../assets/logo.png" alt="/" class="w-32 h-auto"></a>
        <div class="gap-11 items-center justify-center text-sm lg:flex hidden">
          <a v-for="category in categories" href="/" class="font-sans text-black-300 hover:opacity-10">{{ category.name }}</a>
        </div> 
        <div class="flex gap-10">
          <a href="/" class="cursor-pointer hover:opacity-50"><i class="bi bi-search text-dark text-xl"></i></a>
          <a href="/" class="cursor-pointer hover:opacity-50 relative"><i class="bi bi-cart text-dark text-xl"></i></a>
        </div>
      </div>
    </div>
    <section class="relative">
    <img src="../assets/bg.jpg" alt="/" class="w-full lg:h-auto h-[265px] object-fill">
    <div class="absolute z-10 w-full h-full top-1/3 lg:px-20 px-4">
      <div class="bg-gradient-to-r from-indigo-300 p-2 w-60 text-center rounded"><i>where every bloom tells a story</i></div>
      <div class="capitalize text-dark text-xl lg:text-4xl tracking-wide leading-snug">
        <span class="font-sans">Blossom into </span><i class="font-sans bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-700">Beauty</i> <br> 
        <span class="font-sans">with Aurora</span></div>
      <div class=" border-double border-4 border-indigo-600 cursor-pointer lg:p-2 p-2 w-80 lg:w-52 text-center text-black rounded lg:text-base text-xs mt-4 lg:mt-8 hover:opacity-70">
        Make your flowers now! 
      </div>
    </div>
  </section>
  <section class="bg-[url('src/assets/bg15.jpg')]">
    <div class="text-2xl text-center py-10">
      <span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-violet-500 text-white px-2">the benefits our shop offers</span></div>
    <div class="w-full grid grid-cols-2 lg:flex gap-6 lg:gap-1 justify-between px-20 pb-11">
      <div class="bg-indigo-300 w-64 text-center text-white rounded text-lg px-5 py-5"><i class="bi bi-clipboard-heart text-4xl"></i><br>Online Ordering Conveniences</div>
      <div class="bg-indigo-300 w-64 text-center text-white rounded text-lg px-5 py-5"><i class="bi bi-truck text-4xl"></i><br>Timely Delivery Services</div>
      <div class="bg-indigo-300 w-64 text-center text-white rounded text-lg px-5 py-5"><i class="bi bi-flower1 text-4xl"></i><br>best quality</div>
      <div class="bg-indigo-300 w-64 text-center text-white rounded text-lg px-5 py-5"><i class="bi bi-person-hearts text-4xl"></i><br>Personalized Arrangements</div>
    </div>
  </section>
  <section class="mx-24 my-20">
    <div class="text-center text-2xl mb-10">Kategori Produk</div>
    <div class="w-[100px] md:w-full overflow-x-auto">
      <div class="flex w-full text-center">
        <a v-for="(category, index) in categories" :key="index"  href="/" :class="getBackgroundClass(index)" class="text-lg bg-indigo-300 lg:p-10 p-8 flex lg:w-full w-32 justify-center items-center hover:opacity-50">{{ category.name }}</a>
      </div>
    </div>
  </section>
  <section v-for="(category, catIndex) in categories" :key="catIndex" class="py-8 lg:py-16 lg:px-20 px-4 flex flex-col gap-10">
    <div class="text-center w-full text-xl text-dark">{{ category.name }}</div>
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
      <div v-for="(product, prodIndex) in category.products" :key="prodIndex" :class="{'hidden lg:block': prodIndex === 4}">
        <img :src="product.image" :alt="product.name" class="cursor-pointer hover:opacity-70 w-full h-56 object-cover image-lazy pulse" lazy="loaded">
          <div class="bg-indigo-200 w-full p-4">
            <div class="mb-1">{{ product.name }}</div>
            <div class="flex items-center mb-1 space-x-1">
              <i v-for="i in 5" :key="i" class="bi bi-star-fill text-yellow-400"></i></div>
              <div class="flex items-center justify-between">{{ product.price }}
              <div class="bg-indigo-500 w-8 h-8 flex items-center justify-center rounded-full hover:opacity-50">
              <i class="bi bi-cart-plus text-lg text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div><div class="text-center hover:opacity-50"><a href="/">Lihat Semuanya</a></div>
  </section>
  <section class="mx-24 my-20">
    <div class="text-xl font-bold mb-6">Aurora Florist - online flower shop based in Indonesia</div>
    <div class="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, quisquam magnam fugiat quidem quasi excepturi quam alias quos nihil soluta, eos ab consequatur atque quia reiciendis ut adipisci, suscipit itaque?</div>
  </section>
  <section class="bg-[url('src/assets/bg-1.jpg')]">
    <div class="text-2xl text-center py-10">
      <span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-violet-500 text-white px-2">customer testimonials</span></div>
      <div class="grid grid-rows-1 grid-flow-col gap-4 justify-center px-10 pb-11">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="bg-indigo-400 w-full text-center text-white rounded text-lg px-5 py-5">
          <div class="w-full flex justify-center"><i class="bi bi-person-square text-4xl"></i></div>
          <div class="font-sans">{{ testimonial.name }}</div>
        <div>{{ testimonial.message }}</div>
      </div>
    </div>
  </section>
  <section>
    <div class="text-2xl text-center py-10">
      <span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-violet-500 text-white px-2">Payment Gateway</span></div>
        <img src="../assets/pay.png" alt="payment gateway" class="w-full h-56 "><br><br><br>
  </section>
  <section class="bg-indigo-100 px-20 py-10">
    <div class="text-xl mb-10 text-center underline decoration-indigo-800">General Questions (FAQ)</div>
    <div class="flex flex-col gap-4">
      <div v-for="(faq, index) in faqs" :key="faq.id" class="bg-white cursor-pointer p-4 flex flex-col gap-2">
        <div class="flex w-full justify-between items-center">
          <div class="font-semibold">{{ faq.question }}</div>
          <div><i class="bi bi-chevron-down"></i></div>
        </div>
      </div>
    </div>
  </section>
  <section class="mx-20 my-20">
    <div class="flex justify-between">
      <div class="text-2xl"><b>🌟 Aurora: Let Your Moments Blossom 🌟</b></div>
      <div class="bg-indigo-400 text-white px-5 lg:px-16 py-2 lg:py-3 rounded cursor-pointer hover:opacity-50">Buy Now!</div>
    </div>
  </section>
  <footer>
    <div class="bg-indigo-300 py-10 px-20">
      <div class="flex items-center text-2xl font-bold uppercase text-black" href="/">
        <img src="../assets/logo.png" alt="logo" class="w-52 h-auto"></div>
      <div class="grid grid-rows-1 grid-flow-col gap-4 justify-between text-black my-10">
        <div><p class="text-xl text-bold mb-5">Address</p><p class="text-lg">Cianjur, Jawa Barat</p></div>
        <div><p class="text-xl text-semibold mb-5">Product Categorys</p><p v-for="category in categories"  class="text-lg">{{ category.name }}</p></div>
        <div><p class="text-xl text-semibold mb-5">customer Care</p><p class="text-lg">+62 123 456 78</p><p class="text-lg">minceu@florist.com</p></div>
      </div>
      <div class="w-full text-center text-black text-xs"> © 2024 Aurora Florist All rights reserved </div>
    </div>
  </footer>
  </div>
</template>
<script setup>
import "bootstrap-icons/font/bootstrap-icons.css";
import { ref, reactive } from 'vue';
const categories = reactive([
  {
    name: 'Flower Bouquet',
    products: [
      { name: 'Flower Bouquet', price: 'Rp 299.000', image: 'src/assets/bouquet1.jpg' },
      { name: 'Flower Bouquet', price: 'Rp 299.000', image: 'src/assets/bouquet2.jpg' },
      { name: 'Flower Bouquet', price: 'Rp 299.000', image: 'src/assets/bouquet3.jpg' },
      { name: 'Flower Bouquet', price: 'Rp 299.000', image: 'src/assets/bouquet4.jpg' },
      { name: 'Flower Bouquet', price: 'Rp 299.000', image: 'src/assets/bouquet5.jpg' }
    ]
  },
  {
    name: 'Flower Board',
    products: [
      { name: 'Flower Board', price: 'Rp 500.000', image: 'src/assets/board1.jpg' },
      { name: 'Flower Board', price: 'Rp 500.000', image: 'src/assets/board2.jpg' },
      { name: 'Flower Board', price: 'Rp 500.000', image: 'src/assets/board3.jpg' },
      { name: 'Flower Board', price: 'Rp 500.000', image: 'src/assets/board4.jpg' },
      { name: 'Flower Board', price: 'Rp 500.000', image: 'src/assets/board5.jpg' }
    ]
  },
  {
    name: 'Money Bouquet',
    products: [
      { name: 'Money Bouquet', price: 'Rp 1.000.000', image: 'src/assets/money1.jpg' },
      { name: 'Money Bouquet', price: 'Rp 1.000.000', image: 'src/assets/money2.jpg' },
      { name: 'Money Bouquet', price: 'Rp 1.000.000', image: 'src/assets/money3.jpg' },
      { name: 'Money Bouquet', price: 'Rp 1.000.000', image: 'src/assets/money4.jpg' },
      { name: 'Money Bouquet', price: 'Rp 1.000.000', image: 'src/assets/money5.jpg' }
    ]
  },
  {
    name: 'Snack Bouquet',
    products: [
      { name: 'Snack Bouquet', price: 'Rp 500.000', image: 'src/assets/snack1.jpg' },
      { name: 'Snack Bouquet', price: 'Rp 500.000', image: 'src/assets/snack2.jpg' },
      { name: 'Snack Bouquet', price: 'Rp 500.000', image: 'src/assets/snack3.jpg' },
      { name: 'Snack Bouquet', price: 'Rp 500.000', image: 'src/assets/snack4.jpg' },
      { name: 'Snack Bouquet', price: 'Rp 500.000', image: 'src/assets/snack5.jpg' }
    ]
  },
  {
    name: 'Ballon Bouquet',
    products: [
      { name: 'Ballon Bouquet', price: 'Rp 500.000', image: 'src/assets/ballon1.jpg' },
      { name: 'Ballon Bouquet', price: 'Rp 500.000', image: 'src/assets/ballon2.jpg' },
      { name: 'Ballon Bouquet', price: 'Rp 500.000', image: 'src/assets/ballon3.jpg' },
      { name: 'Ballon Bouquet', price: 'Rp 500.000', image: 'src/assets/ballon4.jpg' },
      { name: 'Ballon Bouquet', price: 'Rp 500.000', image: 'src/assets/ballon5.jpg' }
    ]
  },
  {
    name: 'Cigarette Bouquet',
    products: [
      { name: 'Cigarette Bouquet', price: 'Rp 200.000', image: 'src/assets/Cigarette1.jpg' },
      { name: 'Cigarette Bouquet', price: 'Rp 200.000', image: 'src/assets/Cigarette2.jpg' },
      { name: 'Cigarette Bouquet', price: 'Rp 200.000', image: 'src/assets/Cigarette3.jpg' },
      { name: 'Cigarette Bouquet', price: 'Rp 200.000', image: 'src/assets/Cigarette4.jpg' },
      { name: 'Cigarette Bouquet', price: 'Rp 200.000', image: 'src/assets/Cigarette5.jpg' }
    ]
  }
]);

const testimonials = ref([
  { id: 1, name: 'serlixyz', message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
  { id: 2, name: 'serlixyz', message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' }
]);

const faqs = ref([
  { id: 1, question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?' },
  { id: 2, question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?' },
  { id: 3, question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?' },
  { id: 4, question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?' }
]);

function getBackgroundClass(index) {
  return index % 2 === 0 ? 'bg-indigo-400' : 'bg-indigo-300';
}
</script>