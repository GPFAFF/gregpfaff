import React, {
  useState,
} from 'react'
import { InputGroup } from './input';
import { encode } from '../helpers';

import './index.scss';

export const Contact = ({ className }) => {
  const initialFormState = {
    contactName: '',
    email: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const { contactName, email, message } = initialFormState;

  const handleChange = event => {
    const { name, value } = event.target;
    event.persist();
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
    <section id="contact" className={className}>
      <div className="primary-color">
        <h2>Drop me a line!</h2>
        <p>I would love to learn about your company or opportunity.</p>
      </div>
      <div className="alternate-color">
        <form
          name="contact"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <InputGroup
            id="name"
            type="text"
            name="name"
            label="Your Name:"
            value={contactName}
            required
            handleChange={handleChange}
          />
          <InputGroup
            id="email"
            type="email"
            name="email"
            label="Your Email:"
            value={email}
            required
            handleChange={handleChange}
          />
          <InputGroup
            id="message"
            type="text"
            name="message"
            label="Your Message:"
            value={message}
            required
            handleChange={handleChange}
          />
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      </div>
    </section>
  )
}


