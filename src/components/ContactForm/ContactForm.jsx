import React, { Component } from 'react';
import Title from '../Title/Title';
import css from './ContactForm.module.css';

export default class ContactForm extends Component {
state = {
  name: "",
  number: "",
}

handleSubmit = event => {
  event.preventDefault();
  
  const contactData = {
    name: this.state.name,
    number: this.state.number,
  }

  this.props.handleFormContact(contactData);
  this.setState({ name: "", number: "" });
 }

handleInputChange = event => {
const value = event.target.value;
const name = event.target.name;

  this.setState({[name]: value })
}

  render() {
    return (
      <div className={css.formContainer}>
        <Title>Contact Form</Title>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <label className={css.formLabel}>
            <p  className={css.formLabelText}>Name: </p>
            <input type="text" className={css.formInput} name='name' value={this.state.name} onChange={this.handleInputChange} placeholder='Name Surname' required></input>
          </label>
          <label className={css.formLabel}>
            <p className={css.formLabelText}>Number: </p>
            <input type="tel"  className={css.formInput} name='number'  value={this.state.number} onChange={this.handleInputChange} placeholder='Format: xxx-xxx-xx-xx' pattern="^\+?\d{1,4}[ .\-]?\(?\d{1,3}\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$" required ></input>
          </label>
          <button type="submit" className={css.formButton}>Add contact</button>
        </form>
       </div>
    );
  }
}
