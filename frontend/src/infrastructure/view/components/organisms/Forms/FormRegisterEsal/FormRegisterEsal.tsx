import * as React from 'react';
import './FormRegisterEsal.scss';
import { FieldForm } from '../../../molecules/FieldForm';
import { TextAreaForm } from '../../../molecules/TextAreaForm';

export const FormRegisterEsal: React.FC<{}> = () => (
  <div className="RegisterEsal">
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
    </section>
  </div>
);

FormRegisterEsal.displayName = 'FormRegisterEsal';
