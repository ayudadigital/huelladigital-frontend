import React, { useState } from 'react';
import { SubmitButton } from '../../../atoms/SubmitButton';
import { FieldForm } from '../../../molecules/FieldForm';
import { Image } from '../../../atoms/Image';
import profile_example from './assets/profile_example.svg';
import './MixModifyUserForm.scss';
import { TextAreaForm } from '../../../molecules/TextAreaForm';

export const MixModifyUserForm: React.FC<{}> = () => {
  const [cvButtonClass, setCvButtonClass] = useState('cv-button');

  const handleChange = () => {
    setCvButtonClass('cv-button uploaded');
  };

  return (
    <form className="main-div">
      <div className={'personal-data'}>
        <h2>Información personal</h2>
        <header>
          <label>
            <Image source={profile_example} description="Profile image" />
            <input type="file" />
          </label>
        </header>
        <section>
          <FieldForm title="Nombre" name="Nombre" type="text" />
          <FieldForm title="Apellidos" name="Apellidos" type="text" />
          <FieldForm title="Fecha de nacimiento" name="Fecha de nacimiento" type="date" />
          <FieldForm title="Teléfono" name="Teléfono" type="text" />
          <FieldForm title="Email" name="Email" type="email" />
        </section>
      </div>
      <div className={'row second-row'}>
        <div className={'col location-data'}>
          <h2>Localización</h2>
          <div className={'row location-data-first-row'}>
            <FieldForm title="Código Postal" name="Postal Code" type="text" />
            <FieldForm title="Dirección" name="Dirección" type="text" />
          </div>
          <div className={'row location-data-second-row'}>
            <FieldForm title="Provincia" name="Provincia" type="text" />
            <FieldForm title="Ciudad" name="Ciudad" type="text" />
          </div>
        </div>

        <div className={'col additional-data'}>
          <h2>Información adicional</h2>
          <div className={'row additional-data-row'}>
            <div className={'col additional-data-first-col'}>
              <FieldForm title="Twitter" name="Twitter" type="url" />
              <FieldForm title="LinkedIn" name="LinkedIn" type="url" />
              <FieldForm title="Instagram" name="Instagram" type="url" />
            </div>
            <div className={'col additional-data-second-col'}>
              <TextAreaForm
                title="Información de interès"
                name="Información-de-interes"
                rows={11}
                cols={3}
                placeholder="Información de interés"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row cv-div-class">
        <div className={'col cv-button-col'}>
          <label className={cvButtonClass}>
            <input type="file" onChange={handleChange} />
            Adjuntar CV
          </label>
        </div>
        <div className={'col submit-button'}>
          <SubmitButton text="Actualizar perfil" />
        </div>
      </div>
    </form>
  );
};

MixModifyUserForm.displayName = 'mixModifyUserForm';
