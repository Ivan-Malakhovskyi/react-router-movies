import { useEffect, useRef, useState } from 'react';
import { SectionSearchMovie } from './Movies.styled';
import { fetchInput } from 'components/API/movieService';
import { SearchMovie } from './SearchMovie';
import { useQueryParams } from 'components/hooks/useQueryParams';
import { Loader } from 'components/loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { ErrorMsg } from 'components/layout/Layout.styled';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const { searchMovie } = useQueryParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchFailed, setSearchFailed] = useState(false);
  const [isRequestCancelled, setIsRequestCancelled] = useState(false);

  const controller = useRef();

  useEffect(() => {
    const fetchMovie = async () => {
      setIsRequestCancelled(false);

      if (controller.current) {
        controller.current.abort();
      }

      controller.current = new AbortController();

      try {
        setLoading(true);
        setError(false);

        const { results } = await fetchInput(searchMovie, controller);

        if (results.length === 0 && searchMovie) {
          setSearchFailed(true);
          toast.error('Such film not found');
        }

        setMovies(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
          console.log(error.message);
        }
      } finally {
        setLoading(false);
        setError(false);
      }
    };
    fetchMovie();
  }, [searchMovie]);

  return (
    <>
      {' '}
      {loading && <Loader />}
      <SectionSearchMovie>
        {movies && <SearchMovie movies={movies} />}
        {searchFailed && movies.length === 0 && !loading && (
          <ErrorMsg>Not found, please try something else 😉</ErrorMsg>
        )}

        {error && !loading && !isRequestCancelled && (
          <ErrorMsg>
            ❌ Something went wrong,try reload page
            {toast.error('Ooops, something went wrong')}
          </ErrorMsg>
        )}
        <Toaster />
      </SectionSearchMovie>
    </>
  );
};

export default Movies;
