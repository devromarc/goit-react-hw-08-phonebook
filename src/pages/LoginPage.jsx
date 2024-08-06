import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const LoginPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Login Page</title>
        </Helmet>
        <LoginForm />
      </HelmetProvider>
    </>
  );
};

export default LoginPage;
