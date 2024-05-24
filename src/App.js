import { pokemons } from "./utils/arrays";
import "./App.css";
import FightContent from "./components/fightContent";
import { useState } from 'react';
import SelectPokemonBox from "./components/selectPokemonBox";

function App() {
  const [user, setUser] = useState();

  const handleSelectPokemon = (e) => {
    pokemons.map((pokemon) => {
      if (pokemon?.name === e.target.alt) {
        setUser(pokemon);
      }
    });
  }

  const restart = () => {
    setUser(undefined)
  }

  return (
    <div className="App">
      <SelectPokemonBox name={user?.name} selectPokemon={handleSelectPokemon} />
      <FightContent user={user} restart={restart} key={new Date().getTime()}/>
    </div>
  );
}

export default App;
