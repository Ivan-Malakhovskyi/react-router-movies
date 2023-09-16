import styled from 'styled-components';

export const MovieWrapper = styled.div`
  display: flex;
  padding: 20px 0;
`;

export const MoovieImage = styled.img`
  max-width: 200px;
  margin-right: 20px;
`;

export const MovieInfo = styled.div`
  flex: 1;
`;

export const MovieTopic = styled.h2`
  margin-bottom: 20px;
`;

export const MovieListInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ParagraphInfo = styled.span`
  color: #111;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.12; /* 112.5% */
  letter-spacing: -0.64px;
  text-transform: uppercase;
`;

export const TitleInfoMore = styled.h3`
  margin-bottom: 20px;
  text-align: center;
`;
