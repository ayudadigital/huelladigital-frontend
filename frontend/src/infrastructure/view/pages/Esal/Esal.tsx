import * as React from 'react';
import './Esal.scss';
import { MixFormRegisterEsal } from '../../components/organisms/Forms/MixFormRegisterEsal';

export const Esal: React.FC<{}> = () => (
  <div className="esal">
    <MixFormRegisterEsal />
  </div>
);

Esal.displayName = 'Esal';
