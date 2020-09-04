import React, { useState, Fragment } from 'react'
import { encode } from '../helpers';
import { ContactForm } from './presenter';

import './index.scss';

const Contact = ({ className }) => {
  const initialFormState = {
    name: 'contact',
    contactName: '',
    email: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState(null)
  const { contactName, email, message } = initialFormState;

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value});
  };

  const isFormValid = () => (
    Object.values(formData).every(Boolean)
  );

  const handleSubmit = event => {
    if (isFormValid()) {
      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: encode({
          "form-name": initialFormState.name,
          ...formData,
        })
      })
        .then(() => setStatus("Form Submission Successful!"))
        .catch(error => setStatus("Form Submission Failed!"));
    }

    event.preventDefault();
  };

  return (
    <ContactForm
      name="contact"
      id="contact"
      status={status}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      className={className}
      formData={formData}
    />
  )
};

export default Contact;


