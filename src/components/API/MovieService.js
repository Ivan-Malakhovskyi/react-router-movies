import axios from 'axios';
export const movieService = async searchMovie => {
  const API_KEY = 'fd98539c24110fb9af262d45db0a0c64';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';

  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${searchMovie}`
  );
  return data;
};
