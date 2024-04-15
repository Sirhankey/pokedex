import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

function getAllPokemons(limit = 20) {
    return axios.get(`${BASE_URL}?limit=${limit}`)
        .then(response => response.data)
        .catch(error => console.log(error));
}

function getPokemonByName(name) {
    return axios.get(`${BASE_URL}/${name}`)
        .then(response => response.data)
        .catch(error => console.log(error));
}

async function fetchPokemonDetails(url) {
    return await axios.get(url)
        .then(response => response.data)
        .catch(error => console.log(error));
}

async function fetchAllPokemonDetails(results) {
    const pokemonDetailsPromises = results.map(async (pokemon) => {
        try {
            const pokemonDetails = await fetchPokemonDetails(pokemon.url);
            return pokemonDetails;
        } catch (error) {
            const retryPokemonDetails = await fetchPokemonDetails(pokemon.url);
            return retryPokemonDetails;
        }
    });

    const pokemonDetails = await Promise.all(pokemonDetailsPromises);
    return pokemonDetails;
}


export { getAllPokemons, getPokemonByName, fetchPokemonDetails, fetchAllPokemonDetails };
