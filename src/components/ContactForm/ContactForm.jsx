import React, { useState } from 'react';
import Title from '../Title/Title';
import css from './ContactForm.module.css';

const ContactForm = ({ handleFormContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    handleFormContact({ name, number });

    setName('');
    setNumber('');
  };

  const handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    switch (name) {
      case 'name': {
        setName(value);
        break;
      }
      case 'number': {
        setNumber(value);
        break;
      }
      default:
        return;
    }
  };

  return (
    <div className={css.formContainer}>
      <Title>Contact Form</Title>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.formLabel}>
          <p className={css.formLabelText}>Name: </p>
          <input
            type="text"
            className={css.formInput}
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Name Surname"
            required
          ></input>
        </label>
        <label className={css.formLabel}>
          <p className={css.formLabelText}>Number: </p>
          <input
            type="tel"
            className={css.formInput}
            name="number"
            value={number}
            onChange={handleInputChange}
            placeholder="Format: xxx-xxx-xx-xx"
            pattern="^\+?\d{1,4}[ .\-]?\(?\d{1,3}\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$"
            required
          ></input>
        </label>
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
