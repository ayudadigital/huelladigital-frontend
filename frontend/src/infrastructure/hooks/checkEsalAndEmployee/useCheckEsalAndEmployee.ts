import { useEffect, useState } from 'react';
import { EsalEmployee } from '../../../domain/models/Esal';
import { CheckInterface } from './types';
import { isText } from '../../utils/valitadors/isText';
import { isEmail } from '../../utils/valitadors/isEmail';
import { isPhone } from '../../utils/valitadors/isPhone';
import { isPassword } from '../../utils/valitadors/isPassword';

export const useCheckEsalAndEmployee = () => {
  const [dataEmployee, setDataEmployee] = useState<EsalEmployee>({
    name: '',
    surname: '',
    phoneNumber: '',
    email: '',
    password: '',
  });
  const [check, setCheck] = useState<CheckInterface>({
    name: '',
    surname: '',
    phoneNumber: '',
    email: '',
    repeatEmail: '',
    password: '',
  });
  const [messageInfoUser, setMessageInfoUser] = useState({
    name: '',
    surname: '',
    phoneNumber: '',
    email: '',
    repeatEmail: '',
    password: '',
  });
  const [inputValue, setInputValue] = useState<string>();
  const [nameEvent, setNameEvent] = useState<string>();

  useEffect(() => {
    const minLength: number = 3;
    const maxLength: number = 30;

    if (inputValue) {
      switch (nameEvent) {
        case 'name':
          if (
            isText(inputValue) &&
            inputValue.length >= minLength &&
            inputValue.length <= maxLength
          ) {
            setCheck({ ...check, name: 'correct' });
            setDataEmployee({ ...dataEmployee, name: inputValue });
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
            setDataEmployee({ ...dataEmployee, surname: inputValue });
            setMessageInfoUser({
              ...messageInfoUser,
              surname: 'Sólo puede contener letras, con un mínimo de 3 y un máximo de 30',
            });
          } else {
            setCheck({ ...check, surname: 'incorrect' });
          }
          break;
        case 'email':
          if (isEmail(inputValue)) {
            setCheck({ ...check, email: 'correct' });
            setDataEmployee({ ...dataEmployee, email: inputValue });
          } else {
            setCheck({ ...check, email: 'incorrect' });
            setMessageInfoUser({ ...messageInfoUser, email: 'Formato incorrecto' });
          }
          break;
        case 'repeatEmail':
          if (isEmail(inputValue)) {
            if (dataEmployee.email === inputValue) {
              setCheck({ ...check, repeatEmail: 'correct' });
            } else {
              setCheck({ ...check, repeatEmail: 'incorrect' });
              setMessageInfoUser({
                ...messageInfoUser,
                repeatEmail: 'Email no coincide',
              });
            }
          }
          break;
        case 'phoneNumber':
          if (isPhone(inputValue)) {
            setCheck({ ...check, phoneNumber: 'correct' });
            setDataEmployee({ ...dataEmployee, phoneNumber: inputValue });
          } else {
            setCheck({ ...check, phoneNumber: 'incorrect' });
            setMessageInfoUser({
              ...messageInfoUser,
              phoneNumber: 'Formato incorrecto Ej: +XX XXXXXXXXX o +XXX',
            });
          }
          break;
        case 'password':
          if (isPassword(inputValue)) {
            setCheck({ ...check, password: 'correct' });
            setDataEmployee({ ...dataEmployee, password: inputValue });
          } else {
            setCheck({ ...check, password: 'incorrect' });
            setMessageInfoUser({
              ...messageInfoUser,
              password: 'Debe empezar por al menos una letra',
            });
          }
          break;
      }
    }
  }, [nameEvent, inputValue]);

  return { check, dataEmployee, messageInfoUser, setInputValue, setNameEvent };
};
