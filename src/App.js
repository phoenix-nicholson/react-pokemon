import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/poke';
import Control from './components/controls/Controls';
import PokeList from './components/PokeList/PokeList';
function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, order, page);
      setPokemon([...data.results]);
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, order, page]);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Control
        query={query}
        setQuery={setQuery}
        setLoading={setLoading}
        order={order}
        setOrder={setOrder}
      />
      {loading && <span className="loader"></span>}
      {!loading && <PokeList pokemon={pokemon} setLoading={setLoading} setPage={setPage} />}
    </div>
  );
}

export default App;
