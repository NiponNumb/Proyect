import { createContext, useReducer } from 'react';
import reviewReducer from '../reducers/reviewReducer';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [reviews, dispatch] = useReducer(reviewReducer, []);

  return (
    <MovieContext.Provider value={{ reviews, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };
