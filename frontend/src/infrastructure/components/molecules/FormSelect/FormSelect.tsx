import * as React from 'react';
import './FormSelect.scss';
import { Label } from '../../atoms/Label';

interface FormSelectProps {
  title: string;
  name: string;
  id?: string;
  onChange?: (event: any) => void;
  onBlur?: () => void;
  optionsList: string[];
}

export const FormSelect: React.FC<FormSelectProps> = ({
                                                        title,
                                                        name,
                                                        id,
                                                        onChange,
                                                        onBlur,
                                                        optionsList,
                                                      }) => (
  <div className="FormSelect">
    <Label text={title}/>
    <select name={name} id={id} onChange={onChange} onBlur={onBlur}>
      {optionsList.map((option: string) => <option key={'key-' + option}>{option}</option>)}
    </select>
  </div>
);

FormSelect.displayName = 'FormSelect';
