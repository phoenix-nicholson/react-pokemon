import React from 'react';

export default function PokeList({ pokemon }) {
  return (
    <div>
      {pokemon.map((poketto) => (
        <p key={poketto.id}>{poketto.pokemon}</p>
      ))}
    </div>
  );
}
