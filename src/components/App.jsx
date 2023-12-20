import { Component } from 'react';
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

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts =
      JSON.parse(localStorage.getItem('contacts')) ?? startContacts;
    this.setState({ contacts: savedContacts });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const stringifiedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stringifiedContacts);
    }
  }

  handleAddContact = contactData => {
    const hasDuplicates = this.state.contacts.some(
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

    this.setState({ contacts: [...this.state.contacts, finalContact] });
  };

  onFilter = event => {
    this.setState({ filter: event.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const contacts = filter ? this.filterContacts() : this.state.contacts;

    return (
      <div>
        <Section>
          <Title>Phonebook</Title>
          <ContactForm handleFormContact={this.handleAddContact} />
        </Section>
        <Section>
          <Filter value={filter} onChange={this.onFilter} />
          <ContactList contacts={contacts} deleteContact={this.deleteContact} />
        </Section>
      </div>
    );
  }
}
