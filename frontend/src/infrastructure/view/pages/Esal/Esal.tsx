import * as React from 'react';
import './Esal.scss';
import { FormRegisterEsal } from '../../components/organisms/Forms/FormRegisterEsal';

export const Esal: React.FC<{}> = () => (
  <div className="esal">
    <FormRegisterEsal />
  </div>
);

Esal.displayName = 'Esal';
