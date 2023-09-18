import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  position: relative;

  &:: after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #0077b6;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after {
    transform: scaleX(1); /* Збільшуємо ширину підчеркування до 100% */
    transform-origin: left;
  }
  color: black;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: orange;
  }

  padding-top: 24px;
  padding-bottom: 24px;
`;

export const StyledLinkWrapper = styled.span`
  margin-right: 76px;
`;
export const BaseContainer = styled.div`
  padding: 0 15px;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${({ theme: { colors } }) => colors.white};
  box-sizing: border-box;
`;

export const Header = styled.header`
  border: 1px solid ${({ theme: { colors } }) => colors.headerColor};
  box-shadow: ${({ theme: { colors } }) => colors.boxShadow};
  border-radius: ${({ theme: { radii } }) => radii.md};
`;

export const Nav = styled.nav`
  color: ${({ theme: { colors } }) => colors.navColor};
`;

export const ListMainLink = styled.ul`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
`;

export const ErrorMsg = styled.p`
  padding: 10px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33; /* 133.333% */
  letter-spacing: -0.36px;
`;
