import React from 'react';
import css from './HomePage.module.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div className={css.container}>
        <h1>Welcome User!</h1>
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
