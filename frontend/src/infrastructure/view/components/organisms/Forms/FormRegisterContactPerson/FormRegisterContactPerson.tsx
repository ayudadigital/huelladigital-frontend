import * as React from 'react';
import './FormRegisterContactPerson.scss';
import { FieldForm } from '../../../molecules/FieldForm';

export const FormRegisterContactPerson: React.FC<{}> = () => (
  <div className="FormRegisterContactPerson">
    <header>
      <h1>Persona de Contacto</h1>
    </header>
    <section className="contactPerson">
      <FieldForm title={'Nombre *'} type={'text'} name={'Nombre'} />
      <FieldForm title={'Apellidos *'} type={'text'} name={'Apellidos'} />
      <FieldForm title={'Email *'} type={'email'} name={'Email'} />
      <FieldForm title={'Confirmar Email *'} type={'email'} name={'ConfirmarEmail'} />
      <FieldForm title={'Teléfono de contacto *'} type={'text'} name={'Telefono'} />
      <FieldForm title={'Contraseña *'} type={'password'} name={'Contaseña'} />
    </section>
  </div>
);

FormRegisterContactPerson.displayName = 'FormRegisterContactPerson';
