import * as React from 'react';
import './FormRegisterEsal.scss';
import { FieldForm } from '../../../molecules/FieldForm';
import { TextAreaForm } from '../../../molecules/TextAreaForm';

export const FormRegisterEsal: React.FC<{}> = () => (
  <div className="Esal">
    <header>
      <h1>Persona de Contacto</h1>
    </header>
    <section className="contactPerson">
      <FieldForm title={'Nombre *'} type={'text'} name={'Nombre'} />
      <FieldForm title={'Apellidos *'} type={'text'} name={'Apellidos'} />
      <FieldForm title={'Email *'} type={'email'} name={'Email'} />
      <FieldForm title={'Confirmar Email *'} type={'email'} name={'ConfirmarEmail'} />
      <FieldForm title={'Teléfono de contacto'} type={'text'} name={'Telefono'} />
      <FieldForm title={'Contraseña *'} type={'password'} name={'Contaseña'} />
    </section>
    <header>
      <h1>Datos Entidad</h1>
    </header>
    <section className={'informationEsal'}>
      <FieldForm title={'Nombre Entidad *'} type={'text'} name={'Entidad'} />
      <FieldForm title={'Página Web'} type={'text'} name={'Web'} />
      <TextAreaForm
        title={'Descripción *'}
        name={'Descripción'}
        placeholder={'Breve descripción de la entidad'}
        rows={6}
        cols={2}
      />
      <FieldForm
        title={'Ubicación *'}
        type={'radio'}
        name={'prueba'}
        value={'Gran Canaria'}
      >
          {}
      </FieldForm>
    </section>
  </div>
);

FormRegisterEsal.displayName = 'FormRegisterEsal';
