import * as React from 'react';
import './InputTextArea.scss';
import { TextAreaProps } from './types';

export const InputTextArea: React.FC<TextAreaProps> = ({ id, placeholder }) => (
  <textarea
    className="TextAreaForm"
    id={id}
    placeholder={placeholder}
    aria-label="input-textArea"
  />
);

InputTextArea.displayName = 'InputTextArea';
