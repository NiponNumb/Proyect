import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const Review = () => {
    const { reviews } = useContext(MovieContext);

    return (
        <div>
            <h2>Movie Cards</h2>

            <div className="card h-96 w-96 bg-primary text-primary-content shadow-xl m-4">
                {reviews.map((review) => (
                    <div key={review.id} className="movie-card">
                        <figure>
                            <img src={review.url} alt="Descripción de la imagen" style={{ width: '100%', margin: '0.75rem' }} />
                        </figure>
                        <h3>{review.movieName}</h3>
                        <p>{review.text}</p>
                        <a href={review.url} target="_blank" rel="noopener noreferrer">
                            {review.url}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;
