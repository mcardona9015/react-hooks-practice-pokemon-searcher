import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon, query }) {
  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const pokemonCards = filteredPokemon.map((pokemon) => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
  });

  return <Card.Group itemsPerRow={6}>{pokemonCards}</Card.Group>;
}

export default PokemonCollection;
