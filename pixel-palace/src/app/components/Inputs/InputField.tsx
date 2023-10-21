import { InputFieldProps } from '@/app/types/types';
import React, { ChangeEvent } from 'react';

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  required = false, 
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={label} className="block text-sm font-medium text-gray-700 text-left">
        {label}
      </label>
      <input
        type={type}
        id={label}
        name={label}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring focus:ring-primary-500 focus:bg-primary-100 hover:bg-primary-100 transition-colors duration-300 text-left"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputField;
