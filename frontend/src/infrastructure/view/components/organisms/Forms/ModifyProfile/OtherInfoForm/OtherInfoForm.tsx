import React from 'react';
import { InputImageForm } from '../../../../atoms/InputImageForm';
import { SubmitButton } from '../../../../atoms/SubmitButton';
import { FieldForm } from '../../../../molecules/FieldForm';

export const OtherInfoForm: React.FC<{}> = () => {
  return (
    <div>
      <FieldForm title="Twitter" name="Twitter" type="text" />
      <FieldForm title="Instagram" name="Instagram" type="text" />
      <FieldForm title="LinkedIn" name="LinkedIn" type="text" />
      <FieldForm title="Otra información" name="Otra información" type="text" />
      <InputImageForm name="Imagen de perfil" />
      <SubmitButton text="Actualizar perfil" />
    </div>
  );
};

OtherInfoForm.displayName = 'OtherInformationForm';
