import React from 'react';

const PokemonImage = ({ pokemon, revealed }) => {
    return (
        <div className={!revealed ? 'opacity-50 filter brightness-0' : ''}>
            <img
                className="w-[400px] md:w-[500px] h-[400px] md:h-[500px]" loading="lazy"
                src={pokemon && pokemon.sprites.front_default ? pokemon.sprites.front_default : "/public/logo192.png"}
                alt="Quem é esse pokemon?"
            />
        </div>
    );
};

export default PokemonImage;
