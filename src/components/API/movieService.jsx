import axios from 'axios';

const API_KEY = 'fd98539c24110fb9af262d45db0a0c64';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchCollectionFilms = async controller => {
  const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`, {
    signal: controller.current.signal,
  });
  return response.data;
};

export const fetchInfoMoovieItem = async (movieId, controller) => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`, {
    signal: controller.current.signal,
  });
  return response;
};

export const fetchInput = async (searchMovie, controller) => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${searchMovie}`,
    { signal: controller.current.signal }
  );

  return data;
};

export const fetchReviews = async (movieId, controller) => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`,
    { signal: controller.current.signal }
  );

  return response.data;
};

export const fetchInfoAboutCast = async (movieId, controller) => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`,
    { signal: controller.current.signal }
  );
  return response.data;
};
