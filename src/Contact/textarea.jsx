import React from 'react';

const TextAreaGroup = ({
  id,
  type,
  label,
  name,
  value,
  required,
  handleChange,
}) => (
  <p>
    <label htmlFor={id}>
      {label}
    </label>
    <textarea
      id={id}
      type={type}
      name={name}
      value={value}
      required
      onChange={handleChange}
    />
  </p>
);

export default TextAreaGroup;
