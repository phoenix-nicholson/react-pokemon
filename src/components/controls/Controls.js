import React from 'react';
import './control.css';

export default function Control({
  query,
  setQuery,
  setLoading,
  order,
  setOrder,
  type,
  selectedType,
  setSelectedType,
}) {
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

      <select value={order} onInput={(e) => setOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <select value={selectedType} onInput={(e) => setSelectedType(e.target.value)}>
        <option value="all">All</option>
        {type.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}
