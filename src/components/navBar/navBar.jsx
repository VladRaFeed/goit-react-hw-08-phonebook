import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/store/selectors/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import css from './navBar.module.css';

export default function NavBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <NavLink to="/" className={css.home_link}>
        Home
      </NavLink>
      <nav className={css.nav_bar}>
        <ul className={css.nav_list}>
          <li>
            <NavLink to="/register" className={css.nav_link}>
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={css.nav_link}>
              LogIn
            </NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <button type="button">LogOut</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
