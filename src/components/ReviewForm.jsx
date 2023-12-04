import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const ReviewForm = () => {
  const { dispatch } = useContext(MovieContext);
  const [movieName, setMovieName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [url, setUrl] = useState('');

  const handleAddReview = () => {
    dispatch({
      type: 'ADD_REVIEW',
      payload: {
        id: Date.now(),
        movieName,
        text: reviewText,
        url,
      },
    });
    setMovieName('');
    setReviewText('');
    setUrl('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Movie Name"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />
      <input className='m-3'
        placeholder="Your Review"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <input
      className='m-3'
        type="text"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleAddReview}>Add Review</button>
    </div>
  );
};

export default ReviewForm;
