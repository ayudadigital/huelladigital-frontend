import * as React from 'react';
import './FormRegisterContactPerson.scss';
import { FieldForm } from '../../../molecules/FieldForm';
import { SubmitButton } from '../../../atoms/SubmitButton';
import { ContactPersonService } from '../../../../../../domain/services/ContactPerson.service';
import { useCheckEmployee } from '../../../../../hooks/useCheckEmployee';

export const FormRegisterContactPerson: React.FC<{}> = () => {
  const {
    check,
    dataEmployee,
    messageInfoUser,
    setInputValue,
    setNameEvent,
  } = useCheckEmployee();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    ContactPersonService.registerContactPerson(dataEmployee);
  };

  return (
    <form
      className="FormRegisterContactPerson"
      method={'POST'}
      id="form"
      onSubmit={handleSubmit}
    >
      .
      <div className="div-register-contact-person">
        <header>
          <h1>Persona de Contacto</h1>
        </header>
        <div className="row">
          <div className={'col'}>
            <FieldForm
              title={'Nombre *'}
              type={'text'}
              name={'name'}
              stateValidate={check.name}
              onChange={(e) => {
                setInputValue(e.target.value);
                setNameEvent(e.target.name);
              }}
              messageInfoUser={messageInfoUser.name}
            />
          </div>
          <div className={'col'}>
            <FieldForm
              title={'Apellidos *'}
              type={'text'}
              name={'surname'}
              stateValidate={check.surname}
              onChange={(e) => {
                setInputValue(e.target.value);
                setNameEvent(e.target.name);
              }}
              messageInfoUser={messageInfoUser.surname}
            />
          </div>
        </div>
        <div className="row">
          <div className={'col'}>
            <FieldForm
              title={'Email *'}
              type={'email'}
              name={'email'}
              stateValidate={check.email}
              onChange={(e) => {
                setInputValue(e.target.value);
                setNameEvent(e.target.name);
              }}
              messageInfoUser={messageInfoUser.email}
            />
          </div>
          <div className={'col'}>
            <FieldForm
              title={'Confirmar email *'}
              type={'email'}
              name={'repeatEmail'}
              stateValidate={check.repeatEmail}
              onChange={(e) => {
                setInputValue(e.target.value);
                setNameEvent(e.target.name);
              }}
              messageInfoUser={messageInfoUser.repeatEmail}
            />
          </div>
        </div>
        <div className="row">
          <div className={'col'}>
            <FieldForm
              title={'Teléfono de contacto *'}
              type={'text'}
              name={'phoneNumber'}
              stateValidate={check.phoneNumber}
              onChange={(e) => {
                setInputValue(e.target.value);
                setNameEvent(e.target.name);
              }}
              messageInfoUser={messageInfoUser.phoneNumber}
            />
          </div>
          <div className={'col'}>
            <FieldForm
              title={'Contraseña *'}
              type={'password'}
              name={'password'}
              stateValidate={check.password}
              onChange={(e) => {
                setInputValue(e.target.value);
                setNameEvent(e.target.name);
              }}
              messageInfoUser={messageInfoUser.password}
            />
          </div>
        </div>
        <div className={'button-register'}>
          <SubmitButton text={'Registrar'} />
        </div>
      </div>
    </form>
  );
};
FormRegisterContactPerson.displayName = 'FormRegisterContactPerson';
