import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { TitleInfoMore } from 'components/movieDetailsStyled/movieDetailst.styled';
import { ReviewsWrapper, RewiewsParagraph } from './Reviews.styled';
import toast from 'react-hot-toast';
import { ErrorMsg } from 'components/layout/Layout.styled';
import { fetchReviews } from 'components/API/movieService';
import { Loader } from 'components/loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [requestCancelled, setRequestCancelled] = useState(false);

  const controller = useRef();

  useEffect(() => {
    if (!movieId) return;

    const getReviews = async () => {
      setLoading(true);
      setError(false);
      setRequestCancelled(false);

      if (controller.current) {
        controller.current.abort();
      }

      controller.current = new AbortController();

      try {
        const { results } = await fetchReviews(movieId, controller);

        setReviews(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      <TitleInfoMore> Reviews: </TitleInfoMore>
      {loading && <Loader />}

      {error && !loading && requestCancelled && (
        <ErrorMsg>
          ❌ Something went wrong,try reload page{' '}
          {toast.error('Ooops, something went wrong')}
        </ErrorMsg>
      )}

      {reviews && !error && reviews.length > 0 ? (
        reviews.map(({ author, content, id }) => (
          <ReviewsWrapper key={id}>
            <TitleInfoMore> Author: {author}</TitleInfoMore>
            <RewiewsParagraph>{content}</RewiewsParagraph>
          </ReviewsWrapper>
        ))
      ) : (
        <ErrorMsg>We don't have any reviews for this movie </ErrorMsg>
      )}
    </>
  );
};

export default Reviews;
