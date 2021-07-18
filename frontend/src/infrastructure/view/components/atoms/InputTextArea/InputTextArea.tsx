import * as React from 'react';
import './InputTextArea.scss';
import { TextAreaFormProps } from '../../molecules/TextAreaForm/types';

export const InputTextArea: React.FC<TextAreaFormProps> = ({
  name,
  title,
  placeholder,
  rows,
  cols,
  readonly,
  onChange,
  onBlur,
  value,
  wrap,
  maxlength,
  stateValidate,
}) => (
  <>
    <textarea
      className={`InputTextArea ${stateValidate}`}
      name={name}
      title={title}
      value={value}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      readOnly={readonly}
      onChange={onChange}
      onBlur={onBlur}
      wrap={wrap}
      maxLength={maxlength}
      aria-label="input-textArea"
    />
  </>
);

InputTextArea.displayName = 'InputTextArea';
