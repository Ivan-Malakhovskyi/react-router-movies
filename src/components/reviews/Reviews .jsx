import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { TitleInfoMore } from 'components/movieDetailsStyled/movieDetailst.styled';
import { ReviewsWrapper, RewiewsParagraph } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();

  const API_KEY = 'fd98539c24110fb9af262d45db0a0c64';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `/movie/${movieId}/reviews?api_key=${API_KEY}`
        );
        const {
          data: { results },
        } = response;
        setReviews(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      <TitleInfoMore> Reviews:</TitleInfoMore>
      {reviews ? (
        reviews.map(({ author, content, id }) => {
          return (
            <ReviewsWrapper key={id}>
              <TitleInfoMore> Author: {author}</TitleInfoMore>
              <RewiewsParagraph>{content}</RewiewsParagraph>
            </ReviewsWrapper>
          );
        })
      ) : (
        <p>Ooops such information wans't found</p>
      )}
    </>
  );
};
