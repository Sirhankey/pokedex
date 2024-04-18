import React from "react";
import pokemonTypes, { getTypeColor } from "../../Utils/util";
import PokemonType from "../PokemonType/App";
import { Link } from "react-router-dom";
import pokeball from './pokeball.png';
import pokedex from './pokedex.png';


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

const PokemonCard = ({ id, name, types, sprites }) => {


    return (
        <div className="flex relative flex-col mt-5 mr-5 rounded-xl max-w-[440px] min-h-[210px] max-sm:mx-5 max-sm:mt-5 max-sm:mb-5 w-full md:max-w-[750px] md:min-w-[450px] hover:scale-105 transition-transform duration-300" style={{ ...getPokemonCardStyles(types), boxShadow: '1px 1px 3px rgba(0, 0, 0, 1)' }}>
            <header className="flex flex-col px-5 pt-5 -mt-px font-bold text-white whitespace-nowrap items-start">
                <h2 className="flex w-full text-base">#{id}</h2>
                <h3 className="flex mt-2 w-full text-3xl">{name}</h3>
            </header>
            <div className="box-border flex relative flex-row shrink-0 gap-5 p-5 mr-auto">
                {types.map((type, index) => {
                    const foundType = pokemonTypes.find(pokemonType => pokemonType.type === type.type?.name);
                    if (foundType) {
                        return (
                            <PokemonType key={index} src={foundType.src} alt={foundType.alt} className={foundType.className}>
                                {foundType.type}
                            </PokemonType>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <footer className="box-border flex relative flex-row justify-start gap-5 px-5 pb-5">
                <Link to={`/detail/${id}`}>
                    <button className="bg-transparent border-none cursor-pointer">
                        <img src={pokedex} alt="Detalhes" className="h-6 w-6" />
                    </button>
                </Link>
                <Link to={`/detail/${id}`}>
                    <button className="bg-transparent border-none cursor-pointer mr-5">
                        <img src={pokeball} alt="Capturar" className="h-6 w-6" />
                    </button>
                </Link>
            </footer>
            <img loading="lazy" src={sprites.front_default} alt={`${name} background`} className="box-border object-cover overflow-hidden absolute shrink-0 w-4/5 aspect-square max-w-[250px] min-h-[20px] min-w-[20px] top-[-30px] right-[-35px]" />
        </div>
    );
};

export default PokemonCard;
