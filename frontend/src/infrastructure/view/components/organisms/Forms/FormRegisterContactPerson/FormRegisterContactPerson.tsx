import * as React from 'react';
import './FormRegisterContactPerson.scss';
import { FieldForm } from '../../../molecules/FieldForm';
import { SubmitButton } from '../../../atoms/SubmitButton';

export const FormRegisterContactPerson: React.FC<{}> = () => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form
      className="FormRegisterContactPerson"
      method={'POST'}
      id="form"
      onSubmit={handleSubmit}
    >
      <header>
        <h1>Persona de Contacto</h1>
      </header>
      <div className="row">
        <div className={'col'}>
          <FieldForm
            title={'Nombre *'}
            type={'text'}
            name={'Name'}
            // onChange={handleChange}
          />
        </div>
        <div className={'col'}>
          <FieldForm
            title={'Apellidos *'}
            type={'text'}
            name={'Surname'}
            // onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className={'col'}>
          <FieldForm
            title={'Email *'}
            type={'email'}
            name={'Email'}
            // onChange={handleChange}
          />
        </div>
        <div className={'col'}>
          <FieldForm
            title={'Confirmar email *'}
            type={'email'}
            name={'ConfirmarEmail'}
            // onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className={'col'}>
          <FieldForm
            title={'Teléfono de contacto *'}
            type={'text'}
            name={'PhoneNumber'}
            // onChange={handleChange}
          />
        </div>
        <div className={'col'}>
          <FieldForm
            title={'Contraseña *'}
            type={'password'}
            name={'Password'}
            // onChange={handleChange}
          />
        </div>
      </div>
      <div className={'button-register'}>
        <SubmitButton text={'Registrar'} />
      </div>
    </form>
  );
};
FormRegisterContactPerson.displayName = 'FormRegisterContactPerson';
