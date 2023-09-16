import { Outlet } from 'react-router-dom';
import {
  Header,
  StyledLink,
  Nav,
  BaseContainer,
  ListMainLink,
  StyledLinkWrapper,
} from './Layout.styled';

export const Layout = () => {
  return (
    <BaseContainer>
      <Header>
        <Nav>
          <ListMainLink>
            <li>
              <StyledLinkWrapper>
                <StyledLink to="/">Home</StyledLink>
              </StyledLinkWrapper>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </ListMainLink>
        </Nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </BaseContainer>
  );
};
