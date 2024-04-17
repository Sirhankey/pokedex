import React, { useEffect, useState } from 'react';
import { usePokemonsContext } from '../../Contextos/Pokemons';
import classNames from 'classnames';
import CustomCarousel from '../../Components/Carousel/App';

function PokeWho() {
    const { pokemons } = usePokemonsContext();
    const [pokemon, setPokemon] = useState(null);
    const [score, setScore] = useState(0);
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [revealed, setRevealed] = useState(false);
    const [disableOptions, setDisableOptions] = useState(false);
    const [correctOption, setCorrectOption] = useState(null);
    const [revealedPokemons, setRevealedPokemons] = useState({});

    const updateRevealedPokemons = (pokemon, revealedPokemons) => {
        const updatedRevealedPokemons = { ...revealedPokemons };
        updatedRevealedPokemons[pokemon.name] = {
            name: pokemon.name,
            sprite: pokemon.sprites.front_default
        };
        return updatedRevealedPokemons;
    };


    useEffect(() => {
        if (!pokemons) return;
        const numberOfPokemons = 150;
        const randomIndex = Math.floor(Math.random() * numberOfPokemons);
        const randomPokemon = pokemons[randomIndex];
        if (randomPokemon && randomPokemon.sprites.front_default) {
            console.log('randomPokemon: ', randomPokemon);
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
                setRevealedPokemons(updateRevealedPokemons(pokemon, revealedPokemons));
                setScore(score + 1);
                console.log('revealedPokemons: ', revealedPokemons);
            } else {
                setRevealedPokemons({});
                setScore(0);
            }
            setPokemon(null);
            setRevealed(false);
            setDisableOptions(false);
        }, 3000);
    };

    const scoreClass = () => {
        return classNames({
            'bg-gray-700 shadow-md': score < 15,
            'bg-blue-500 shadow-lg': score >= 15 && score < 30,
            'bg-green-500 shadow-xl': score >= 30 && score < 45,
            'bg-yellow-400 shadow-2xl': score >= 45 && score < 60,
            'bg-orange-500 shadow-3xl': score >= 60 && score < 75,
            'bg-red-500 shadow-md': score >= 75 && score < 90,
            'bg-pink-500 shadow-lg': score >= 90 && score < 105,
            'bg-purple-500 shadow-xl': score >= 105 && score < 120,
            'bg-indigo-500 shadow-2xl': score >= 120 && score < 135,
            'bg-teal-500 shadow-3xl': score >= 135 && score < 150,
            'bg-gold shadow-md': score >= 150,
        });
    };

    return (
        <div className="main-container mb-16">
            <CustomCarousel revealedPokemons={revealedPokemons} />
            <div className="flex items-center justify-center flex-col h-80vh w-screen">
                <h1 className="text-3xl font-bold mt-2">Quem é esse Pokémon?</h1>
                <div className="relative flex items-center justify-center">
                    <div className={!revealed ? 'opacity-50 filter brightness-0' : ''}>
                        <img
                            className="w-[400px] md:w-[500px] h-[400px] md:h-[500px]"
                            src={pokemon ? pokemon.sprites.front_default : ""}
                            alt="Quem é esse pokemon?"
                        />
                    </div>
                    <div className={`absolute top-[30px] right-[10px] p-4 z-10 text-white font-bold text-2xl rounded-full ${scoreClass()}`}>
                        <h2>{score}</h2>
                    </div>
                </div>
                <div className="grid gap-2 md:grid-cols-2 md:w-1/2 w-full mb-6">
                    {options.map((option, index) => (
                        <div className="p-2 text-center" key={index}>
                            <button
                                className={`w-full h-[50px] md:h-[50px] py-2 px-4 rounded bg-blue-500 text-white ${selectedOption === option && !revealed ? 'animate-blink' : ''} ${revealed ? (option === correctOption ? 'bg-green-500' : (option === selectedOption ? 'bg-red-500' : '')) : ''}`}
                                onClick={() => handleOptionClick(option)}
                                disabled={disableOptions}
                            >
                                {option}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PokeWho;
