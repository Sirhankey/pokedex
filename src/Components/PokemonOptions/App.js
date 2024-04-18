import React from 'react';

const PokemonOptions = ({ options, handleOptionClick, selectedOption, revealed, correctOption, disableOptions }) => {
    // Função para capitalizar a primeira letra de cada palavra
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className="grid gap-4 md:grid-cols-2 md:w-1/2 w-full mb-6">
            {options.map((option, index) => (
                <button
                    key={index}
                    className={`p-2 text-center w-4/5 md:w-full mx-auto h-[50px] md:h-[50px] py-2 px-4 rounded-full bg-blue-500 text-white text-lg ${selectedOption === option && !revealed ? 'animate-blink' : ''} ${revealed ? (option === correctOption ? 'bg-green-500' : (option === selectedOption ? 'bg-red-500' : '')) : ''}`}
                    onClick={() => handleOptionClick(option)}
                    disabled={disableOptions}
                    style={{
                        fontSize: '1.25rem',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 1), 0 1px 3px rgba(0, 0, 0, 0.08)'
                    }}
                >
                    {capitalizeFirstLetter(option)}
                </button>
            ))}
        </div>
    );
};

export default PokemonOptions;
