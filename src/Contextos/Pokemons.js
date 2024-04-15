import { createContext, useContext, useEffect, useState } from "react";
import { fetchAllPokemonDetails, getAllPokemons } from "../Services/pokemonService";

export const PokemonsContext = createContext();
PokemonsContext.displayName = 'Pokemons';

export function PokemonsProvider({ children }) {
    const [pokemons, setPokemons] = useState([]);

    function extractPokemonInfo(pokemonDetails) {
        return pokemonDetails.map((pokemon) => ({   
            name: pokemon.name,
            abilities: pokemon.abilities,
            baseExperience: pokemon.base_experience,
            height: pokemon.height,
            id: pokemon.id,
            isDefault: pokemon.is_default,
            moves: pokemon.moves,
            order: pokemon.order,
            sprites: pokemon.sprites,
            stats: pokemon.stats,
            types: pokemon.types,
            weight: pokemon.weight,
        }));
    }

    // Efeito colateral para buscar os Pokémon assim que o contexto é montado
    useEffect(() => {
        const fetchAndSavePokemons = async () => {
            try {
                if (pokemons.length > 0) return;
                const response = await getAllPokemons(151)
                const data = await response.results;
                const pokemonDetails = await fetchAllPokemonDetails(data);
                const pokemonInfo = extractPokemonInfo(pokemonDetails);
                setPokemons(pokemonInfo); // Call savePokemon to save the pokemonInfo
            } catch (error) {
                console.error('Error fetching Pokémon:', error);
            }
        };

        fetchAndSavePokemons();
    }, [pokemons]);

    // Função para salvar Pokémon individualmente
    // const savePokemon = (pokemon) => {
    //     setPokemons(prevPokemons => [...prevPokemons, pokemon]);
    // };

    return (
        <PokemonsContext.Provider
            value={{ pokemons }}>
            {children}
        </PokemonsContext.Provider>
    );
}

export function usePokemonsContext() {
    const { pokemons } = useContext(PokemonsContext);
    return { pokemons };
}
