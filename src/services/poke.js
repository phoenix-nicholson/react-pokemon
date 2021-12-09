export async function getPokemon(query, order, page) {
  const param = new URLSearchParams();
  param.set('pokemon', query);
  param.set('sort', 'pokemon');
  param.set('direction', order);
  param.set('page', page);
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${param.toString()}`
  );
  const data = await response.json();
  return data;
}
