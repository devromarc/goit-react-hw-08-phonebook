import { useEffect, lazy } from 'react';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from '../components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/authOperations';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactPage = lazy(() => import('../pages/ContactPage/ContactPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          {/* CONTACTS PAGE IS RESTRICTED AND IS ONLY ACCESSIBLE BY SUCCESSFULLY REGISTERING IN THE REGISTER PAGE */}
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={RegisterPage}
              />
            }
          />
          {/* CONTACTS PAGE IS RESTRICTED AND IS ONLY ACCESSIBLE BY SUCCESSFULLY LOGGING IN THE LOGIN PAGE */}
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={LoginPage} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={ContactPage} />
            }
          />
        </Route>
        {/* CONTACTS PAGE IS PRIVATE AND IS REDIRECTED TO LOGIN PAGE IF USER IS NOT AUTHENTICATED*/}
      </Routes>
    </>
  );
};

// if isLoggedIn is true, we will show the div with the logged in string.
// if isLoggedIn is false, we will show the div with the logged out string.
