/* import { useRef } from 'react'; */
/**
 * useRef
 * Te permite crear una referencia a un elemento del DOM.
 * Es un hook que te permite crear una referencia mutable que persiste
 * durante todo el ciclo de vida de tu componente. Es muy util para guardar
 * cualquier valor que puedas mutar: como un identificador, como un
 * elemento del DOM, como un contador, ...etc y que cada vez que cambia no
 * vuelve a rederizar al componente. Por ejemplo el useState si re-renderiza
 * el componente cada que cambia su valor.
*/

import { useCallback, useState } from 'react';

import debounce from 'just-debounce-it';

import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';

import './App.css';

function App () {
  const { search, updateSearch, error } = useSearch();
  const [sort, setSort] = useState();
  const { movies, loading, getMovies } = useMovies({ search, sort });

  const debounceGetMovies = useCallback(
    debounce(search => {
      getMovies({ search });
    }, 500)
    , [getMovies]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (error) return;
    getMovies({ search });

    // Con vanilla js
    /* const { query } = Object.fromEntries(new window.FormData(event.target)); */
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    // getMovies({ search: newSearch });
    debounceGetMovies(newSearch);
  };

  return (
    <div className='page'>
      <header>
        <h1>Movies Finder</h1>

        <form className='form' onSubmit={handleSubmit}>

          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            onChange={handleChange}
            name='query' type='text'
            placeholder='Matrix, Avengers ...'
            value={search}
          />

          <input
            type='checkbox'
            onChange={handleSort}
            checked={sort}
          />

          <button type='submit'>Search</button>

        </form>

        {error && <p className='error-card'>{error}</p>}

      </header>

      <main>
        {
          loading ? <p>Loading...</p> : <Movies movies={movies} />
        }
      </main>

    </div>
  );
}

export default App;
