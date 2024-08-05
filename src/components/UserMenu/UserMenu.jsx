import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await dispatch(logOut());
      // Redirect to the homepage after successful logout
      navigate('/');
      Notify.success('Thank You!', {
        position: 'center-top',
      });
    } catch (error) {
      // Handle error if necessary
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
