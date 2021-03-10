import React, { useState } from 'react';
import { SubmitButton } from '../../../atoms/SubmitButton';
import { FieldForm } from '../../../molecules/FieldForm';
import { Image } from '../../../atoms/Image';
import profile_example from './assets/profile_example.svg';
import './MixModifyUserForm.scss';
import { TextAreaForm } from '../../../molecules/TextAreaForm';
import { profileService } from '../../../../../../domain/services/Profile.service';
import { useCorrectFormat } from '../../../../../hooks/useCorrectFormat';

export const MixModifyUserForm: React.FC<{}> = () => {
  const { check, data, setInputValue, setNameEvent } = useCorrectFormat();
  const [cvButtonClass, setCvButtonClass] = useState('cv-button');

  const handleChange = () => {
    setCvButtonClass('cv-button uploaded');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    profileService.editProfile(data);
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
            name="name"
            type="text"
            stateValidate={check.name}
            onChange={(e) => {
              setInputValue(e.target.value);
              setNameEvent(e.target.name);
            }}
            messageInfoUser={
              'Sólo puede contener letras, con un mínimo de 3 y un máximo de 30'
            }
          />
          <FieldForm
            title="Apellidos"
            name="surname"
            type="text"
            stateValidate={check.surname}
            onChange={(e) => {
              setInputValue(e.target.value);
              setNameEvent(e.target.name);
            }}
            messageInfoUser={
              'Sólo puede contener letras, con un mínimo de 3 y un máximo de 30'
            }
          />
        </div>
        <div className={'row second-row-personal-data'}>
          <section>
            <FieldForm
              title="Fecha de nacimiento"
              name="birthday"
              type="date"
              stateValidate={check.birthDate}
              onChange={(e) => {
                setInputValue(e.target.value);
                setNameEvent(e.target.name);
              }}
            />
          </section>
          <FieldForm
            title="Teléfono"
            name="phoneNumber"
            type="text"
            stateValidate={check.phoneNumber}
            onChange={(e) => {
              setInputValue(e.target.value);
              setNameEvent(e.target.name);
            }}
            messageInfoUser={'Formato incorrecto Ej: +XX XXXXXXXXX o +XXX'}
          />
          <FieldForm
            title="Email"
            name="email"
            type="email"
            stateValidate={check.email}
            onChange={(e) => {
              setInputValue(e.target.value);
              setNameEvent(e.target.name);
            }}
            messageInfoUser={'Formato incorrecto'}
          />
        </div>
      </div>
      <div className={'row second-row'}>
        <div className={'col location-data'}>
          <h2>Localización</h2>
          <div className={'row location-data-first-row'}>
            <FieldForm
              title="Código Postal"
              name="zipcode"
              type="text"
              stateValidate={check.zipCode}
              onChange={(e) => {
                setInputValue(e.target.value);
                setNameEvent(e.target.name);
              }}
              messageInfoUser={
                'Formato incorrecto, solamente puede contener número con un máximo de cinco dígitos'
              }
            />
            <FieldForm
              title="Isla"
              name="island"
              type="text"
              stateValidate={check.island}
              onChange={(e) => {
                setInputValue(e.target.value);
                setNameEvent(e.target.name);
              }}
            />
          </div>
          <div className={'row location-data-second-row'}>
            <FieldForm
              title="Provincia"
              name="province"
              type="text"
              stateValidate={check.province}
              onChange={(e) => {
                setInputValue(e.target.value);
                setNameEvent(e.target.name);
              }}
              messageInfoUser={'Formato incorrecto solamente puede contener letras'}
            />
            <FieldForm
              title="Ciudad"
              name="town"
              type="text"
              stateValidate={check.town}
              onChange={(e) => {
                setInputValue(e.target.value);
                setNameEvent(e.target.name);
              }}
              messageInfoUser={'Formato incorrecto solamente puede contener letras'}
            />
          </div>
          <div className={'row location-data-third-row'}>
            <FieldForm
              title="Dirección"
              name="address"
              type="text"
              stateValidate={check.address}
              onChange={(e) => {
                setInputValue(e.target.value);
                setNameEvent(e.target.name);
              }}
              messageInfoUser={'Formato incorrecto Ej: Calle Nombre de la calle X'}
            />
          </div>
        </div>

        <div className={'col additional-data'}>
          <h2>Información adicional</h2>
          <div className={'col additional-data-row'}>
            <div className={'col additional-data-first-col'}>
              <div className={'row url-networks'}>
                <FieldForm
                  title="Twitter"
                  name="twitter"
                  type="url"
                  stateValidate={check.twitter}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setNameEvent(e.target.name);
                  }}
                  messageInfoUser={
                    'Formato incorrecto Ej: "https://twitter.com/nombre_de_usuario"'
                  }
                />
              </div>
              <div className={'row url-networks'}>
                <FieldForm
                  title="LinkedIn"
                  name="linkedin"
                  type="url"
                  stateValidate={check.linkedin}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setNameEvent(e.target.name);
                  }}
                  messageInfoUser={
                    'Formato incorrecto Ej: "https://linkedin.com/in/nombre_de_usuario"'
                  }
                />
              </div>
              <div className={'row url-networks'}>
                <FieldForm
                  title="Instagram"
                  name="instagram"
                  type="url"
                  stateValidate={check.instagram}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setNameEvent(e.target.name);
                  }}
                  messageInfoUser={
                    'Formato incorrecto Ej: "https://instagram.com/nombre_de_usuario"'
                  }
                />
              </div>
            </div>
            <div className={'col additional-data-second-col'}>
              <TextAreaForm
                title="Información de interès"
                name="information"
                rows={16}
                cols={3}
                placeholder="Información de interés"
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setNameEvent(e.target.name);
                }}
                messageInfoUser={
                  'Formato incorrecto solamente puede contener texto con un máximo de 500 carácteres'
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
