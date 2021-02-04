import React, { useState } from 'react';
import { SubmitButton } from '../../../atoms/SubmitButton';
import { FieldForm } from '../../../molecules/FieldForm';
import { Image } from '../../../atoms/Image';
import profile_example from './assets/profile_example.svg';
import './MixModifyUserForm.scss';
import { TextAreaForm } from '../../../molecules/TextAreaForm';
import { Profile } from '../../../../../../domain/models/Profile';
import { profileService } from '../../../../../../domain/services/Profile.service';

export const MixModifyUserForm: React.FC<{}> = () => {
  const [data, setData] = useState({
    name: '',
    surname: '',
    birthDate: '',
    phoneNumber: '',
    email: '',
    province: '',
    zipCode: '',
    town: '',
    address: '',
    island: '',
    twitter: '',
    instagram: '',
    linkedIn: '',
    additionalInformation: '',
  });

  const [cvButtonClass, setCvButtonClass] = useState('cv-button');

  const handleChange = () => {
    setCvButtonClass('cv-button uploaded');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData: Profile = {
      /*name: data.name,
      surname: data.surname,
      birthDate: data.birthDate,
      phoneNumber: data.phoneNumber,
      email: data.email,
      province: data.province,
      zipCode: data.zipCode,
      town: data.town,
      address: data.address,
      island: 'Gran Canaria',
      twitter: data.twitter,
      instagram: data.instagram,
      linkedIn: data.linkedIn,
      additionalInformation: data.additionalInformation,*/
      name: data.name,
      surname: data.surname,
      birthDate: data.birthDate,
      phoneNumber: data.phoneNumber,
      email: data.email,
      province: data.province,
      zipCode: data.zipCode,
      town: data.town,
      address: data.address,
      island: 'Gran Canaria',
      twitter: data.twitter,
      instagram: data.instagram,
      linkedIn: data.linkedIn,
      additionalInformation: data.additionalInformation,
    };

    profileService.editProfile(formData);
  };

  return (
    <form className="main-div" onSubmit={handleSubmit}>
      <div className={'personal-data'}>
        <h2>Información personal</h2>
        <header>
          <label>
            <Image source={profile_example} description="Profile image" />
            <input type="file" />
          </label>
        </header>
        <div className={'row first-row-personal-data'}>
          <FieldForm
            title="Nombre"
            name="Nombre"
            type="text"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <FieldForm
            title="Apellidos"
            name="Apellidos"
            type="text"
            onChange={(e) => setData({ ...data, surname: e.target.value })}
          />
        </div>
        <div className={'row second-row-personal-data'}>
          <section>
            <FieldForm
              title="Fecha de nacimiento"
              name="Fecha de nacimiento"
              type="date"
              onChange={(e) => setData({ ...data, birthDate: e.target.value })}
            />
          </section>
          <FieldForm
            title="Teléfono"
            name="Teléfono"
            type="text"
            onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
          />
          <FieldForm
            title="Email"
            name="Email"
            type="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
      </div>
      <div className={'row second-row'}>
        <div className={'col location-data'}>
          <h2>Localización</h2>
          <div className={'row location-data-first-row'}>
            <FieldForm
              title="Código Postal"
              name="Postal Code"
              type="text"
              onChange={(e) => setData({ ...data, zipCode: e.target.value })}
            />
            <FieldForm
              title="Dirección"
              name="Dirección"
              type="text"
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />
          </div>
          <div className={'row location-data-second-row'}>
            <FieldForm
              title="Provincia"
              name="Provincia"
              type="text"
              onChange={(e) => setData({ ...data, province: e.target.value })}
            />
            <FieldForm
              title="Ciudad"
              name="Ciudad"
              type="text"
              onChange={(e) => setData({ ...data, town: e.target.value })}
            />
          </div>
        </div>

        <div className={'col additional-data'}>
          <h2>Información adicional</h2>
          <div className={'row additional-data-row'}>
            <div className={'col additional-data-first-col'}>
              <FieldForm
                title="Twitter"
                name="Twitter"
                type="url"
                onChange={(e) => setData({ ...data, twitter: e.target.value })}
              />
              <FieldForm
                title="LinkedIn"
                name="LinkedIn"
                type="url"
                onChange={(e) => setData({ ...data, linkedIn: e.target.value })}
              />
              <FieldForm
                title="Instagram"
                name="Instagram"
                type="url"
                onChange={(e) => setData({ ...data, instagram: e.target.value })}
              />
            </div>
            <div className={'col additional-data-second-col'}>
              <TextAreaForm
                title="Información de interès"
                name="Información-de-interes"
                rows={11}
                cols={3}
                placeholder="Información de interés"
                onChange={(e) =>
                  setData({ ...data, additionalInformation: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row third-row">
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
