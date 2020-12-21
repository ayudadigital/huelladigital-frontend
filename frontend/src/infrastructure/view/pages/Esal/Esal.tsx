import * as React from 'react';
import './Esal.scss';
import { FormRegisterContactPerson } from '../../components/organisms/Forms/FormRegisterContactPerson';
import { FormRegisterEsal } from '../../components/organisms/Forms/FormRegisterEsal';
import { FormRadio } from '../../components/molecules/FormRadio';
import { Label } from '../../components/atoms/Label';
import { LinkText } from '../../components/atoms/LinkText';
import { SubmitButton } from '../../components/atoms/SubmitButton';

export const Esal: React.FC<{}> = () => (
  <div className="Esal">
    <h1>Registro Entidad</h1>
    <section className={'contactPersons'}>
      <FormRegisterContactPerson />
    </section>
    <section className={'registerEsal'}>
      <FormRegisterEsal />

      <div className={'row consentsCheck'}>
        <Label text={'Consentimientos *'} />
        <section className={'dataProtection'}>
          <FormRadio
            title={'Política Privacidad'}
            type={'checkbox'}
            name={'Política Privacidad'}
            value={''}
            checked={false}
          />
          <p>
            Estoy de acuerdo de con la {''}
            <LinkText to={'/'} text={'Política de Privacidad'} />
          </p>
        </section>
        <section className={'dataProtection'}>
          <FormRadio
            title={'Protección de datos'}
            type={'checkbox'}
            name={'Proteccion de datos'}
            value={''}
            checked={false}
          />
          <p>
            Estoy de acuerdo de con la {''}
            <LinkText to={'/'} text={'Política de Protección de Datos'} />
          </p>
        </section>
        <section className={'buttonRegister'}>
          <SubmitButton text={'Registrar Entidad'} />
        </section>
      </div>
    </section>
  </div>
);

Esal.displayName = 'Esal';
