import React, { Component } from 'react';
import css from './ContactList.module.css';
import Title from '../Title/Title';
import ContactListItem from 'components/ContactListItem/ContactListItem';

export default class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
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
  }
}
