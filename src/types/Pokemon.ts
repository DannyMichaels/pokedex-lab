export type TSprites = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
};

export interface IPokemon {
  name: string;
  abilities: [];
  sprites: TSprites;
  species: object;
  stats: [];
  height: number;
  weight: number;
}
