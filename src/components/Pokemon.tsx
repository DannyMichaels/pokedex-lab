import { useEffect } from 'react';
import { IPokemon } from './../types/Pokemon';
import React from 'react';

type PokemonProps = {
  pokeData: IPokemon;
  flushPokeData: Function;
};

export default function Pokemon({ pokeData, flushPokeData }: PokemonProps) {
  const { name, sprites, weight, height } = pokeData;

  useEffect(() => {
    return () => {
      console.log('onmounted');

      // @ts-ignore
      flushPokeData();
    };
  }, [flushPokeData]);

  if ([...Object.keys(pokeData)].length <= 0) {
    return <></>;
  }

  return (
    <div>
      <ul>
        <h1 className="pokeName">Name: {name}</h1>
        <li>Height: {height}</li>
        <li> Weight: {weight}</li>
        <img
          className="pokeImg"
          src={sprites?.front_shiny ?? ''}
          width="250"
          height="250"
          alt={name}
        />
      </ul>
    </div>
  );
}
