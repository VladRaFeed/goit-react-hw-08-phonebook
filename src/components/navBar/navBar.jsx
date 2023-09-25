import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from 'redux/store/selectors/selectors';
import { logOut } from 'redux/store/operations';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import css from './navBar.module.css';
import { useDispatch } from 'react-redux';

export default function NavBar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <header className={css.header}>
      <NavLink to="/" className={css.home_link}>
        Home
      </NavLink>
      <nav className={css.nav_bar}>
        {isLoggedIn === false ? (
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
          </ul>
        ) : (
          <div className={css.logout_wrapper}>
            <p>Hi, {user.name}!</p>
            <button type="button" onClick={() => dispatch(logOut())}>
              LogOut
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
