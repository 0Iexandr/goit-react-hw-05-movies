import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const MovieItem = ({ title, name, id }) => {
  const location = useLocation();
  return (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title ?? name}
      </Link>
    </li>
  );
};

MovieItem.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
};
