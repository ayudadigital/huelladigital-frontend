import React, { ChangeEvent, useState } from 'react';
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

  const checkIsAllowedValue: (event: ChangeEvent<HTMLInputElement>) => void = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const minLength: number = 6;
    const regexEmail = new RegExp(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    );
    const regexNameAndSurname = new RegExp(/^[a-zA-Z]+/);
    const regexPhone = new RegExp(/[+]?[0-9]{1,3}\s[0-9]+/);
    const regexDate = new RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
    const regexTwitter = new RegExp(
      /^(?:http(s)?:\/\/)?[t T]+[w W]+(i|I{2})+(t|T{2})+[e E]+[r R]+\.+[c C]+[o O]+[m M]+\/+[\w\-._~:/?#[\\]@!\$&'\(\)\*\+,;=.]+/,
    );
    const regexInstagram = new RegExp(
      /^(?:http(s)?:\/\/)?[i I]+[n N]+[s S]+[t T]+[a A]+[g G]+[r R]+[a A]+[m M]+\.+[c C]+[o O]+[m M]+\/+[\w\-._~:/?#[\\]@!\$&'\(\)\*\+,;=.]+/,
    );
    const regexLinkedin = new RegExp(
      /^(?:http(s)?:\/\/)?[l L]+[i I]+[n N]+[k K]+[e E]+[d D]+[i I]+[n N]+\.+[c C]+[o O]+[m M]+\/+[\w\-._~:/?#[\\]@!\$&'\(\)\*\+,;=.]+/,
    );
    const inputValue = event.target.value;
    const nameEvent = event.target.name;

    // switch (nameEvent) {
    //   case 'email':
    //     if (regexEmail.test(inputValue)) {
    //       setCheck({ ...check, email: 'correct' });
    //     } else {
    //       setCheck({ ...check, email: 'incorrect' });
    //     }
    //     break;
    //   case 'password':
    //     if (inputValue.length >= minLength) {
    //       setCheck({ ...check, password: 'correct' });
    //     } else {
    //       setCheck({ ...check, password: 'incorrect' });
    //     }
    //     break;
    //   default:
    //     break;
    // }
    switch (nameEvent) {
      case 'email':
        if (regexEmail.test(inputValue)) {
          // setCheck({ ...check, email: 'correct' });
        } else {
          // setCheck({ ...check, email: 'incorrect' });
        }
        break;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    //
    // const formData: Profile = {
    //   name: data.name,
    //   surname: data.surname,
    //   birthDate: data.birthDate,
    //   phoneNumber: data.phoneNumber,
    //   email: data.email,
    //   province: data.province,
    //   zipCode: data.zipCode,
    //   town: data.town,
    //   address: data.address,
    //   island: data.island,
    //   twitter: data.twitter,
    //   instagram: data.instagram,
    //   linkedin: data.linkedIn,
    //   additionalInformation: data.additionalInformation,
    // };
    //
    // profileService.editProfile(formData);
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
            onChange={(e) => {
              checkIsAllowedValue(e);
              setData({ ...data, name: e.target.value });
            }}
          />
          <FieldForm
            title="Apellidos"
            name="surname"
            type="text"
            onChange={(e) => {
              checkIsAllowedValue(e);
              setData({ ...data, surname: e.target.value });
            }}
          />
        </div>
        <div className={'row second-row-personal-data'}>
          <section>
            <FieldForm
              title="Fecha de nacimiento"
              name="birthday"
              type="date"
              onChange={(e) => {
                checkIsAllowedValue(e);
                setData({ ...data, birthDate: e.target.value });
              }}
            />
          </section>
          <FieldForm
            title="Teléfono"
            name="telefono"
            type="text"
            onChange={(e) => {
              checkIsAllowedValue(e);
              setData({ ...data, phoneNumber: e.target.value });
            }}
          />
          <FieldForm
            title="Email"
            name="email"
            type="email"
            onChange={(e) => {
              checkIsAllowedValue(e);
              setData({ ...data, email: e.target.value });
            }}
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
              onChange={(e) => {
                checkIsAllowedValue(e);
                setData({ ...data, zipCode: e.target.value });
              }}
            />
            <FieldForm
              title="Isla"
              name="island"
              type="text"
              onChange={(e) => setData({ ...data, island: e.target.value })}
            />
          </div>
          <div className={'row location-data-second-row'}>
            <FieldForm
              title="Provincia"
              name="province"
              type="text"
              onChange={(e) => setData({ ...data, province: e.target.value })}
            />
            <FieldForm
              title="Ciudad"
              name="town"
              type="text"
              onChange={(e) => setData({ ...data, town: e.target.value })}
            />
          </div>
          <div className={'row location-data-third-row'}>
            <FieldForm
              title="Dirección"
              name="address"
              type="text"
              onChange={(e) => {
                checkIsAllowedValue(e);
                setData({ ...data, address: e.target.value });
              }}
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
                  onChange={(e) => {
                    checkIsAllowedValue(e);
                    setData({ ...data, twitter: e.target.value });
                  }}
                />
              </div>
              <div className={'row url-networks'}>
                <FieldForm
                  title="LinkedIn"
                  name="linkedIn"
                  type="url"
                  onChange={(e) => {
                    checkIsAllowedValue(e);
                    setData({ ...data, linkedIn: e.target.value });
                  }}
                />
              </div>
              <div className={'row url-networks'}>
                <FieldForm
                  title="Instagram"
                  name="instagram"
                  type="url"
                  onChange={(e) => {
                    checkIsAllowedValue(e);
                    setData({ ...data, instagram: e.target.value });
                  }}
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
