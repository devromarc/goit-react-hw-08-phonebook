import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const RegisterPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Register Page</title>
      </Helmet>
      <div>
        <title>Register</title>
        <RegisterForm />
      </div>
    </HelmetProvider>
  );
};

export default RegisterPage;
