import { useEffect, useRef, useState } from 'react';

/**
 * Hook personalizado que valida el input
 * @returns search, updateSearch, error
 */
export function useSearch () {
  const [search, updateSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }

    if (search === '') {
      setError('Debe ingresar un valor para realizar la búsqueda');
      return;
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede búscar una película unicamente con un número');
      return;
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres');
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}
