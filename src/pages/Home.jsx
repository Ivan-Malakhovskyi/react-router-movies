import axios from 'axios';
import {
  HomeTitle,
  ListMoovie,
  SectionHome,
  StyledLinkItem,
} from 'components/home/Home.styled';
import { useEffect, useState } from 'react';

const Home = () => {
  const API_KEY = 'fd98539c24110fb9af262d45db0a0c64';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';

  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const fetchCollectionFilms = async () => {
      try {
        const response = await axios.get(
          `/trending/all/day?api_key=${API_KEY}`
        );
        const { results } = response.data;
        console.log(results);
        setFetchData(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCollectionFilms();
  }, []);

  return (
    <SectionHome>
      <HomeTitle>Trending today</HomeTitle>
      <ListMoovie>
        {fetchData.map(({ id, original_title }) => (
          <li key={id}>
            <StyledLinkItem to={`/movies/${id}`}>
              {original_title}
            </StyledLinkItem>
          </li>
        ))}
      </ListMoovie>
    </SectionHome>
  );
};

export default Home;
