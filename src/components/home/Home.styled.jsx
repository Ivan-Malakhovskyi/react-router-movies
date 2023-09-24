import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeTitle = styled.h2`
  color: ${({ theme: { colors } }) => colors.borderListColor};
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.11;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: capitalize;
`;

export const SectionHome = styled.section`
  padding: 30px 0;
`;

export const ListMoovie = styled.ul`
  display: flex;
  width: 328px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const StyledLinkItem = styled(Link)`
  color: rgba(17, 17, 17, 0.6);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33; /* 133.333% */
  letter-spacing: -0.36px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: rgba(79, 46, 232, 1);
  }
`;
