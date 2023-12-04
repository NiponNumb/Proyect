import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/MovieContext';

const ReviewList = () => {
  const { reviews, dispatch } = useContext(MovieContext);
  const [editReview, setEditReview] = useState({ id: null, text: '', movieName: '', url: '' });

  const handleDeleteReview = (id) => {
    dispatch({ type: 'DELETE_REVIEW', payload: id });
  };

  const handleEditReview = (review) => {
    setEditReview(review);
  };

  const handleSaveEdit = () => {
    dispatch({ type: 'EDIT_REVIEW', payload: editReview });
    setEditReview({ id: null, text: '', movieName: '', url: '' });
  };

  return (
    <div>
      <h2>All Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            {editReview.id === review.id ? (
              <>
                <label className='m-3'>
                  Movie Name:
                  <input 
                    type="text"
                    value={editReview.movieName}
                    onChange={(e) => setEditReview({ ...editReview, movieName: e.target.value })}
                  />
                </label>
                <label className='m-3'>
                  Text:
                  <input
                    type="text"
                    value={editReview.text}
                    onChange={(e) => setEditReview({ ...editReview, text: e.target.value })}
                  />
                </label>
                <label className='m-3'>
                  URL:
                  <input
                    type="text"
                    value={editReview.url}
                    onChange={(e) => setEditReview({ ...editReview, url: e.target.value })}
                  />
                </label>
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <>
                <strong>{review.movieName}</strong>: {review.text}{' '}
                <a href={review.url} target="_blank" rel="noopener noreferrer">
                  {review.url}
                </a>
                <button className='m-3'onClick={() => handleEditReview(review)}>Edit</button>
                <button  className='m-3'onClick={() => handleDeleteReview(review.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
