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
  const [loading, setLoading] = useState(false);

  const controller = useRef();

  useEffect(() => {
    const fetchMovie = async () => {
      if (controller.current) {
        controller.current.abort();
      }

      controller.current = new AbortController();

      try {
        setLoading(true);

        const { results } = await fetchInput(searchMovie, controller);

        if (results.length === 0 && searchMovie) {
          toast.error('Such film not found');
        }

        setMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
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
        {searchMovie && (
          <ErrorMsg>Not found, please try something else 😉</ErrorMsg>
        )}
        <Toaster />
      </SectionSearchMovie>
    </>
  );
};

export default Movies;
