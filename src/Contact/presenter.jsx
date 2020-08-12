import React from 'react'
import { InputGroup } from './input';
import { TextAreaGroup } from './textarea';

export const ContactForm = ({ className, handleChange, formData, handleSubmit }) => {
  const { contactName, email, message } = formData;

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
            name="contactName"
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
      </div>
    </section>
  )
}