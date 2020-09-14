import React, { ChangeEvent, FormEvent } from 'react';

interface Props {
  id: string;
  label: string;
  name: string;
  value: string;
  required: boolean;
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaGroup = (props: Props) => {
  const {
    id,
    label,
    name,
    value,
    required,
    handleChange,
  } = props;

  return (
    <p>
      <label htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        required={required}
        onChange={handleChange}
      />
    </p>
  )
};

export default TextAreaGroup;
