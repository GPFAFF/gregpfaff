import React from 'react'
import { RiHome3Line } from 'react-icons/ri';
import { InputGroup } from './input';
import { TextAreaGroup } from './textarea';

export const ContactForm = ({
  className,
  handleChange,
  formData,
  handleSubmit,
  status,
  id,
}) => {
  const { formName, name, email, message } = formData;

  return (
    <section className={className}>
      <div className="alternate-color">
        <h2>Drop me a line!</h2>
        <p>I would love to learn about your company or opportunity.</p>
      </div>
      <div className="primary-color">
      {status ? (
        <h3>{status}</h3>
        ) : (
          <form
            name={formName}
            data-netlify="true"
            onSubmit={handleSubmit}
            data-netlify-honeypot="bot-field"
            id={id}
            noValidate
            method="POST"
          >
            <input type="hidden" name={formName} value="contact" />
            <InputGroup
              id="name"
              type="text"
              name="name"
              label="Your Name:"
              value={name}
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
            <TextAreaGroup
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
        )}
      </div>
    </section>
  )
}
