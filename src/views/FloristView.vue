<template>
  <div class="relative">
    <div class="w-full py-2 bg-indigo-400 text-center text-black text-xs">Get 50% Discount now!</div>
    <div class="bg-white w-full sticky top-0 z-20 shadow">
      <div class="w-full lg:px-20 px-8 py-6 flex justify-between items-center">
        <img src="../assets/logo.png" alt="Aurora" class="w-32 h-auto">
        <div class="gap-11 items-center justify-center text-sm lg:flex hidden">
          <a v-for="container in data.containers" :key="container.name" href="/" class="font-sans text-black-300 hover:opacity-10">{{ container.name }}</a>
        </div> 
        <div class="flex gap-10">
          <a href="/" class="cursor-pointer hover:opacity-50"><i class="bi bi-search text-dark text-xl"></i></a>
          <a href="/" class="cursor-pointer hover:opacity-50"><i class="bi bi-cart text-dark text-xl"></i></a>
        </div>
      </div>
    </div>
    <section class="relative">
      <img src="../assets/bg.jpg" alt="Background" class="w-full lg:h-auto h-[265px] object-cover">
      <div class="absolute z-10 w-full h-full top-1/3 lg:px-20 px-4">
        <div class="bg-gradient-to-r from-indigo-300 p-2 w-60 text-center rounded"><i>where every bloom tells a story</i></div>
        <div class="capitalize text-dark text-xl lg:text-4xl tracking-wide leading-snug">
          <span class="font-sans">Blossom into </span>
          <i class="font-sans bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-700">Beauty</i><br> 
          <span class="font-sans">with Aurora</span></div>
          <div class="border-double border-4 border-indigo-600 cursor-pointer lg:p-2 p-2 w-80 lg:w-52 text-center text-black rounded lg:text-base text-xs mt-4 lg:mt-8 hover:opacity-70">Make your flowers now! 
        </div>
      </div>
    </section>
    <section class="bg-[url('src/assets/bg15.jpg')] py-10">
      <div class="text-2xl text-center py-10">
        <span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-violet-500 text-white px-2">The benefits our shop offers</span>
      </div>
      <div class="mt-6 lg:mt-12 lg:w-full grid grid-cols-2 lg:flex gap-6 lg:gap-10 justify-between lg:px-20 px-4">
        <div v-for="benefit in data.benefits" :key="benefit.id" class="bg-indigo-300 lg:w-[287px] rounded px-4 text-center text-white text-lg py-5">
          <i :class="benefit.icon" class="text-4xl"></i><br>{{ benefit.text }}
        </div>
      </div>
    </section>
    <section class="mx-4 lg:mx-24 my-20">
      <div class="text-center text-2xl mb-10">Product Category</div>
      <div class="w-full overflow-x-auto">
        <div class="flex w-max lg:w-full text-center">
          <a v-for="(container, index) in data.containers" :key="index" href="/" :class="getBackgroundClass(index)" class="text-lg bg-indigo-300 lg:p-10 p-8 flex lg:w-full w-32 justify-center items-center hover:opacity-50">{{ container.name }}</a>
        </div>
      </div>
    </section>
    <section v-for="(container, index) in data.containers" :key="index" class="py-8 lg:py-16 lg:px-20 px-4 flex flex-col gap-10">
      <div class="text-center w-full text-xl text-dark">{{ container.name }}</div>
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div v-for="(product, index) in container.products" :key="index" :class="{'hidden lg:block': index === 4}">
          <img :src="product.image" :alt="product.name" class="cursor-pointer hover:opacity-70 w-full h-56 object-cover">
          <div class="bg-indigo-200 w-full p-4">
            <div class="mb-1">{{ product.name }}</div>
            <div class="flex items-center mb-1 space-x-1">
              <i v-for="i in 5" :key="i" class="bi bi-star-fill text-yellow-400"></i>
            </div>
            <div class="flex items-center justify-between">{{ product.price }}
              <div class="bg-indigo-500 w-8 h-8 flex items-center justify-center rounded-full hover:opacity-50">
                <i class="bi bi-cart-plus text-lg text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center hover:opacity-50"><a href="/">See All Product</a></div>
    </section>
    <section class="mx-4 lg:mx-24 my-20">
      <div class="text-xl font-bold mb-6">Aurora Florist - Online Flower Shop Based in Indonesia</div>
      <div class="text-lg">Aurora Florist is a premier flower shop located in Indonesia, offering a delightful array of fresh blooms and floral arrangements to brighten any occasion. Situated amidst the lush landscapes of Indonesia, our shop is dedicated to providing exquisite floral designs crafted with passion and creativity.</div>
    </section>
    <section class="bg-[url('src/assets/bg-1.jpg')] py-10">
      <div class="text-2xl text-center py-10">
        <span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-violet-500 text-white px-2">Customer Testimonials</span>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center px-4 lg:px-10 pb-11">
        <div v-for="testimonial in data.testimonials" :key="testimonial.id" class="bg-indigo-400 text-center text-white rounded text-lg px-5 py-5">
          <div class="w-full flex justify-center"><i class="bi bi-person-square text-4xl"></i></div>
          <div class="font-sans">{{ testimonial.name }}</div>
          <div>{{ testimonial.message }}</div>
        </div>
      </div>
    </section>
    <section class="px-4 lg:px-20 py-10">
      <div class="text-2xl text-center py-10">
        <span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-violet-500 text-white px-2">Payment Gateway</span>
      </div>
      <img src="../assets/pay.png" alt="payment gateway" class="w-full h-56 object-cover mb-10">
    </section>
    <section class="bg-indigo-100 px-4 lg:px-20 py-10">
      <div class="text-xl mb-10 text-center underline decoration-indigo-800">General Questions (FAQ)</div>
      <div class="flex flex-col gap-4">
        <div v-for="(faq, index) in data.faqs" :key="faq.id" class="bg-white cursor-pointer p-4 flex flex-col gap-2">
          <div class="flex w-full justify-between items-center">
            <div class="font-semibold">{{ faq.question }}</div>
            <div><i class="bi bi-chevron-down"></i></div>
          </div>
        </div>
      </div>
    </section>
    <section class="mx-4 lg:mx-20 my-20">
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold">🌟 Aurora: Let Your Moments Blossom 🌟</div>
        <div class="bg-indigo-400 text-white px-5 lg:px-16 py-2 lg:py-3 rounded cursor-pointer hover:opacity-50">Buy Now!</div>
      </div>
    </section>
    <footer>
      <div class="bg-indigo-300 py-10 px-4 lg:px-20">
        <div class="flex items-center text-2xl font-bold uppercase text-black"><img src="../assets/logo.png" alt="logo" class="w-32 lg:w-52 h-auto"></div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-between text-black my-10">
          <div><p class="text-xl font-bold mb-5">Address</p><p class="text-lg">Cibakung, Jawa Barat</p></div>
          <div><p class="text-xl font-semibold mb-5">Product Category</p><p v-for="container in data.containers" :key="container.id" class="text-lg">{{ container.name }}</p></div>
          <div><p class="text-xl font-semibold mb-5">Customer Care</p><p class="text-lg">+62 123 456 78</p><p class="text-lg">minceu@florist.com</p></div>
        </div>
        <div class="w-full text-center text-black text-xs">© 2024 Aurora Florist All rights reserved</div>
      </div>
    </footer>
  </div>
</template>
<script setup>
import "bootstrap-icons/font/bootstrap-icons.css";
import { reactive } from 'vue';

const data = reactive({
  containers: [
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
  ],
  testimonials: [
    { id: 1, name: 'wildan', message: 'bgus bngt bjir, top markotop pokonamah' },
    { id: 2, name: 'zavian', message: 'I ordered a bouquet of roses from Aurora Florist for my anniversary, and I was absolutely thrilled with the quality! The flowers were fresh, beautifully arranged, and lasted for over a week. Excellent service and timely delivery. Highly recommend!' }
  ],
  faqs: [
    { id: 1, question: 'Do you deliver internationally?' },
    { id: 2, question: 'Do you offer same-day delivery?' },
    { id: 3, question: 'Can I customize my flower arrangement?' },
    { id: 4, question: 'What types of flowers do you offer?' }
  ],
  benefits: [
    { id: 1, icon: 'bi bi-clipboard-heart', text: 'Online Ordering Conveniences' },
    { id: 2, icon: 'bi bi-truck', text: 'Timely Delivery Services' },
    { id: 3, icon: 'bi bi-flower1', text: 'Best Quality' },
    { id: 4, icon: 'bi bi-person-hearts', text: 'Personalized Arrangements' }
  ]
});

function getBackgroundClass(index) {
  return index % 2 === 0 ? 'bg-indigo-400' : 'bg-indigo-300';
}
</script>