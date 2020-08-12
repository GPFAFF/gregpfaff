import React, { useState } from 'react'
import { encode } from '../helpers';
import { ContactForm } from './presenter';

import './index.scss';

export const Contact = ({ className }) => {
  const initialFormState = {
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
          "form-name": "contact",
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
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      className={className}
      formData={formData}
    />
  )
}


