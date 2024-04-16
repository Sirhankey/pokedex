import React from 'react';
import { useParams } from 'react-router-dom';
import { PokemonsProvider, usePokemonsContext } from '../../Contextos/Pokemons';
import Container from '../../Components/Container/App';
import DetailContainerTop from '../../Components/DetailContainerTop/App';
import DetailContainerBottom from '../../Components/DetailContainerBottom/App';

const Detail = () => {
    const { id } = useParams();
    const { pokemons } = usePokemonsContext();
    const loading = pokemons.length === 0;

    if (!id) {
        return <p>Invalid Pokemon ID</p>;
    }
    const pokemonId = parseInt(id, 10);
    const pokemon = pokemons.find(pokemon => pokemon.id === pokemonId);

    return (
        <PokemonsProvider>
            <div>
                <Container>
                    <section>
                        <div className="flex flex-wrap gap-2 max-md:flex-col max-md:gap-0">
                            {loading ? (
                                <p>Carregando...</p>
                            ) : (
                                <>
                                    {/* <pre>{JSON.stringify(pokemon, null, 2)}</pre> */}
                                    <DetailContainerTop
                                        image={pokemon.sprites?.front_default}
                                        name={pokemon.name}
                                        baseXP={pokemon.baseExperience}
                                        moves={pokemon.moves}
                                        sprites={pokemon.sprites}
                                    />

                                    <DetailContainerBottom
                                        abilities={pokemon.abilities}
                                        weight={pokemon.weight}
                                        height={pokemon.height}
                                        types={pokemon.types}
                                    />
                                </>
                            )}
                        </div>
                    </section>
                </Container>
            </div>
        </PokemonsProvider>
    );
};

export default Detail;
