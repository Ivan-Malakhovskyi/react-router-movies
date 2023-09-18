import { ListMoovie, StyledLinkItem } from 'components/home/Home.styled';
// import { useBackLink } from 'components/hooks/useBackLink';
import { useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  // const { location } = useBackLink();
  const location = useLocation();

  return (
    <>
      <ListMoovie>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <StyledLinkItem to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </StyledLinkItem>
          </li>
        ))}
      </ListMoovie>
    </>
  );
};
