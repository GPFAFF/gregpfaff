import React, {
  useState,
} from 'react'
import { InputGroup } from './input';

import './index.scss';

export const Contact = ({ className }) => {
  const encode = (data) => (
    Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
  );

  const initialFormState = {
    name: '',
    email: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(initialFormState);

  const { name, email, message } = initialFormState;

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
            value={name}
            required
            onChange={handleChange}
          />
          <InputGroup
            id="email"
            type="email"
            name="email"
            label="Your Email:"
            value={email}
            required
            onChange={handleChange}
          />
          <InputGroup
            id="message"
            type="text"
            name="message"
            label="Your Message:"
            value={message}
            required
            onChange={handleChange}
          />
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      </div>
    </section>
  )
}


