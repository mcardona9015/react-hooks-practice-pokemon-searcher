import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState(null);
  const [query, setQuery] = useState("");
  console.log("pokemon: ", pokemon);

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((response) => response.json())
      .then(setPokemon);
  }, []);

  function addPokemon(newPokemon) {
    const newPokemonList = [...pokemon];
    newPokemonList.unshift(newPokemon);
    setPokemon(newPokemonList);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search query={query} setQuery={setQuery} />
      <br />
      {pokemon ? <PokemonCollection pokemon={pokemon} query={query} /> : null}
    </Container>
  );
}

export default PokemonPage;
