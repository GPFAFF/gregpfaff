import React from 'react'

export const TextAreaGroup = ({
  id, type, label, name, value, required, handleChange
}) => {
  return (
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
  )
}
