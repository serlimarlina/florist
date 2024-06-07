<template>
  <div class="w-full h-full flex justify-center bg-zinc-700 items-center p-16">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 m-8">
      <PokemonItem
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
        @click="showPokemonDetails(pokemon)"
      />
    </div>
  </div>

  <PokemonCard
      v-if="selectedPokemon"
      :pokemon="selectedPokemon"
      @close="closeCard"
  />
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import PokemonItem from '../components/PokemonItem.vue';
import PokemonCard from '../components/PokemonCard.vue';

export default {
  components: {
    PokemonItem,
    PokemonCard,
  },
  setup() {
    const pokemons = ref([]);
    const selectedPokemon = ref(null);

    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=15');
        const results = response.data.results;
        const pokemonPromises = results.map(async (pokemon, index) => {
          const pokemonData = await axios.get(pokemon.url);
          return {
            id: index + 1,
            name: pokemonData.data.name,
            image: pokemonData.data.sprites.front_default,
            stats: {
              hp: pokemonData.data.stats[0].base_stat,
              attack: pokemonData.data.stats[1].base_stat,
              defense: pokemonData.data.stats[2].base_stat,
              'special-attack': pokemonData.data.stats[3].base_stat,
              'special-defense': pokemonData.data.stats[4].base_stat,
              speed: pokemonData.data.stats[5].base_stat
            }
          };
        });
        pokemons.value = await Promise.all(pokemonPromises);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const showPokemonDetails = (pokemon) => {
      selectedPokemon.value = pokemon;
    };

    const closeCard = () => {
      selectedPokemon.value = null;
    };

    onMounted(fetchPokemons);

    return {
      pokemons,
      selectedPokemon,
      showPokemonDetails,
      closeCard,
    };
  }
};
</script>
