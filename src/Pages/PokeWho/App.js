import React, { useContext, useEffect, useState } from 'react';
import { usePokemonsContext } from '../../Contextos/Pokemons';
// import CustomCarousel from '../../Components/Carousel/App';
import classNames from 'classnames';
import PokemonImage from '../../Components/PokemonImage/App';
import ScoreDisplay from '../../Components/ScoreDisplay/App';
import PokemonOptions from '../../Components/PokemonOptions/App';
import { shuffleArray } from '../../Utils/util';
import Loading from '../../Components/Loading/App';
import CarouselTailwind from '../../Components/CarouselTailwind/App';
import { ScoreContext, ScoreProvider } from '../../Contextos/Score';

function PokeWho() {
    const { pokemons } = usePokemonsContext();
    const { scores, postScore } = useContext(ScoreContext);
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
            if (scores.length >= 3) {
                const sortedScores = [...scores].sort((a, b) => b.score - a.score);
                const top3Scores = sortedScores.slice(0, 3);
                setUserHighScores(top3Scores);
                setLoadingScores(false);
            } else {
                console.log('O número mínimo de 3 scores não foi atingido.');
                setLoadingScores(false);
            }
        };

        if (pokemons && pokemons.length > 0) {
            fetchScores();
            initGame();
        }
    }, [pokemons, scores]);

    const initGame = () => {
        setScore(0); // Reseta o score
        setRevealedPokemons({}); // Limpa os pokémons revelados
        setUsedPokemons(new Set()); // Reseta o conjunto de pokémons usados
        setSelectedOption(null); // Limpa a opção selecionada
        setRevealed(false); // Garante que nenhum Pokémon esteja revelado
        setDisableOptions(false); // Habilita as opções novamente
        pickRandomPokemon(); // Escolhe um novo Pokémon aleatório
    };


    const pickRandomPokemon = () => {
        if (pokemons && pokemons.length > 0) {
            if (usedPokemons.size >= pokemons.length) {
                // Todos os Pokémon foram usados, o usuário "ganhou" o jogo
                console.log("Parabéns! Todos os Pokémon foram adivinhados.");
                postScore(score);  // Posta a pontuação final
                initGame();        // Pode reiniciar o jogo ou redirecionar para outra tela
            } else {
                let randomPokemon;
                do {
                    const randomIndex = Math.floor(Math.random() * pokemons.length);
                    randomPokemon = pokemons[randomIndex];
                } while (usedPokemons.has(randomPokemon.name));
                setPokemon(randomPokemon);
                setCorrectOption(randomPokemon.name);
                prepareOptions(randomPokemon);
                setUsedPokemons(new Set([...usedPokemons, randomPokemon.name]));
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
                const updatedPokemons = updateRevealedPokemons(pokemon, revealedPokemons);
                setScore(score + 1);
                setRevealedPokemons(updatedPokemons);

                setTimeout(() => {
                    if (usedPokemons.size < pokemons.length - 1) {
                        pickRandomPokemon();
                    } else {
                        console.log("Último Pokémon acertado. Parabéns!");
                        postScore(score + 1); // Posta a pontuação final
                        initGame(); // Reinicia o jogo
                    }
                    setRevealed(false);
                    setDisableOptions(false);
                }, 500);
            } else {
                postScore(score); // Posta a pontuação
                setTimeout(() => {
                    initGame(); // Reinicia o jogo após um pequeno delay para permitir que ações assíncronas concluam
                }, 500);
            }
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
        <ScoreProvider>
            <div className="main-container mb-16">
                {loadingScores ? (
                    <Loading />
                ) : (
                    <div>
                        <CarouselTailwind revealedPokemons={revealedPokemons} />
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
        </ScoreProvider>
    );
}

export default PokeWho;
