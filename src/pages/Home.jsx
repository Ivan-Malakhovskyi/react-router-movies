import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState, useRef } from 'react';

import { HomeTitle, SectionHome } from 'components/home/Home.styled';

import { Loader } from 'components/loader/Loader';
import { ErrorMsg } from 'components/layout/Layout.styled';
import { fetchCollectionFilms } from 'components/API/movieService';
import { MovieList } from 'components/movies/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [requestCancelled, setRequestCancelled] = useState(false);

  const controller = useRef();

  useEffect(() => {
    const getCollectionFilm = async () => {
      setRequestCancelled(false);

      if (controller.current) {
        controller.current.abort();
      }

      controller.current = new AbortController();

      try {
        setLoading(true);
        setError(false);

        const { results } = await fetchCollectionFilms(controller);
        setMovies(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
          console.log(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    getCollectionFilm();
  }, []);

  return (
    <SectionHome>
      <HomeTitle>Trending today</HomeTitle>

      {loading && <Loader />}
      {error && !loading && requestCancelled && (
        <ErrorMsg>
          ❌ Something went wrong,try reload page{' '}
          {toast.error('Ooops, something went wrong')}
        </ErrorMsg>
      )}

      {movies && movies.length > 0 && <MovieList movies={movies} />}
      <Toaster />
    </SectionHome>
  );
};

export default Home;
