import { ListMoovie, StyledLinkItem } from 'components/home/Home.styled';
import { useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ListMoovie>
        {movies.map(({ id, original_title, name }) => (
          <li key={id}>
            <StyledLinkItem to={`/movies/${id}`} state={{ from: location }}>
              {original_title ? original_title : name}
            </StyledLinkItem>
          </li>
        ))}
      </ListMoovie>
    </>
  );
};

// <ListMoovie>
//   {movies.map(({ title, id }) => (
//     <li key={id}>
//       <StyledLinkItem to={`/movies/${id}`} state={{ from: location }}>
//         {title}
//       </StyledLinkItem>
//     </li>
//   ))}
// </ListMoovie>;
