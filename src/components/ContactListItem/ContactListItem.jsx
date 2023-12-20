import css from './ContactListItem.module.css';

const ContactListItem = ({ contact, deleteContact }) => {
  return (
    <div className={css.contactContainer}>
      <p className={css.contactName}>
        {contact.name}:{' '}
        <span className={css.contactNumber}>{contact.number}</span>
      </p>
      <button
        className={css.contactButton}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactListItem;
