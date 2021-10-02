import { useEffect } from 'react';
import { IPokemon } from './../types/Pokemon';

type PokemonProps = {
  pokeData: IPokemon;
  flushPokeData: Function;
};

export default function Pokemon({ pokeData, flushPokeData }: PokemonProps) {
  const { name, sprites, weight, height } = pokeData;

  useEffect(() => {
    return () => {
      // @ts-ignore
      flushPokeData(); // set pokeData to empty object when user leaves this component
    };
  }, [flushPokeData]);

  if (Object.keys(pokeData).length <= 0) {
    return <></>;
  }

  return (
    <div>
      <ul>
        <h1 className="pokeName">Name: {name}</h1>
        {height ? (
          <>
            {' '}
            <li>Height: {height}</li>
            <li> Weight: {weight}</li>
          </>
        ) : (
          JSON.stringify(Object.entries(pokeData))
        )}

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
