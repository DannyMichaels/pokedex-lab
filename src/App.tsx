import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap styles
import Pokemon from './components/Pokemon';

import { useEffect, useState } from 'react';
import { IPokemon } from './types/Pokemon';
import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

function App() {
  const [pokeData, setPokeData] = useState<IPokemon>({} as IPokemon);
  const [searchTerm, setSearchTerm] = useState('pikachu');

  useEffect(() => {
    const pokeURL = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
    const makeApiCall = async () => {
      const resp = await axios.get<IPokemon>(pokeURL);
      setPokeData(resp.data);
    };
    makeApiCall();
  }, [searchTerm]);

  return (
    <div className="App">
      <header className="bg-dark d-flex justify-content-between px-5">
        <nav className="navbar navbar-dark">
          <div className="nav">
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
        </nav>
      </header>

      <main className="d-flex justify-content-center align-items-center">
        <section
          id="results"
          className="d-flex justify-content-center flex-wrap col-10">
          <Pokemon pokeData={pokeData} />
        </section>
      </main>
    </div>
  );
}

export default App;
