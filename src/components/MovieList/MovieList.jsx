import PropTypes from 'prop-types';
import { MovieItem } from 'components/MovieItem/MovieItem';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  return (
    <ul className={css.movie__list}>
      {movies.map(({ title, name, id }) => {
        return (
          <MovieItem
            key={id}
            title={title}
            name={name}
            id={id}
          />
        );
      })}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
