import React from 'react';
import { Link } from 'react-router-dom';
import { MovieProvider } from '../context/MovieContext';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';
import MovieList from '../components/MovieList';
import Review from '../pages/Reviews';

function Home2() {
  return (
    <MovieProvider>
      <div>
        <h1>Movie Review App</h1>
      
      
      </div>
    </MovieProvider>
  );
}

export default Home2;
