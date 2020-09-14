import React, { ChangeEvent, FormEvent } from 'react';
import InputGroup from './input';
import TextAreaGroup from './textarea';
import { FormData } from './types';

interface Props {
  className: string;
  formData: FormData;
  handleChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (event: FormEvent) => void;
  status: string;
  id: string;
}

const ContactForm = (props: Props) => {
  const {
    className,
    handleChange,
    formData,
    handleSubmit,
    status,
    id,
  } = props;

  const {
    formName,
    name,
    email,
    message,
  } = formData;

  return (
    <section id={id} className={className}>
      <div className="alternate-color">
        <h2>Drop me a line!</h2>
        <p>I would love to learn about your company or opportunity.</p>
      </div>
      <div className="primary-color">
        {status ? (
          <h2>{status}</h2>
        ) : (
          <form
            name={formName}
            data-netlify="true"
            onSubmit={handleSubmit}
            data-netlify-honeypot="bot-field"
            id="contact-form"
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
  );
};

export default ContactForm;
