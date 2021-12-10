import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon, getType } from './services/poke';
import Control from './components/controls/Controls';
import PokeList from './components/PokeList/PokeList';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const [type, setType] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, order, page, selectedType);
      setPokemon([...data.results]);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, order, page, selectedType]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getType();
      setType(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Control
        query={query}
        setQuery={setQuery}
        setLoading={setLoading}
        order={order}
        setOrder={setOrder}
        type={type}
        setSelectedType={setSelectedType}
        selectedType={selectedType}
      />
      {loading && <span className="loader"></span>}
      {!loading && <PokeList pokemon={pokemon} setLoading={setLoading} setPage={setPage} />}
    </div>
  );
}

export default App;
