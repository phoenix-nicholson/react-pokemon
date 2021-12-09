import React from 'react';
import './control.css';

export default function Control({ query, setQuery, setLoading, order, setOrder }) {
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
      <select value={order} onInput={(e) => setOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <button onClick={() => setLoading(true)}>Search</button>
    </div>
  );
}
