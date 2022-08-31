import React from "react";
import { IPokemon } from "./types";

const pokemons: IPokemon[] = [
  {
    id: 1,
    nome: "bulbasaur",
    kilos: 6.9,
    pokemon: true,
    categoria: "semente",
  },
  {
    id: 2,
    nome: "charmander",
    kilos: 8.5,
    pokemon: true,
    categoria: "lagarto",
  },
  {
    id: 3,
    nome: "charizard",
    kilos: 95.5,
    pokemon: true,
    categoria: "chama",
  },
  {
    id: 4,
    nome: "ash",
    pokemon: false,
    categoria: "treinador",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemons</h1>
      </header>
      {pokemons.map((item) => (
        <div key={item.id}>
          <h3>{item.nome}</h3>
          <p>Peso: {item?.kilos?.toString()}Kg</p>
          <p>{item.pokemon}</p>
          <p>Categoria: {item.categoria}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
