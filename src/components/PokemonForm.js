import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPokemon }) {
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [frontImage, setFrontImage] = useState("");
  const [backImage, setBackImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        hp: parseInt(hp),
        sprites: { back: backImage, front: frontImage },
      }),
    })
      .then((response) => response.json())
      .then(addPokemon);
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            onChange={(e) => setName(e.target.value)}
            value={name}
            label="Name"
            placeholder="Name"
            name="name"
          />
          <Form.Input
            fluid
            onChange={(e) => setHp(e.target.value)}
            value={hp}
            label="hp"
            placeholder="hp"
            name="hp"
          />
          <Form.Input
            onChange={(e) => setFrontImage(e.target.value)}
            value={frontImage}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={(e) => setBackImage(e.target.value)}
            value={backImage}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
