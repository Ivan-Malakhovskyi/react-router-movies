import { useState } from 'react';
import { BtnSearch, Input, Form } from './Movies.styled';
import toast, { Toaster } from 'react-hot-toast';
import { useQueryParams } from 'components/hooks/useQueryParams';
import { ErrorMsg } from 'components/layout/Layout.styled';
import { MovieList } from './MoviesList';
import { useLocation } from 'react-router-dom';

export const SearchMovie = ({ movies }) => {
  const [serched] = useState(false);
  const { updateQuery, handleFormSubmit } = useQueryParams();
  const location = useLocation();
  console.log(location);

  return (
    <>
      <div>
        <Form onSubmit={handleFormSubmit}>
          <Input
            type="text"
            name="query"
            onChange={updateQuery}
            placeholder="Search movies"
          />
          <BtnSearch type="submit">Search</BtnSearch>
          <Toaster />
        </Form>
      </div>

      {movies.length > 0 && <MovieList movies={movies} />}
      {serched && movies.length === 0 && (
        <ErrorMsg>
          No movies found 😥
          {toast.error('Sorry such information not found')}
        </ErrorMsg>
      )}
    </>
  );
};
