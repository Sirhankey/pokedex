import React from 'react';
import { PokemonsProvider, usePokemonsContext } from '../../Contextos/Pokemons';
import PokemonCardContainer from '../../Components/CardContainer/App';
import Container from '../../Components/Container/App';

const Home = () => {
    // Use o hook usePokemonsContext para acessar o estado dos pokemons
    const { pokemons } = usePokemonsContext();
    const loading = pokemons.length === 0;

    return (
        <PokemonsProvider>
            <div>
                <section>
                </section>

                <Container>
                    <section>
                        {/* Grid de cards de Pokemon */}
                        <div className="flex flex-wrap gap-2 max-md:flex-col max-md:gap-0">
                            {loading ? (
                                <p>Carregando...</p>
                            ) : (
                                pokemons.map(pokemon => (
                                    <div key={pokemon.id} className="w-full md:w-1/3">
                                        <PokemonCardContainer pokemon={pokemon} />
                                    </div>
                                ))
                            )}
                        </div>
                    </section>
                </Container>
            </div>
        </PokemonsProvider>
    );
};

export default Home;
