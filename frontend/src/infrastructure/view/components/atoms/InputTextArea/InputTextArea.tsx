import * as React from 'react';
import './InputTextArea.scss';
import { InputTextAreaProps } from './types';

export const InputTextArea: React.FC<InputTextAreaProps> = ({
  name,
  placeholder,
  rows,
  cols,
}) => (
  <textarea
    className="InputTextArea"
    name={name}
    placeholder={placeholder}
    rows={rows}
    cols={cols}
    aria-label="input-textArea"
  />
);

InputTextArea.displayName = 'InputTextArea';
