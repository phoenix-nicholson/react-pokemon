import React from 'react';

export default function PokeList({ pokemon, setLoading, setPage }) {
  const handClick = () => {
    setLoading(true);
    setPage((prevState) => ++prevState);
  };
  const handleClick2 = () => {
    setLoading(true);
    setPage((prevState) => --prevState);
  };

  return (
    <div>
      <button onClick={handleClick2}>Prev Page</button>
      <button onClick={handClick}>Next Page</button>
      {pokemon.map((poketto) => (
        <p key={poketto.id}>
          {poketto.pokemon}
          <span> Type:{poketto.type_1} </span>
          <img src={poketto.url_image}></img>
          <span>HP:{poketto.hp} </span>
          <span>ATK:{poketto.attack} </span>
          <span>DEF:{poketto.defense} </span>
        </p>
      ))}
    </div>
  );
}
