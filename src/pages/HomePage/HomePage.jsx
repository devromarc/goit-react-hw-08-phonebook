import React from 'react';
import css from './HomePage.module.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useAuth } from '../../hooks/useAuth';

const HomePage = () => {
  const { isLoggedIn, user } = useAuth();
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div className={css.container}>
        {isLoggedIn ? <h1>Welcome {user.name}</h1> : <h1>Welcome User!</h1>}
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
