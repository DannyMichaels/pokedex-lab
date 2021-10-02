import { useEffect, useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap styles
import './App.css';

// components
import Pokemon from './components/Pokemon';
import Search from './components/Search';

// utils
import { IPokemon } from './types/Pokemon';
import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

const getAllPokemon = async () => {
  const pokeURL = `${BASE_URL}/pokemon?limit=20`;
  const resp = await axios.get<any>(pokeURL); //array of pokemon

  const pokemonData: IPokemon[] = resp.data.results;

  return pokemonData;
};

const getOnePokemon = async (searchTerm: string, searchCategory: string) => {
  const pokeURL = `${BASE_URL}/${searchCategory}/${searchTerm}`;
  const resp = await axios.get<IPokemon>(pokeURL); // one object
  return resp.data;
};

function App() {
  const [pokeData, setPokeData] = useState<IPokemon>({} as IPokemon); // object
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('pokemon');
  const [allPokemon, setAllPokemon] = useState<IPokemon[] | []>([]); // array of pokemons or empty.

  useEffect(() => {
    const fetchAllPokemonOnMount = async () => {
      const allPokemonResult = await getAllPokemon();
      setAllPokemon(allPokemonResult);
    };
    fetchAllPokemonOnMount();
  }, []);

  useEffect(() => {
    // check for if no search term so it doesn't run on mount
    if (!searchTerm) return;

    const fetchOnePokemon = async () => {
      const onePokemon = await getOnePokemon(searchTerm, searchCategory);
      setPokeData(onePokemon);
    };

    fetchOnePokemon();
  }, [searchTerm, searchCategory]);

  const changeSearchTerm = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const changeSearchCategory = useCallback((value: string) => {
    setSearchCategory(value);
  }, []);

  const flushPokeData = useCallback(() => {
    // @ts-ignore
    setPokeData({});
  }, []);

  return (
    <>
      <header
        className="bg-dark d-flex justify-content-between px-5
      nav d-flex align-items-center
      ">
        <div>
          <a href="/" className="navbar-brand d-flex align-items-center">
            <img
              src="https://www.freeiconspng.com/uploads/pokeball-transparent-png-2.png"
              width="55"
              height="55"
              className="d-inline-block align-top m-2 d-inline"
              alt="Pokéball"
            />
            <span className="navbar-text text-white font-weight-bold">
              Pokédex
            </span>
          </a>
        </div>

        <Search
          setSearchTerm={changeSearchTerm}
          setSearchCategory={changeSearchCategory}
          searchCategory={searchCategory}
        />
      </header>

      <main className="d-flex justify-content-center align-items-center">
        {searchTerm ? (
          <section
            id="results"
            className="d-flex justify-content-center flex-wrap col-10">
            <Pokemon pokeData={pokeData} flushPokeData={flushPokeData} />
          </section>
        ) : (
          <ul className="all-pokemon-list">
            {allPokemon.map((pokemon, key) => (
              <button
                className="pokemon-list-item bg-white rounded p-2"
                key={key}
                onClick={() => setSearchTerm(pokemon.name)}>
                {pokemon.name}
              </button>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

export default App;
