import { Link, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  MoovieImage,
  MovieInfo,
  MovieListInfo,
  MovieTopic,
  MovieWrapper,
  ParagraphInfo,
  TitleInfoMore,
} from 'components/movieDetailsStyled/movieDetailst.styled';
import { StyledLinkItem } from 'components/home/Home.styled';
import {
  ListMainLink,
  StyledLinkWrapper,
} from 'components/layout/Layout.styled';
import { RewiewsParagraph } from 'components/reviews/Reviews.styled';

const MovieDetails = () => {
  const { movieId } = useParams();

  const API_KEY = 'fd98539c24110fb9af262d45db0a0c64';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const [moviesInfo, setMoviesInfo] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchInfoMoovieItem = async () => {
      try {
        const response = await axios.get(
          `/movie/${movieId}?api_key=${API_KEY}`
        );
        const { data } = response;
        setMoviesInfo(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchInfoMoovieItem();
  }, [movieId]);

  return (
    <>
      {moviesInfo && (
        <MovieWrapper>
          <MoovieImage
            src={
              moviesInfo.poster_path
                ? `https://image.tmdb.org/t/p/w500/${moviesInfo.poster_path}`
                : defaultImg
            }
            alt={moviesInfo.original_title}
            width={250}
          />
          <MovieInfo>
            <MovieTopic>{moviesInfo.original_title}</MovieTopic>
            <MovieListInfo>
              <li>
                <ParagraphInfo>User score: </ParagraphInfo>
                <RewiewsParagraph>
                  {(moviesInfo.vote_average * 10).toFixed(1)}
                </RewiewsParagraph>
              </li>
              <li>
                <ParagraphInfo>Overview :</ParagraphInfo>{' '}
                <RewiewsParagraph>{moviesInfo.overview}</RewiewsParagraph>
              </li>
              <li>
                <ParagraphInfo> Genres:</ParagraphInfo>{' '}
                <RewiewsParagraph>
                  {moviesInfo.genres.map(({ id, name }) => (
                    <span key={id}>{name} </span>
                  ))}
                </RewiewsParagraph>
              </li>
            </MovieListInfo>
          </MovieInfo>
        </MovieWrapper>
      )}

      <TitleInfoMore>Additional information</TitleInfoMore>
      <ListMainLink>
        <StyledLinkWrapper>
          <StyledLinkItem to="cast">Cast</StyledLinkItem>
        </StyledLinkWrapper>
        <li>
          <StyledLinkItem to="reviews">Reviews</StyledLinkItem>
        </li>
      </ListMainLink>
      <Outlet />
    </>
  );
};

export default MovieDetails;
