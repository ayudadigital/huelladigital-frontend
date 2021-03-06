import { useEffect, useState } from 'react';
import formatRoles, {
  CheckInterface,
} from '../../view/components/organisms/Forms/MixModifyUserForm/types';
import { Profile } from '../../../domain/models/Profile';

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

  const [inputValue, setInputValue] = useState<string>();
  const [nameEvent, setNameEvent] = useState<string>();
  const calculateAge = (ageDate: Date) => {
    const diffAge = Date.now() - ageDate.getTime();
    const ageCheck = new Date(diffAge);
    return Math.abs(ageCheck.getUTCFullYear() - 1970);
  };

  useEffect(() => {
    const minLength: number = 3;
    const maxLength: number = 30;
    if (inputValue) {
      switch (nameEvent) {
        case 'email':
          if (formatRoles.regexEmail.test(inputValue)) {
            setCheck({ ...check, email: 'correct' });
            setData({ ...data, email: inputValue });
          } else {
            setCheck({ ...check, email: 'incorrect' });
          }
          break;
        case 'name':
          if (
            formatRoles.regexOnlyText.test(inputValue) &&
            inputValue.length >= minLength &&
            inputValue.length <= maxLength
          ) {
            setCheck({ ...check, name: 'correct' });
            setData({ ...data, name: inputValue });
          } else {
            setCheck({ ...check, name: 'incorrect' });
          }
          break;
        case 'surname':
          if (
            formatRoles.regexOnlyText.test(inputValue) &&
            inputValue.length >= minLength &&
            inputValue.length <= maxLength
          ) {
            setCheck({ ...check, surname: 'correct' });
            setData({ ...data, surname: inputValue });
          } else {
            setCheck({ ...check, surname: 'incorrect' });
          }
          break;
        case 'birthday':
          const age = new Date(inputValue);

          if (formatRoles.regexDate.test(inputValue) && calculateAge(age) >= 16) {
            setCheck({ ...check, birthDate: 'correct' });
            setData({ ...data, birthDate: inputValue });
          } else {
            setCheck({ ...check, birthDate: 'incorrect' });
          }
          break;
        case 'phoneNumber':
          if (formatRoles.regexPhone.test(inputValue)) {
            setCheck({ ...check, phoneNumber: 'correct' });
            setData({ ...data, phoneNumber: inputValue });
          } else {
            setCheck({ ...check, phoneNumber: 'incorrect' });
          }
          break;
        case 'zipcode':
          if (formatRoles.regexZipcode.test(inputValue)) {
            setCheck({ ...check, zipCode: 'correct' });
            setData({ ...data, zipCode: inputValue });
          } else {
            setCheck({ ...check, zipCode: 'incorrect' });
          }
          break;
        case 'island':
          if (formatRoles.regexOnlyText.test(inputValue)) {
            setCheck({ ...check, island: 'correct' });
            setData({ ...data, island: inputValue });
          } else {
            setCheck({ ...check, island: 'incorrect' });
          }
          break;
        case 'province':
          if (formatRoles.regexOnlyText.test(inputValue)) {
            setCheck({ ...check, province: 'correct' });
            setData({ ...data, province: inputValue });
          } else {
            setCheck({ ...check, province: 'incorrect' });
          }
          break;
        case 'town':
          if (formatRoles.regexOnlyText.test(inputValue)) {
            setCheck({ ...check, town: 'correct' });
            setData({ ...data, town: inputValue });
          } else {
            setCheck({ ...check, town: 'incorrect' });
          }
          break;
        case 'address':
          if (formatRoles.regexAddress.test(inputValue)) {
            setCheck({ ...check, address: 'correct' });
            setData({ ...data, address: inputValue });
          } else {
            setCheck({ ...check, address: 'incorrect' });
          }
          break;
        case 'twitter':
          if (formatRoles.regexTwitter.test(inputValue)) {
            setCheck({ ...check, twitter: 'correct' });
            setData({ ...data, twitter: inputValue });
          } else {
            setCheck({ ...check, twitter: 'incorrect' });
          }
          break;
        case 'instagram':
          if (formatRoles.regexInstagram.test(inputValue)) {
            setCheck({ ...check, instagram: 'correct' });
            setData({ ...data, instagram: inputValue });
          } else {
            setCheck({ ...check, instagram: 'incorrect' });
          }
          break;
        case 'linkedin':
          if (formatRoles.regexLinkedin.test(inputValue)) {
            setCheck({ ...check, linkedin: 'correct' });
            setData({ ...data, linkedin: inputValue });
          } else {
            setCheck({ ...check, linkedin: 'incorrect' });
          }
          break;
        case 'information':
          if (formatRoles.regexOnlyText.test(inputValue) && inputValue.length <= 500) {
            setCheck({ ...check, additionalInformation: 'correct' });
            setData({ ...data, additionalInformation: inputValue });
          } else {
            setCheck({ ...check, additionalInformation: 'incorrect' });
          }
          break;
      }
    }
  }, [inputValue, nameEvent]);
  return { check, data, setInputValue, setNameEvent };
};
