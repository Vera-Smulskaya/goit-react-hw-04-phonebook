import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';
import Title from './Title/Title';

const startContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '321-459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '234-443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '123-645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '324-227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts =
      JSON.parse(localStorage.getItem('contacts')) ?? startContacts;
    return savedContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

  const handleAddContact = contactData => {
    const hasDuplicates = contacts.some(
      contact => contact.name.toLowerCase() === contactData.name.toLowerCase()
    );
    if (hasDuplicates) {
      alert(`Contact with name ${contactData.name} already exists`);
      return;
    }

    const finalContact = {
      ...contactData,
      id: nanoid(),
    };
    setContacts([...contacts, finalContact]);
  };

  const onFilter = event => {
    setFilter(event.target.value);
  };

  const filterContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const contactsNew = filter ? filterContacts() : contacts;

  return (
    <div>
      <Section>
        <Title>Phonebook</Title>
        <ContactForm handleFormContact={handleAddContact} />
      </Section>
      <Section>
        <Filter value={filter} onChange={onFilter} />
        <ContactList contacts={contactsNew} deleteContact={deleteContact} />
      </Section>
    </div>
  );
};
