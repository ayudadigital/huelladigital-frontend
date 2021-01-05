import * as React from 'react';
import './MixFormRegisterEsal.scss';
import { FormRegisterContactPerson } from '../FormRegisterContactPerson';
import { FormRegisterEsal } from '../FormRegisterEsal';

export const MixFormRegisterEsal: React.FC<{}> = () => (
  <form className="MixFormRegisterEsal">
    <FormRegisterContactPerson />
    <FormRegisterEsal />
  </form>
);

MixFormRegisterEsal.displayName = 'MixFormRegisterEsal';
