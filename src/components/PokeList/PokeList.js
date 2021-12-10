import React from 'react';
import './PokeList.css';
import 'animate.css';

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
      <div>
        <div className="poketto-card">
          {pokemon.map((poketto) => (
            <div className="poke" key={poketto.id}>
              {poketto.pokemon}
              <span> Type:{poketto.type_1} </span>
              <img
                className="animate__animated animate__bounceInDown animate__slow"
                src={poketto.url_image}
              ></img>
              <span>HP:{poketto.hp} </span>
              <span>ATK:{poketto.attack} </span>
              <span>DEF:{poketto.defense} </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
