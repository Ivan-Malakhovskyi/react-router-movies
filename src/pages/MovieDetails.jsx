import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
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
import { BackLink } from 'components/movies/SearchMovie.styled';
import { fetchInfoMoovieItem } from 'components/API/movieService';
import { Loader } from 'components/loader/Loader';

const MovieDetails = () => {
  const [moviesInfo, setMoviesInfo] = useState(null);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const backLinkLocation = useRef(location?.state?.from ?? '/movies');

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const controller = useRef();

  useEffect(() => {
    if (!movieId) return;
    const getMovieItem = async () => {
      if (controller.current) {
        controller.current.abort();
      }

      controller.current = new AbortController();
      try {
        setLoading(true);
        const { data } = await fetchInfoMoovieItem(movieId, controller);
        setMoviesInfo(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovieItem();
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkLocation.current}>Back</BackLink>

      {loading && <Loader />}

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
      <Suspense
        fallback={
          <div
            style={{
              textAlign: 'center',
              paddingTop: 20,
              fontSize: 20,
              color: '#010101',
            }}
          >
            Loading data...👌
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

// * location?.state?.from ?? '/movies'
// !location && location.state && location.state.from
