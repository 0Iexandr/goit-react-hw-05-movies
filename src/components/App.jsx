import { Routes, Route } from 'react-router-dom';
import { React, lazy, Suspense } from 'react';
import { NavigationBar } from './NavBar/NavigationBar';
import css from './App.module.css';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const MovieCast = lazy(() => import('pages/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('pages/MovieReviews/MovieReviews'));

export const App = () => {
  return (
    <div className={css.container}>
      <Suspense fallback={<Loader />}>
        <NavigationBar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="movies/:idMovie" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<HomePage />} >
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
