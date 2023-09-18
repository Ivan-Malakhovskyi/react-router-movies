import axios from 'axios';
import {
  HomeTitle,
  ListMoovie,
  SectionHome,
  StyledLinkItem,
} from 'components/home/Home.styled';
import { useQueryParams } from 'components/hooks/useQueryParams';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const { API_KEY } = useQueryParams();
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';
  const location = useLocation();

  console.log(location);

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
  }, [API_KEY]);

  return (
    <SectionHome>
      <HomeTitle>Trending today</HomeTitle>

      <ListMoovie>
        {fetchData.map(({ id, original_title }) => (
          <li key={id}>
            <StyledLinkItem to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </StyledLinkItem>
          </li>
        ))}
      </ListMoovie>
    </SectionHome>
  );
};

export default Home;
