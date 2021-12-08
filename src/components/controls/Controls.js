import React from 'react';
import './control.css';

export default function Control({ query, setQuery, setLoading }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokettomonsuta"
        value={query}
        onInput={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button onClick={() => setLoading(true)}>Search</button>
    </div>
  );
}
