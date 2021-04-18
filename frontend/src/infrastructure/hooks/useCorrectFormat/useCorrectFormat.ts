import { useEffect, useState } from 'react';
import { CheckInterface } from '../../view/components/organisms/Forms/MixModifyUserForm/types';
import { Profile } from '../../../domain/models/Profile';
import Canary_Postal_Codes from '../../../infrastructure/assets/Canary_Postal_Codes.json';
import { isEmail } from '../../utils/valitadors/isEmail';
import { isText } from '../../utils/valitadors/isText';
import { isDate } from '../../utils/valitadors/isDate';
import { isPhone } from '../../utils/valitadors/isPhone';
import { isZipCode } from '../../utils/valitadors/isZipCode';
import { isAddress } from '../../utils/valitadors/isAddress';
import { isTwitterUrl } from '../../utils/valitadors/isTwitterUrl';
import { isLinkedinUrl } from '../../utils/valitadors/isLinkedinUrl';
import { isInstagramUrl } from '../../utils/valitadors/isInstagramUrl';

export const useCorrectFormat = () => {
  const [data, setData] = useState<Profile>({
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
    linkedin: '',
    additionalInformation: '',
  });
  const [check, setCheck] = useState<CheckInterface>({
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
    linkedin: '',
    additionalInformation: '',
  });
  const [messageInfoUser, setMessageInfoUser] = useState({
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
    linkedin: '',
    additionalInformation: '',
  });

  const [inputValue, setInputValue] = useState<string>();
  const [nameEvent, setNameEvent] = useState<string>();
  const [town, setTown] = useState<string[]>([]);
  const calculateAge = (ageDate: Date) => {
    const diffAge = Date.now() - ageDate.getTime();
    const ageCheck = new Date(diffAge);
    return Math.abs(ageCheck.getUTCFullYear() - 1970);
  };

  const province = {
    35: 'Las Palmas',
    38: 'Santa Cruz de Tenerife',
  };

  useEffect(() => {
    const minLength: number = 3;
    const maxLength: number = 30;
    if (inputValue) {
      switch (nameEvent) {
        case 'email':
          if (isEmail(inputValue)) {
            setCheck({ ...check, email: 'correct' });
            setData({ ...data, email: inputValue });
          } else {
            setCheck({ ...check, email: 'incorrect' });
            setMessageInfoUser({ ...messageInfoUser, email: 'Formato incorrecto' });
          }
          break;
        case 'name':
          if (
            isText(inputValue) &&
            inputValue.length >= minLength &&
            inputValue.length <= maxLength
          ) {
            setCheck({ ...check, name: 'correct' });
            setData({ ...data, name: inputValue });
          } else {
            setCheck({ ...check, name: 'incorrect' });
            setMessageInfoUser({
              ...messageInfoUser,
              name: 'Sólo puede contener letras, con un mínimo de 3 y un máximo de 30',
            });
          }
          break;
        case 'surname':
          if (
            isText(inputValue) &&
            inputValue.length >= minLength &&
            inputValue.length <= maxLength
          ) {
            setCheck({ ...check, surname: 'correct' });
            setData({ ...data, surname: inputValue });
            setMessageInfoUser({
              ...messageInfoUser,
              surname: 'Sólo puede contener letras, con un mínimo de 3 y un máximo de 30',
            });
          } else {
            setCheck({ ...check, surname: 'incorrect' });
          }
          break;
        case 'birthday':
          const age = new Date(inputValue);

          if (isDate(inputValue) && calculateAge(age) >= 16) {
            setCheck({ ...check, birthDate: 'correct' });
            setData({ ...data, birthDate: inputValue });
          } else {
            setCheck({ ...check, birthDate: 'incorrect' });
            setMessageInfoUser({
              ...messageInfoUser,
              birthDate: 'No puede ser menor de 16 años',
            });
          }
          break;
        case 'phoneNumber':
          if (isPhone(inputValue)) {
            setCheck({ ...check, phoneNumber: 'correct' });
            setData({ ...data, phoneNumber: inputValue });
          } else {
            setCheck({ ...check, phoneNumber: 'incorrect' });
            setMessageInfoUser({
              ...messageInfoUser,
              phoneNumber: 'Formato incorrecto Ej: +XX XXXXXXXXX o +XXX',
            });
          }
          break;
        case 'zipcode':
          if (isZipCode(inputValue)) {
            setCheck({ ...check, zipCode: 'correct' });
            setData({ ...data, zipCode: inputValue });
          } else {
            setCheck({ ...check, zipCode: 'incorrect' });
            setMessageInfoUser({
              ...messageInfoUser,
              zipCode: 'Código postal incorrecto o no existe',
            });
          }
          break;
        case 'town':
          if (isText(inputValue)) {
            setCheck({ ...check, town: 'correct' });
            setData({ ...data, town: inputValue });
          } else {
            setCheck({ ...check, town: 'incorrect' });
          }
          break;
        case 'address':
          if (isAddress(inputValue)) {
            setCheck({ ...check, address: 'correct' });
            setData({ ...data, address: inputValue });
          } else {
            setCheck({ ...check, address: 'incorrect' });
            setMessageInfoUser({
              ...messageInfoUser,
              address: 'Formato incorrecto Ej: Calle Nombre de la calle X',
            });
          }
          break;
        case 'twitter':
          if (isTwitterUrl(inputValue)) {
            setCheck({ ...check, twitter: 'correct' });
            setData({ ...data, twitter: inputValue });
          } else {
            setCheck({ ...check, twitter: 'incorrect' });
            setMessageInfoUser({
              ...messageInfoUser,
              twitter: 'Formato incorrecto Ej: "https://twitter.com/nombre_de_usuario"',
            });
          }
          break;
        case 'linkedin':
          if (isLinkedinUrl(inputValue)) {
            setCheck({ ...check, linkedin: 'correct' });
            setData({ ...data, linkedin: inputValue });
          } else {
            setCheck({ ...check, linkedin: 'incorrect' });
            setMessageInfoUser({
              ...messageInfoUser,
              linkedin:
                'Formato incorrecto Ej: "https://linkedin.com/in/nombre_de_usuario"',
            });
          }
          break;
        case 'instagram':
          if (isInstagramUrl(inputValue)) {
            setCheck({ ...check, instagram: 'correct' });
            setData({ ...data, instagram: inputValue });
          } else {
            setCheck({ ...check, instagram: 'incorrect' });
            setMessageInfoUser({
              ...messageInfoUser,
              instagram:
                'Formato incorrecto Ej: "https://instagram.com/nombre_de_usuario"',
            });
          }
          break;
        case 'information':
          if (isText(inputValue) && inputValue.length <= 500) {
            setCheck({ ...check, additionalInformation: 'correct' });
            setData({ ...data, additionalInformation: inputValue });
          } else {
            setCheck({ ...check, additionalInformation: 'incorrect' });
            setMessageInfoUser({
              ...messageInfoUser,
              additionalInformation:
                'Formato incorrecto solamente puede contener texto con un máximo de 500 caracteres',
            });
          }
          break;
      }
    }
  }, [inputValue, nameEvent]);

  useEffect(() => {
    if (data.zipCode) {
      const items = Canary_Postal_Codes.filter(
        (postalCode) => postalCode.postal_code === data.zipCode,
      );

      switch (items.length) {
        case 0:
          setData({
            ...data,
            island: 'No existe el código postal',
            province: 'No existe el código postal',
          });
          setTown([]);
          setCheck({ ...check, zipCode: 'incorrect' });
          setMessageInfoUser({ ...messageInfoUser, zipCode: 'No existe' });

          break;
        default:
          const provinceNumber: string = data.zipCode.slice(0, 2);
          const [{ island: islandName }] = items;

          setData({
            ...data,
            province: provinceNumber === '35' ? province[`35`] : province[`38`],
            island: islandName,
          });

          const towns = items.map((townName) => townName.population_name);
          setTown(towns);
      }
    }
  }, [data.zipCode]);

  return { check, data, town, messageInfoUser, setInputValue, setNameEvent };
};
