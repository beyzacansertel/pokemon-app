
<template>
    <ul>
        <li v-for="pokemon in pokemons" :key="pokemon.id" :name="pokemon.name" @click="selectPokemon(pokemon)">
            {{ pokemon.name }}

            <img :src="pokemon.sprites" alt="pokemon sprite">
            
            <ul v-if="selectedPokemon && selectedPokemon.id === pokemon.id">
                <li v-for="ability in pokemon.abilities" :key="ability.ability.name">
                    {{ ability.ability.name }}
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      pokemons: [],
      selectedPokemon: null
    };
  },
  methods: {
    async getPokemons() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=40&limit=40");
      if (response.ok) {
        const data = await response.json();
        const pokemons = [];

        for (const result of data.results) {
          const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${result.name}`);
          if (pokemonResponse.ok) {
            const pokemonData = await pokemonResponse.json();
            pokemons.push({
              id: pokemonData.id,
              name: pokemonData.name,
              abilities: pokemonData.abilities,
              sprites: pokemonData.sprites.front_default
            });
          }
        }

        this.pokemons = pokemons;
      }
    },
    selectPokemon(pokemon) {
      if (this.selectedPokemon && this.selectedPokemon.id === pokemon.id) {
        this.selectedPokemon = null; // Deselect if the same Pokemon is clicked again
      } else {
        this.selectedPokemon = pokemon;
      }
    }
  },
  mounted() {
    this.getPokemons();
  }
};
</script>