import React, { useState } from 'react';
import { SubmitButton } from '../../../atoms/SubmitButton';
import { FieldForm } from '../../../molecules/FieldForm';
import { InputTextArea } from '../../../atoms/InputTextArea';
import { Image } from '../../../atoms/Image';
import profile_example from './assets/profile_example.svg';
import './MixModifyUserForm.scss';

export const MixModifyUserForm: React.FC<{}> = () => {
  const [cvButtonClass, setCvButtonClass] = useState('cv-button');

  const handleChange = () => {
    setCvButtonClass('cv-button uploaded');
  };

  return (
    <div className="main-div">
      <header>
        <label>
          <Image source={profile_example} description="Profile image" />
          <input type="file" />
          <div>Cambiar foto</div>
        </label>
      </header>
      <div>
        <h3>Información personal</h3>
        <FieldForm title="Nombre" name="Nombre" type="text" />
        <FieldForm title="Apellidos" name="Apellidos" type="text" />
        <FieldForm title="Fecha de nacimiento" name="Fecha de nacimiento" type="date" />
        <FieldForm title="Teléfono" name="Teléfono" type="text" />
        <FieldForm title="Email" name="Email" type="email" />
        <hr />
      </div>
      <div>
        <h3>Localización</h3>
        <FieldForm title="Provincia" name="Provincia" type="text" />
        <FieldForm title="Dirección" name="Dirección" type="text" />
        <FieldForm title="Ciudad" name="Ciudad" type="text" />
        <hr />
      </div>
      <div>
        <h3>Información adicional</h3>
        <FieldForm title="Twitter" name="Twitter" type="url" />
        <FieldForm title="LinkedIn" name="LinkedIn" type="url" />
        <FieldForm title="Instagram" name="Instagram" type="url" />
        <InputTextArea id="Otra informacion" placeholder="Información de interés" />
        <div className="cv-div-class">
          <label className={cvButtonClass}>
            <input type="file" onChange={handleChange} />
            Adjuntar CV
          </label>
          <SubmitButton text="Actualizar perfil" />
        </div>
      </div>
    </div>
  );
};

MixModifyUserForm.displayName = 'mixModifyUserForm';
