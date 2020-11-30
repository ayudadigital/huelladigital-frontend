import * as React from 'react';
import './TextAreaForm.scss';
import { TextAreaProps } from './types';

export const TextAreaForm: React.FC<TextAreaProps> = ({ name, placeholder }) => (
  <textarea className="TextAreaForm" name={name} placeholder={placeholder}></textarea>
);

TextAreaForm.displayName = 'TextAreaForm';
