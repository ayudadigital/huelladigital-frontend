import React from 'react';
import { InputFieldForm } from '../../../atoms/InputFieldForm';
import { SubmitButton } from '../../../atoms/SubmitButton';
import { FieldForm } from '../../../molecules/FieldForm';
import './ContactInfoForm';

export const ContactInfoForm: React.FC<{}> = () => {
  return (
    <div>
      <FieldForm title="Nombre" name="Nombre" type="text" />
      <FieldForm title="Apellidos" name="Apellidos" type="text" />
      <FieldForm title="Fecha de nacimiento" name="Fecha de nacimiento" type="date" />
      <FieldForm title="Teléfono" name="Teléfono" type="text" />
      <FieldForm title="Email" name="Email" type="email" />
      <SubmitButton text="Actualizar perfil" />
    </div>
  );
};
