import * as React from 'react';
import './Esal.scss';
import { FormRegisterContactPerson } from '../../components/organisms/Forms/FormRegisterContactPerson';
import { FormRegisterEsal } from '../../components/organisms/Forms/FormRegisterEsal';
import { FormRadio } from '../../components/molecules/FormRadio';
import { Label } from '../../components/atoms/Label';
import { LinkText } from '../../components/atoms/LinkText';
import { SubmitButton } from '../../components/atoms/SubmitButton';
import { MixFormRegisterEsal } from '../../components/organisms/Forms/MixFormRegisterEsal';

export const Esal: React.FC<{}> = () => (
  <div className="esal">
    <MixFormRegisterEsal />
  </div>
);

Esal.displayName = 'Esal';
