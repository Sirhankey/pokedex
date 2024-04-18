import React from 'react';

function CustomCarousel({ revealedPokemons }) {
    if (Object.keys(revealedPokemons).length < 10) return null;

    return (
        <div
            x-data="{}"
            x-init="$nextTick(() => {
                let ul = $refs.logos;
                ul.insertAdjacentHTML('afterend', ul.outerHTML);
                ul.nextSibling.setAttribute('aria-hidden', 'true');
            })"
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
            <ul x-ref="logos" className="flex w-full items-center justify-center md:justify-center [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {Object.keys(revealedPokemons).map((key) => (
                    <li key={key}>
                        <img src={revealedPokemons[key].sprite} alt={revealedPokemons[key].name} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CustomCarousel;
