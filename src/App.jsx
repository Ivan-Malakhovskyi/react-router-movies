import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import { Layout } from './components/layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./components/movies/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Cast = lazy(() => import('./components/cast/Cast'));
const Reviews = lazy(() => import('./components/reviews/Reviews '));

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
