import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import css from './App.module.css';

export const ContactPage = () => {
  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={css.containerContacts}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
