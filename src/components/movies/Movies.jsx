import { useEffect, useState } from 'react';
import { SectionSearchMovie } from './Movies.styled';
import { movieService } from 'components/API/MovieService';
import { SearchMovie } from './SearchMovie';
import { useQueryParams } from 'components/hooks/useQueryParams';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { searchMovie } = useQueryParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { results } = await movieService(searchMovie);
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovie();
  }, [searchMovie]);

  return (
    <>
      {' '}
      <SectionSearchMovie>
        <SearchMovie movies={movies} />
      </SectionSearchMovie>
    </>
  );
};

export default Movies;
