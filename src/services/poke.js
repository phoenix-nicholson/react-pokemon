export async function getPokemon(query, order, page, selectedType) {
  const param = new URLSearchParams();
  param.set('pokemon', query);
  param.set('sort', 'pokemon');
  param.set('direction', order);
  param.set('page', page);

  if (selectedType !== 'all') {
    param.set('type', selectedType);
  }

  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${param.toString()}`
  );
  const data = await response.json();
  return data;
}

export async function getType() {
  const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await response.json();
  return data.map((poketto) => poketto.type);
}
