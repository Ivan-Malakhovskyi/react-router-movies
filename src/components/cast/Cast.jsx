import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import {
  CardWrapper,
  Gallery,
  ImageGalleryItemImage,
  ImageItem,
  Info,
} from './Cast.styled';
import { TitleInfoMore } from 'components/movieDetailsStyled/movieDetailst.styled';
import { fetchInfoAboutCast } from 'components/API/movieService';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  const controller = useRef();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const getCast = async () => {
      if (controller.current) {
        controller.current.abort();
      }

      controller.current = new AbortController();

      try {
        const { cast } = await fetchInfoAboutCast(movieId, controller);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCast();
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      <TitleInfoMore>Cast: </TitleInfoMore>

      <CardWrapper>
        <Gallery>
          {cast &&
            cast.length > 0 &&
            cast.map(({ profile_path, original_name, character, id }) => (
              <ImageItem key={id}>
                <ImageGalleryItemImage
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : defaultImg
                  }
                  alt={original_name}
                />
                <Info> Character : {character}</Info>
              </ImageItem>
            ))}

          {cast && cast.length === 0 && <p>Cast not found 😥</p>}
        </Gallery>
      </CardWrapper>
    </>
  );
};
export default Cast;
