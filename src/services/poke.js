export async function getPokemon(query) {
  const param = new URLSearchParams();
  param.set('pokemon', query);
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${param.toString()}`
  );
  const data = await response.json();
  return data;
}
