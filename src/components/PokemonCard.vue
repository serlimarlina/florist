<template>
    <div class="bg-white rounded p-8 w-[789px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div class="w-full flex justify-end font-bold cursor-pointer" @click="$emit('close')"> X </div>
      <div class="flex items-center gap-4">
        <div
          v-for="stat in stats"
          :key="stat"
          :class="['text-sm capitalize cursor-pointer hover:opacity-50', { 'font-bold': stat === selectedStat }]"
          @click="setSelectedStat(stat)"
        >
          {{ stat }}
        </div>
      </div>
      <div class="mt-6">
        <div class="text-lg font-light capitalize">
          Pokemon Name <span class="text-xl font-bold">{{ pokemon.name }}</span>
        </div>
        <div class="text-lg font-light capitalize mt-4">
          Info Statistic <span class="font-bold">{{ selectedStat }}</span>
        </div>
        <div class="w-full mt-4">
          <div class="relative bg-gray-300 rounded w-full h-12">
            <div class="absolute h-full z-10 top-0 flex items-center pl-2 rounded left-0 bg-green-300" :style="{ width: `${getStatPercentage(pokemon.stats[selectedStat])}%` }">
              {{ getStatPercentage(pokemon.stats[selectedStat]) }}%
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
  import { ref } from 'vue';
  
  export default {
    props: {
      pokemon: {
        type: Object,
        required: true
      }
    },
    setup(props) {
      const selectedStat = ref('hp');
      const stats = ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'];
  
      const setSelectedStat = (stat) => {
        selectedStat.value = stat;
      };
  
      const getStatPercentage = (stat) => {
        return Math.min((stat / 100) * 100, 100);
      };
  
      return {
        selectedStat,
        stats,
        setSelectedStat,
        getStatPercentage
      };
    }
  };
</script>
  