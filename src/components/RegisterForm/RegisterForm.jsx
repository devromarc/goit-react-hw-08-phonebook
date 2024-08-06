import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';
import { Notify } from 'notiflix';

/* Controlled Form Component vs Uncontrolled Form Component
 *
 * Controlled - data is controlled by state
 * Uncontrolled - data is controlled by the DOM
 */

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    Notify.success('Welcome to your Contact Page', {
      position: 'center-top',
    });
  };

  return (
    <div className={css.formContainer}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <input
            className={css.registerFormInput}
            type="text"
            name="name"
            required
          />
        </label>
        <label className={css.label}>
          Email
          <input
            className={css.registerFormInput}
            type="email"
            name="email"
            required
          />
        </label>
        <label className={css.label}>
          Password
          <input
            className={css.registerFormInput}
            type="password"
            name="password"
            required
          />
        </label>
        <button className={css.btn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
