import React from 'react';

function CarouselTailwind({ revealedPokemons }) {
    if (Object.keys(revealedPokemons).length < 10) return null;

    // Determina se deve aplicar uma animação mais lenta com base no tamanho da tela ou outra condição
    const isMobile = window.innerWidth < 768;

    return (
        <div className="carousel-container relative w-full overflow-hidden">
            <ul className={`carousel-track flex w-auto min-w-full ${isMobile ? 'animate-infinite-scroll-slow' : 'animate-infinite-scroll'}`}>
                {/* Duplica os elementos para suportar a animação de scroll infinita */}
                {Object.keys(revealedPokemons).map((key) => (
                    <li key={key} className="carousel-item mx-8 flex-shrink-0">
                        <img src={revealedPokemons[key].sprite} alt={revealedPokemons[key].name} className="h-auto max-w-none" />
                    </li>
                ))}
                {/* Repete os elementos para criar efeito de loop infinito */}
                {Object.keys(revealedPokemons).map((key) => (
                    <li key={key + 'duplicate'} className="carousel-item mx-8 flex-shrink-0">
                        <img src={revealedPokemons[key].sprite} alt={revealedPokemons[key].name} className="h-auto max-w-none" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CarouselTailwind;
