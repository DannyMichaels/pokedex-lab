import { useEffect, useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap styles
import './App.css';

// components
import Pokemon from './components/Pokemon';
import Search from './components/Search';

// utils
import { IPokemon } from './types/Pokemon';
import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

function App() {
  const [pokeData, setPokeData] = useState<IPokemon>({} as IPokemon);
  const [searchTerm, setSearchTerm] = useState('pikachu');

  useEffect(() => {
    const pokeURL = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
    const getPokemon = async () => {
      const resp = await axios.get<IPokemon>(pokeURL);
      setPokeData(resp.data);
    };
    getPokemon();
  }, [searchTerm]);

  const changeSetTerm = useCallback((value) => {
    setSearchTerm(value);
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

        <div>
          <Search setSearchTerm={changeSetTerm} />
        </div>
      </header>

      <main className="d-flex justify-content-center align-items-center">
        <section
          id="results"
          className="d-flex justify-content-center flex-wrap col-10">
          <Pokemon pokeData={pokeData} />
        </section>
      </main>
    </>
  );
}

export default App;
