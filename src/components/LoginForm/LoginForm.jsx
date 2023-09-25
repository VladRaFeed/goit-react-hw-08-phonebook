import { useDispatch } from 'react-redux';
import { logIn } from 'redux/store/operations';
import { NavLink } from 'react-router-dom';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.main_form}>
        <label className={css.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
      <p className={css.form_description}>
        If you haven't account, register please{' '}
        <NavLink to="/register">*click*</NavLink>
      </p>
    </>
  );
}
