import cn from 'classnames';
import css from './Header.module.css'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className={css.nav}>
        <ul className={css.links}>
          <li>
            <NavLink
              className={({ isActive }) =>
                cn(css.NavLink, { [css.active]: isActive })
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                cn(css.NavLink, { [css.active]: isActive })
              }
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;