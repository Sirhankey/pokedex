import React, { useEffect, useState } from 'react';
import { usePokemonsContext } from '../../Contextos/Pokemons';

function PokeWho() {
    const { pokemons } = usePokemonsContext();
    const [pokemon, setPokemon] = useState(null);
    const [score, setScore] = useState(0);
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [revealed, setRevealed] = useState(false);
    const [disableOptions, setDisableOptions] = useState(false);
    const [correctOption, setCorrectOption] = useState(null);

    useEffect(() => {
        if (!pokemons) return;
        const numberOfPokemons = 150;
        const randomIndex = Math.floor(Math.random() * numberOfPokemons);
        const randomPokemon = pokemons[randomIndex];
        if (randomPokemon && randomPokemon.sprites.front_default) {
            setPokemon(randomPokemon);
            const selectedOptions = [];
            while (selectedOptions.length < 3) {
                const optionIndex = Math.floor(Math.random() * numberOfPokemons);
                const optionPokemon = pokemons[optionIndex];
                if (optionPokemon && optionPokemon.name !== randomPokemon.name && !selectedOptions.includes(optionPokemon.name)) {
                    selectedOptions.push(optionPokemon.name);
                }
            }
            selectedOptions.push(randomPokemon.name);
            selectedOptions.sort(() => Math.random() - 0.5);
            setOptions(selectedOptions);
            setCorrectOption(randomPokemon.name);
        }
    }, [score, pokemons]);

    const handleOptionClick = (option) => {
        if (revealed) return;
        setSelectedOption(option);
        setDisableOptions(true);
        setRevealed(true);
        setTimeout(() => {
            if (option === pokemon.name) {
                setScore(score + 1);
            } else {
                setScore(0);
            }
            setPokemon(null);
            setRevealed(false);
            setDisableOptions(false);
        }, 5000);
    };

    return (
        <div className="flex items-center justify-center flex-col h-80vh w-screen">
            <div className="carrousell"></div>
            <div className="relative flex items-center justify-center">
                <div className={!revealed ? 'opacity-50 filter brightness-0' : ''}>
                    <img
                        className="w-[500px] h-[500px]"
                        src={pokemon ? pokemon.sprites.front_default : ""}
                        alt="Quem é esse pokemon?"
                    />
                </div>
                <div className="absolute top-[30px] right-[30px] bg-blue-500 rounded-full p-4 shadow-lg z-10 text-white font-bold text-2xl">
                    <h2>{score}</h2>
                </div>
            </div>
            <div className="grid gap-2 md:grid-cols-2 md:w-1/2 w-full">
                {options.map((option, index) => (
                    <div className="p-2 text-center" key={index}>
                        <button
                            className={`w-full h-[50px] py-2 px-4 rounded bg-blue-500 text-white ${selectedOption === option && !revealed ? 'animate-blink' : ''} ${revealed ? (option === correctOption ? 'bg-green-500' : (option === selectedOption ? 'bg-red-500' : '')) : ''}`}
                            onClick={() => handleOptionClick(option)}
                            disabled={disableOptions}
                        >
                            {option}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PokeWho;
