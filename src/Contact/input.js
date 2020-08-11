import React from 'react'

export const InputGroup = ({
  id, type, label, name, value, required, onChange
}) => {
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
        required
        onChange={onChange}
      />
    </p>
  )
}
