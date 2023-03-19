import React from 'react';
import ContactsList from './Phonebook/ContactsList/ContactsList';
import { useGetContactsQuery } from '../redux/api';
import Form from './Phonebook/Form/Form';
import css from './Phonebook.module.css';

export const App = () => {
  const { data: contacts } = useGetContactsQuery();
  return (
    <div className={css.container}>
      <Form />
      {contacts && <ContactsList contacts={contacts} />}
    </div>
  );
};
