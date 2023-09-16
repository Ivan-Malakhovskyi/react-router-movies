import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { BtnSearch, Input, SectionSearchMovie, Form } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [seatchParams, setSearchParams] = useSearchParams();
  const [serched, setSearched] = useState(false);
  const searchMovie = seatchParams.get('query') ?? '';
  console.log(searchMovie);
  const API_KEY = 'fd98539c24110fb9af262d45db0a0c64';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';

  const updateQueryString = e => {
    const movieIdValue = e.target.value.trim();
    console.log('updateQueryString  movieIdValue', movieIdValue);
    const newParams = movieIdValue !== '' ? { query: movieIdValue } : {};
    console.log('updateQueryString  newParams', newParams);
    setSearchParams(newParams);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    console.log(form);
    setSearchParams({ query: searchMovie });
    form.reset();
  };

  useEffect(() => {
    if (searchMovie === '') return;
    const handleSearchMovies = async () => {
      try {
        const {
          data: { results },
        } = await axios.get(
          `/search/movie?api_key=${API_KEY}&query=${searchMovie}`
        );

        setMovies(results);
        setSearched(true);
        console.log(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    handleSearchMovies();
  }, [searchMovie]);

  return (
    <SectionSearchMovie>
      <div>
        <Form onSubmit={handleFormSubmit}>
          <Input type="text" name="query" onChange={updateQueryString} />
          <BtnSearch type="submit">Search</BtnSearch>
        </Form>
      </div>

      {movies.length > 0 && (
        <ul>
          {movies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
      {serched && movies.length === 0 && <p>No movies found 😥</p>}
    </SectionSearchMovie>
  );
};

export default Movies;
