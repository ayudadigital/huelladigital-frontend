import * as React from 'react';
import { TextAreaFormProps } from './types';
import './TextAreaForm.scss';
import { Label } from '../../atoms/Label';
import { InputTextArea } from '../../atoms/InputTextArea';

export const TextAreaForm: React.FC<TextAreaFormProps> = ({
  name = '',
  title = '',
  placeholder,
  rows,
  cols,
}) => {
  return (
    <div className="TextAreaForm">
      <Label text={title} />
      <InputTextArea name={name} placeholder={placeholder} rows={rows} cols={cols} />
    </div>
  );
};

TextAreaForm.displayName = 'TextAreaForm';
