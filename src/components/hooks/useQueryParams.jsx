import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get('query') ?? '';
  const API_KEY = 'fd98539c24110fb9af262d45db0a0c64';

  const updateQuery = () => {
    const newParams = searchMovie !== '' ? { query: searchMovie } : {};
    setSearchParams(newParams);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const movieSearch = form.elements.query.value;
    if (!movieSearch) {
      toast.error('Please input movie title');
      return;
    }
    searchParams.set('query', movieSearch);
    setSearchParams(searchParams);
    form.reset();

    //! При таком записі не потрібно
    //!прописувати параметри, які не змінююься
  };

  return { searchMovie, updateQuery, handleFormSubmit, API_KEY };
};
