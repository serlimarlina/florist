<template>
    <div
      class="col-span-1 bg-zinc-900 items-center flex gap-4 p-4 rounded shadow-lg cursor-pointer hover:bg-zinc-500"
      @click="$emit('click', pokemon)"
    >
    <div class="capitalize text-white lg:text-base text-xs">{{ pokemon.name }}</div>
    <div>
        <img :src="pokemon.image" :alt="pokemon.name" class="w-64 h-auto" />
      </div>
    </div>
</template>
  
<script>
  export default {
    props: {
      pokemon: {
        type: Object,
        required: true
      }
    }
  };
</script>
  