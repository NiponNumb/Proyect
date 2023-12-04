
import React from 'react';
import { MovieProvider } from '../context/MovieContext';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';
import MovieList from '../components/MovieList';  // Añadir importación
import Review from '../pages/Reviews';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase/client';
supabase
function Home() {
  return (
    <MovieProvider>
      <div>
      <button onClick={()=> supabase.auth.signOut()}>Sign Out</button>
        <h1>Movie Review App</h1>
        <ReviewForm />
        <ReviewList />
       
        <Review/>
       
      </div>
    </MovieProvider>
    
  );
}

export default Home;
