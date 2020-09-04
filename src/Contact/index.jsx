import React, { useState, Fragment } from 'react'
import { encode } from '../helpers';
import { ContactForm } from './presenter';

import './index.scss';

const Contact = ({ className, ref }) => {
  const initialFormState = {
    formName: 'contact',
    name: '',
    email: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState(null)
  const { formName, name, email, message } = initialFormState;

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
          "form-name": initialFormState.formName,
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


