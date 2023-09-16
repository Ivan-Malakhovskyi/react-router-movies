import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  CardWrapper,
  Gallery,
  ImageGalleryItemImage,
  ImageItem,
} from './Cast.styled';
import { TitleInfoMore } from 'components/movieDetailsStyled/movieDetailst.styled';

const Cast = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const API_KEY = 'fd98539c24110fb9af262d45db0a0c64';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const [cast, setCast] = useState(null);
  useEffect(() => {
    if (!movieId) return;
    const fetchInfoAboutCast = async () => {
      try {
        const response = await axios.get(
          `/movie/${movieId}/credits?api_key=${API_KEY}`
        );
        const {
          data: { cast },
        } = response;
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchInfoAboutCast();
  }, [movieId]);

  return (
    <>
      <TitleInfoMore>Cast: </TitleInfoMore>
      {''}
      {cast &&
        cast.map(({ profile_path, original_name, character, id }) => {
          return (
            <CardWrapper key={id}>
              <Gallery>
                <ImageItem>
                  {' '}
                  <ImageGalleryItemImage
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                        : defaultImg
                    }
                    alt={original_name}
                  />
                </ImageItem>
              </Gallery>

              <p> Character : {character}</p>
            </CardWrapper>
          );
        })}
    </>
  );
};
export default Cast;
