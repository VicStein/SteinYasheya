import React from 'react';

const FormField = ({ label, type, name, value, onChange, required, placeholder, textarea }) => {
  const InputComponent = textarea ? 'textarea' : 'input';

  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <InputComponent
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormField;
