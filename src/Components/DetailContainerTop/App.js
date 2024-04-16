import * as React from "react";
import pokemonSpritesSpread from "../../Utils/pokemonSprites";
import { useState } from "react";

function Card({ children }) {
    return (
        <div className="card flex flex-col w-full max-w-[400px] mx-auto">
            <div className="box-border flex relative flex-col grow shrink-0 p-5 w-full max-h-[400px] overflow-auto shadow-md">
                <section className="box-border flex relative flex-col grow shrink-0 self-stretch p-5 w-full h-auto">
                    {children}
                </section>
            </div>
        </div>
    );
}



function DetailContainerTop({ image, name, baseXP, moves, sprites }) {
    const [showFront, setShowFront] = useState(true);
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setShowFront(!showFront);
    };

    const handleToggleExpand = () => {
        setExpanded(!expanded);
    };

    const spritesData = pokemonSpritesSpread(sprites); // Use a função pokemonSpritesSpread para obter as imagens front e back
    const spriteVariants = showFront ? spritesData.frontImages : spritesData.backImages; // Obtenha as imagens com base em showFront

    // console.log(moves);

    const spriteElements = Object.entries(spriteVariants).map(([variantKey, variantValue]) => (
        variantValue ?
            <img
                key={variantKey}
                src={variantValue}
                alt={showFront ? 'Front Sprite' : 'Back Sprite'}
                className="h-16 w-auto cursor-pointer"
                onClick={handleClick}
            /> : null
    ));

    // Extrair apenas os nomes dos movimentos
    const moveNames = moves.map(move => move.move.name);

    // Limitar a quantidade de movimentos exibidos
    const displayMoveNames = expanded ? moveNames : moveNames.slice(0, 20);
    const hasMoreMoves = moveNames.length > 5;

    return (
        <main className="box-border flex relative flex-col shrink-0 mt-5 mb-2.5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <Card>
                    <div>
                        <div className="box-border flex relative flex-col shrink-0 h-[185px]">
                            <img src={image} alt={name} className="h-48 w-auto mx-auto" />
                        </div>
                        <div className="box-border flex relative flex-col shrink-0 mt-5 h-[71px]">
                            <h2 className="mt-5 text-2xl text-center font-bold text-blue-700">{name}</h2>
                            <p className="text-center text-gray-600">Base XP: {baseXP}</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="box-border flex relative flex-col grow shrink-0 h-auto">
                        <h2 className="mb-2 font-bold text-lg">Moves</h2>

                        <div className="mt-5 flex flex-wrap justify-center gap-2">
                            {displayMoveNames.map((moveName, index) => (
                                <p key={index}>{moveName}</p>
                            ))}
                            {hasMoreMoves && (
                                <button className="text-blue-500 hover:text-blue-700" onClick={handleToggleExpand}>
                                    {expanded ? "Show less" : "Show more"}
                                </button>
                            )}
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="box-border flex relative flex-col grow shrink-0 h-auto">
                        <div className="mt-5 flex flex-wrap justify-center gap-2">
                            {spriteElements}
                        </div>
                    </div>
                </Card>
            </div>
        </main>
    );
}

export default DetailContainerTop;
