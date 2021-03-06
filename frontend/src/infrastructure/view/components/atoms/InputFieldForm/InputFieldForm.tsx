import * as React from 'react';
import './styles.scss';
import { InputFieldFormProps } from './types';

export const InputFieldForm: React.FC<InputFieldFormProps> = ({
  type,
  name,
  value,
  onChange,
  onBlur,
  stateValidate,
  disabled,
}) => {
  return (
    <input
      className={`InputFieldForm ${stateValidate}`}
      aria-label={'input-form'}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
    />
  );
};

InputFieldForm.displayName = 'InputFieldForm';
