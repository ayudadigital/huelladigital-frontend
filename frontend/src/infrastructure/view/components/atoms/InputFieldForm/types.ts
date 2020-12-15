import React from 'react';

export interface InputFieldFormProps {
  type: inputTypes | string;
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => string | void;
  onBlur?: any;
  stateValidate?: stateValidateTypes;
  checked?: boolean;
}

export type inputTypes = 'email' | 'password' | 'text' | 'radio' | 'checkbox';
export type stateValidateTypes = '' | 'correct' | 'incorrect';
