import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'components/movies/Movies';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Cast from 'components/cast/Cast';
import { Reviews } from 'components/reviews/Reviews ';
import { GlobalStyle } from 'GlobalStyle';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
