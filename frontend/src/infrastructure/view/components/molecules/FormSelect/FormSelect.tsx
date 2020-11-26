import * as React from 'react';
import './FormSelect.scss';
import { Label } from '../../atoms/Label';
import { FormSelectProps } from './types';

export const FormSelect: React.FC<FormSelectProps> = ({
                                                        text,
                                                        name,
                                                        id,
                                                        onChange,
                                                        onBlur,
                                                        optionsList,
                                                      }) => (
  <div className="FormSelect">
    <Label text={text}/>
    <select name={name} id={id} onChange={onChange} onBlur={onBlur}>
      {optionsList.map((option: string) => <option key={'key-' + option} value={option}>{option}</option>)}
    </select>
  </div>
);

FormSelect.displayName = 'FormSelect';
