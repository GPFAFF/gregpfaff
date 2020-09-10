import React, { ChangeEvent } from 'react';

interface Props {
  id: string;
  type: string;
  label: string;
  name: string;
  value: string;
  required: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputGroup = (props: Props) => {
  const {
    id,
    label,
    type,
    name,
    value,
    required,
    handleChange
  } = props;

  return (
    <p>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={handleChange}
      />
    </p>
  )
};

export default InputGroup;
