import * as React from "react";
import PokemonType from "../PokemonType/App";
import pokemonTypes from "../../Utils/util";

function Card({ children }) {
    return (
        <div className="card flex flex-col w-full max-w-[400px] mx-auto">
            <div className="box-border flex relative flex-col grow shrink-0 p-5 w-full max-h-[400px] overflow-auto shadow-md">
                <section className="box-border flex relative flex-col grow shrink-0 self-stretch p-5 w-full h-auto">
                    {children}
                </section>
            </div>
        </div>
    );
}

function DetailTypes({ types }) {
    return (
        <div className="box-border flex relative flex-col shrink-0 h-[200px]">
            <h2 className="mb-2 font-bold text-lg">Types</h2>
            <div className="box-border flex relative flex-col shrink-0 gap-5 p-5 mr-auto">
                {types.map((type, index) => {
                    // Procurando o tipo correspondente em pokemonTypes
                    const foundType = pokemonTypes.find(pokemonType => pokemonType.type === type.type?.name);
                    // Verificando se o tipo foi encontrado
                    if (foundType) {
                        return (
                            <PokemonType key={index} src={foundType.src} alt={foundType.alt} className={foundType.className}>
                                {foundType.type}
                            </PokemonType>
                        );
                    } else {
                        // Se o tipo não for encontrado, retorne null ou qualquer outra coisa
                        return null;
                    }
                })}
            </div>
        </div>
    );
}

function DetailContainerBottom({ abilities, weight, height, types }) {

    const abilityNames = abilities.map(ability => ability.ability.name);

    const cards = [
        {
            id: 1,
            content: (
                <div className="box-border flex relative flex-col shrink-0 h-[200px]">
                    <h2 className="mb-2 font-bold text-lg">Abilities</h2>
                    <div className="flex flex-wrap gap-2 justify-center items-center">
                        {abilityNames.map((abilityName, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-200 rounded-md">{abilityName}</span>
                        ))}
                    </div>
                </div>

            ),
        },
        {
            id: 2,
            content: (
                <div className="box-border flex relative flex-col shrink-0 h-[200px]">
                    <h2 className="font-bold text-lg mb-4">Weight and Height</h2>
                    <p className="mb-2">Weight: {weight}</p>
                    <p className="mb-2">Height: {height}</p>
                </div>
            ),
        },
        {
            id: 3,
            content: (
                <DetailTypes types={types} />
            ),
        },
    ];

    return (
        <main className="box-border flex relative flex-col shrink-0">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {cards.map((card) => (
                    <div key={card.id} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                        <Card>
                            {card.content}
                        </Card>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default DetailContainerBottom;
