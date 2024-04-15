
const PokemonType = ({ src, alt, children, className }) => (
    <div className={`flex gap-4 px-2 py-1.5 text-sm text-white whitespace-nowrap rounded-lg border border-dashed border-white border-opacity-50 z-[1] ${className}`}>
        <img loading="lazy" src={src} alt={alt} className="shrink-0 my-auto w-5 aspect-square" />
        <div className="m-auto">{children}</div>
    </div>
);


export default PokemonType;