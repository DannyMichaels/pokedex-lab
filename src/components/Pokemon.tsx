import { IPokemon } from './../types/Pokemon';

type PokemonProps = {
  pokeData: IPokemon;
};

export default function Pokemon({ pokeData }: PokemonProps) {
  const { name, sprites, weight, height } = pokeData;

  return <>Pokemon</>;
}
