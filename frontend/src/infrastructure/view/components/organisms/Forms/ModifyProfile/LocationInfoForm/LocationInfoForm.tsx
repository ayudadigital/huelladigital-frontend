import React from 'react';
import { SubmitButton } from '../../../../atoms/SubmitButton';
import { FieldForm } from '../../../../molecules/FieldForm';

export const LocationInfoForm: React.FC<{}> = () => {
  return (
    <div>
      <FieldForm title="Provincia" name="Provincia" type="text" />
      <FieldForm title="Dirección" name="Dirección" type="text" />
      <FieldForm title="Ciudad" name="text" type="text" />
      <SubmitButton text="Actualizar perfil" />
    </div>
  );
};

LocationInfoForm.displayName = 'LocationInfoForm';
