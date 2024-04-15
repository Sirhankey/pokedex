import * as React from "react";
import pokemonTypes from "../../Utils/util";
import PokemonType from "../PokemonType/App";


function Types() {
  return (
    <section className="box-border flex relative flex-row flex-wrap shrink-0 gap-5 self-stretch p-5 mt-5 w-auto bg-stone-300">
      {pokemonTypes.map(({ src, alt, type, className }) => (
        <PokemonType key={type} src={src} alt={alt} className={className} type={type}/>
      ))}
    </section>
  );
}

export default Types;
