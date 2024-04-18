import React, { useEffect, useState } from 'react';
import { usePokemonsContext } from '../../Contextos/Pokemons';
import CustomCarousel from '../../Components/Carousel/App';
import { useRankingContext } from '../../Contextos/Ranking';
import classNames from 'classnames';
import PokemonImage from '../../Components/PokemonImage/App';
import ScoreDisplay from '../../Components/ScoreDisplay/App';
import PokemonOptions from '../../Components/PokemonOptions/App';
import { shuffleArray } from '../../Utils/util';
import Loading from '../../Components/Loading/App';

function PokeWho() {
    const { pokemons } = usePokemonsContext();
    const { postScore, getUserScores } = useRankingContext();
    const [userHighScores, setUserHighScores] = useState([]);
    const [pokemon, setPokemon] = useState(null);
    const [score, setScore] = useState(0);
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [revealed, setRevealed] = useState(false);
    const [disableOptions, setDisableOptions] = useState(false);
    const [correctOption, setCorrectOption] = useState(null);
    const [revealedPokemons, setRevealedPokemons] = useState({});
    const [usedPokemons, setUsedPokemons] = useState(new Set());
    const [loadingScores, setLoadingScores] = useState(true);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                const userScores = await getUserScores();
                console.log('userScores!!!! =>', userScores);
                if (Object.keys(userScores ?? {}).length >= 3) {
                    const sortedScores = Object.values(userScores).sort((a, b) => b.score - a.score);
                    const top3Scores = sortedScores.slice(0, 3);
                    setUserHighScores(top3Scores);
                } else {
                    console.log('O número mínimo de 3 scores não foi atingido.');
                }
            } catch (error) {
                console.error('Error fetching user high scores:', error);
            } finally {
                setLoadingScores(false);
            }
        };

        if (pokemons && pokemons.length > 0) {
            fetchScores();
            initGame();
        }
    }, [pokemons]); // Ensure pokemons are loaded before fetching scores

    const initGame = () => {
        setScore(0);
        setRevealedPokemons({});
        setUsedPokemons(new Set());
        pickRandomPokemon();
    };

    const pickRandomPokemon = () => {
        if (pokemons && pokemons.length > 0) {
            let randomPokemon;
            do {
                const randomIndex = Math.floor(Math.random() * pokemons.length);
                randomPokemon = pokemons[randomIndex];
            } while (usedPokemons.has(randomPokemon.name) && usedPokemons.size < pokemons.length);
            if (randomPokemon) {
                setPokemon(randomPokemon);
                setCorrectOption(randomPokemon.name);
                prepareOptions(randomPokemon);
                setUsedPokemons(new Set(usedPokemons).add(randomPokemon.name));
            }
        }
    };

    const prepareOptions = (pokemon) => {
        let options = [pokemon.name];
        while (options.length < 4) {
            const optionIndex = Math.floor(Math.random() * pokemons.length);
            const optionPokemon = pokemons[optionIndex];
            if (!options.includes(optionPokemon.name)) {
                options.push(optionPokemon.name);
            }
        }
        shuffleArray(options);
        setOptions(options);
    };


    const handleOptionClick = (option) => {
        if (revealed) return;
        setSelectedOption(option);
        setDisableOptions(true);
        setRevealed(true);
        setTimeout(() => {
            if (option === pokemon.name) {
                setRevealedPokemons(updateRevealedPokemons(pokemon, revealedPokemons));
                setScore(score + 1);
                pickRandomPokemon();
            } else {
                postScore(score);
                initGame();
            }
            setRevealed(false);
            setDisableOptions(false);
        }, 3000);
    };

    const scoreClass = () => {
        return classNames({
            'bg-gray-700': score < 15,
            'bg-blue-500': score >= 15 && score < 30,
            'bg-green-500': score >= 30 && score < 45,
            'bg-yellow-400': score >= 45 && score < 60,
            'bg-orange-500': score >= 60 && score < 75,
            'bg-red-500': score >= 75 && score < 90,
            'bg-pink-500': score >= 90 && score < 105,
            'bg-purple-500': score >= 105 && score < 120,
            'bg-indigo-500': score >= 120 && score < 135,
            'bg-teal-500': score >= 135 && score < 150,
            'bg-gold': score >= 150,
        });
    };

    const updateRevealedPokemons = (pokemon, currentRevealedPokemons) => {
        const updatedRevealedPokemons = { ...currentRevealedPokemons };
        updatedRevealedPokemons[pokemon.name] = {
            name: pokemon.name,
            sprite: pokemon.sprites.front_default
        };
        return updatedRevealedPokemons;
    };

    return (
        <div className="main-container mb-16">
            {loadingScores ? (
                <Loading />
            ) : (
                <div>
                    <CustomCarousel revealedPokemons={revealedPokemons} />
                    <div className="flex items-center justify-center flex-col h-80vh w-screen">
                        <h1 className="text-3xl font-bold mt-2">Quem é esse Pokémon?</h1>
                        <div className="relative flex items-center justify-center">
                            <PokemonImage pokemon={pokemon} revealed={revealed} />
                            <ScoreDisplay score={score} scoreClass={scoreClass()} userHighScores={userHighScores} />
                        </div>
                        <PokemonOptions options={options} handleOptionClick={handleOptionClick} selectedOption={selectedOption} revealed={revealed} correctOption={correctOption} disableOptions={disableOptions} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default PokeWho;
