<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Parent Component</h1>
    <p>Data from child: {{ childData }}</p>  <!-- Menampilkan data yang diterima dari child -->
    <ChildComponent @send-data="handleData" />  <!-- Mendengarkan event 'send-data' dari ChildComponent -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

const childData = ref('')  // Data di parent untuk menyimpan nilai dari child

function handleData(data) {
  childData.value = data  // Mengubah nilai childData dengan data yang diterima dari child
}
</script>