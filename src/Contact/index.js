import React, {
  useState,
  useCallback
} from 'react'

import './index.scss';

export const Contact = ({ className }) => {
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

  const handleSubmit = event => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...formData,
      })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  return (
    <section id="contact" className={className}>
      <div className="primary-color">
        <h2>Drop me a line!</h2>
        <p>I would love to learn about your project or opportunity.</p>
      </div>
      <div className="alternate-color">
        <form
          onSubmit={handleSubmit}
        >
        <p>
          <label htmlFor="name">
            Your Name:
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="email">
            Your Email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="message">
            Your Message:
          </label>
          <textarea
            id="message"
            type="text"
            name="message"
            value={message}
            required
            onChange={handleChange}
          />
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      </div>
    </section>
  )
}


