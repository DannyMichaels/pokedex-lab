import { IPokemon } from './../types/Pokemon';

type PokemonProps = {
  pokeData: IPokemon;
};

export default function Pokemon({ pokeData }: PokemonProps) {
  const { name, sprites, weight, height } = pokeData;

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
