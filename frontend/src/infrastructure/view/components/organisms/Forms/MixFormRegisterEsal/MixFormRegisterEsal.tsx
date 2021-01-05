import * as React from 'react';
import './MixFormRegisterEsal.scss';
import { FormRegisterContactPerson } from '../FormRegisterContactPerson';
import { FormRegisterEsal } from '../FormRegisterEsal';
import { SubmitButton } from '../../../atoms/SubmitButton';

export const MixFormRegisterEsal: React.FC<{}> = () => (
  <form className="MixFormRegisterEsal">
    {/*<FormRegisterContactPerson />*/}
    <section>
      <FormRegisterEsal />

      {/*<SubmitButton text={'Registrar Entidad'} />*/}
    </section>
  </form>
);

MixFormRegisterEsal.displayName = 'MixFormRegisterEsal';
