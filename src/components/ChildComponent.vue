<template>
  <div class="p-4 bg-gray-100 rounded">
    <h2 class="text-xl font-bold mb-2">Child Component</h2>
    <input v-model="inputData" type="text" class="border p-2" placeholder="Enter data" />
    <button @click="sendData" class="ml-2 px-4 py-2 bg-blue-500 text-white rounded">Send to Parent</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const inputData = ref('')  // Data lokal untuk input
const emit = defineEmits(['send-data'])  // Mendefinisikan event yang akan dipancarkan

function sendData() {
  emit('send-data', inputData.value)  // Memancarkan event 'send-data' dengan nilai dari input
}
</script>