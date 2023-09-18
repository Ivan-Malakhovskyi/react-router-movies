import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { TitleInfoMore } from 'components/movieDetailsStyled/movieDetailst.styled';
import { ReviewsWrapper, RewiewsParagraph } from './Reviews.styled';
import toast, { Toaster } from 'react-hot-toast';
import { useQueryParams } from 'components/hooks/useQueryParams';
import { ErrorMsg } from 'components/layout/Layout.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const { API_KEY } = useQueryParams();

  axios.defaults.baseURL = 'https://api.themoviedb.org/3';
  const [reviews, setReviews] = useState(null);
  console.log('Reviews  reviews', reviews);

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
  }, [API_KEY, movieId]);

  return (
    <>
      <TitleInfoMore> Reviews: </TitleInfoMore>
      <Toaster />
      <div>
        {reviews && reviews.length > 0 ? (
          reviews.map(({ author, content, id }) => (
            <ReviewsWrapper key={id}>
              <TitleInfoMore> Author: {author}</TitleInfoMore>
              <RewiewsParagraph>{content}</RewiewsParagraph>
            </ReviewsWrapper>
          ))
        ) : (
          <ErrorMsg>
            We don't have any reviews for this movie{' '}
            {toast.error('Sorry,we dont find any informations about reviews')}
          </ErrorMsg>
        )}
      </div>
    </>
  );
};

export default Reviews;
