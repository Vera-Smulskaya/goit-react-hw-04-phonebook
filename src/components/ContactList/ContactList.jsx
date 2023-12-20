import css from './ContactList.module.css';
import Title from '../Title/Title';
import ContactListItem from 'components/ContactListItem/ContactListItem';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={css.contactListContainer}>
      <Title>Contacts</Title>
      {contacts.map(contact => (
        <ContactListItem
          contact={contact}
          key={contact.id}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
