import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const { hp, name, sprites } = pokemon;
  const [front, setFront] = useState(true);

  function flipCard() {
    setFront((front) => !front);
  }
  return (
    <Card>
      <div onClick={flipCard}>
        <div className="image">
          <img src={front ? sprites.front : sprites.back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
