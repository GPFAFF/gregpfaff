import React, { useState, ChangeEvent, FormEvent } from 'react';
import encode from '../helpers';
import ContactForm from './presenter';
import { FormData } from './types';

import './index.scss';

interface Props {
  className: string;
}

const Contact = (props: Props) => {
  const { className } = props;

  const initialFormState = {
    formName: 'contact',
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [status, setStatus] = useState(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = () => (
    Object.values(formData).every(Boolean)
  );

  const handleSubmit = (event: FormEvent) => {
    if (isFormValid()) {
      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encode({
          'form-name': initialFormState.formName,
          ...formData,
        }),
      })
        .then(() => setStatus('Form Submission Successful!'))
        .catch((error) => setStatus(`Form Submission Failed! ${error}`));
    }

    event.preventDefault();
  };

  return (
    <ContactForm
      id="contactForm"
      status={status}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      className={className}
      formData={formData}
    />
  );
};

export default Contact;