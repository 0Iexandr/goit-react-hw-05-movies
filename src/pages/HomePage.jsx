import { MovieList } from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api';

function HomePage() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    getTrendingMovies()
    .then(({results}) => {
      setMovies(results);
    });
  }, []);

  return (
      <>
        <h1>Trending today</h1>
        <MovieList movies={movies} />
      </>
  );
}

export default HomePage;