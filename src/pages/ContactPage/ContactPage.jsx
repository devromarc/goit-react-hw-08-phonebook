import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import css from './ContactPage.module.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const ContactPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Contact Page</title>
        </Helmet>
        <div className={css.container}>
          <h1>Phonebook</h1>
          <ContactForm />
        </div>
        <div className={css.containerContacts}>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </HelmetProvider>
    </>
  );
};

export default ContactPage;
