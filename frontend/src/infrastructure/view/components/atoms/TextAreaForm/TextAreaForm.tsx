import * as React from 'react';
import './TextAreaForm.scss';
import { TextAreaProps } from './types';

export const TextAreaForm: React.FC<TextAreaProps> = ({ text, placeholder }) => (
  <textarea className="TextAreaForm" name={text} placeholder={placeholder} />
);

TextAreaForm.displayName = 'TextAreaForm';
