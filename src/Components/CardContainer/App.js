import PokemonCard from "../Card/App";

function PokemonCardContainer({ pokemon }) {
    return (
        <main className="mx-5">
            <div className="flex flex-wrap gap-5 max-md:flex-col max-md:gap-0">
                <div className="w-full md:w-1/3">
                    <PokemonCard {...pokemon} />
                </div>
            </div>
        </main>
    );
}

export default PokemonCardContainer;