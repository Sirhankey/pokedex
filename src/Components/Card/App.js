import React from "react";
import pokemonTypes, { getTypeColor } from "../../Utils/util";
import PokemonType from "../PokemonType/App";
import pokeball from './pokeball.png'
import { Link } from "react-router-dom";

function getPokemonCardStyles(types) {
    let backgroundStyle;

    if (types.length === 1) {
        backgroundStyle = {
            backgroundColor: getTypeColor(types[0]?.type?.name),
            right: '20px'
        };
    } else if (types.length > 1) {
        const gradientColors = types.map(type => getTypeColor(type.type.name));
        backgroundStyle = {
            background: `linear-gradient(to right, ${gradientColors.join(', ')})`,
            right: '20px'
        };
    }
    return backgroundStyle;
}

const PokemonCard = ({ id, name, types, mainImage, sprites }) => {

    // const handleDetailsClick = () => {
    //     history.push(`/details/${id}`);
    // };

    return (
        <div className="flex relative flex-col mt-5 mr-5 rounded-xl max-w-[440px] min-h-[210px] max-sm:mx-5 max-sm:mt-5 max-sm:mb-5 w-full md:max-w-[750px] md:min-w-[450px] hover:scale-105 transition-transform duration-300" style={{ ...getPokemonCardStyles(types), boxShadow: '1px 1px 3px rgba(0, 0, 0, 1)' }}>
            <header className="flex flex-col px-5 pt-5 -mt-px font-bold text-white whitespace-nowrap items-start">
                <h2 className="flex w-full text-base">#{id}</h2>
                <h3 className="flex mt-2 w-full text-3xl">{name}</h3>
            </header>
            <div className="box-border flex relative flex-row shrink-0 gap-5 p-5 mr-auto">
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
            <footer className="box-border flex relative flex-row shrink-0 justify-between px-5 pb-5">
                <Link to={`/detail/${id}`}>
                    <button className="text-base font-bold text-white underline max-w-[73px] bg-transparent border-none cursor-pointer">
                        Detalhes
                    </button>
                </Link>
                <button className="justify-center px-2.5 py-1 mr-5 text-base whitespace-nowrap bg-white rounded-lg text-stone-950 z-[1]">
                    Capturar!
                </button>
            </footer>
            {/* <img loading="lazy" src={pokeball} alt={`${name} main`} className="box-border object-cover overflow-hidden absolute shrink-0 w-6/12 aspect-[1.08] max-w-[170px] min-h-[20px] min-w-[20px] right-[15px] top-[-30px] z-[2]" /> */}
            <img loading="lazy" src={sprites.front_default} alt={`${name} background`} className="box-border object-cover overflow-hidden absolute right-0 shrink-0 w-4/5 aspect-square max-w-[200px] min-h-[20px] min-w-[20px] top-[0ppx]" />
        </div>
    );
};

export default PokemonCard;
