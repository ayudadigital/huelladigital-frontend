import React, { useEffect, useState } from 'react';
import formatRoles from '../../view/components/atoms/InputFieldForm/types';
import { CheckInterface } from './types';
import { Esal } from '../../../domain/models/Esal';

export const useCheckEsal = () => {
  const [data, setData] = React.useState<Esal>({
    name: '',
    description: '',
    website: '',
    registeredEntity: false,
    entityType: '',
    privacyPolicy: false,
    dataProtectionPolicy: false,
    island: '',
    zipCode: '',
  });
  const [checked, setChecked] = React.useState<boolean>(false);
  const island = [
    'Gran Canaria',
    'Fuerteventura',
    'Lanzarote',
    'La Graciosa',
    'Tenerife',
    'La Palma',
    'La Gomera',
    'El Hierro',
  ];
  const associationType = [
    'Asociación',
    'Fundación',
    'Club Deportivo',
    'Colegio Profesional',
    'Federación Deportiva',
  ];
  const registered = ['Sí', 'No'];
  const [check, setCheck] = useState<CheckInterface>({
    name: '',
    description: '',
    website: '',
    registeredEntity: '',
    entityType: '',
    privacyPolicy: '',
    dataProtectionPolicy: '',
    island: '',
    zipCode: '',
  });
  const [messageInfoUser, setMessageInfoUser] = useState({
    name: '',
    description: '',
    website: '',
    registeredEntity: '',
    entityType: '',
    privacyPolicy: '',
    dataProtectionPolicy: '',
    island: '',
    zipCode: '',
  });

  const [inputValue, setInputValue] = useState<any>();
  const [nameEvent, setNameEvent] = useState<string>();

  const typeAssociation = (select: string) => {
    switch (select) {
      case 'Asociación':
        select = 'ASSOCIATION';
        break;
      case 'Fundación':
        select = 'FOUNDATION';
        break;

      case 'Club Deportivo':
        select = 'SPORTS CLUB';
        break;

      case 'Colegio Profesional':
        select = 'COLLEGE PROFESSIONAL';
        break;

      case 'Federacion Deportiva':
        select = 'SPORTS FEDERATION';
        break;
    }
    return select;
  };

  useEffect(() => {
    const minLength: number = 3;
    const maxLength: number = 30;

    if (inputValue) {
      switch (nameEvent) {
        case 'nameEntity':
          if (
            formatRoles.regexOnlyText.test(inputValue) &&
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

        case 'website':
          if (formatRoles.regexOnlyText.test(inputValue)) {
            setCheck({ ...check, website: 'correct' });
            setData({ ...data, website: inputValue });
          } else {
            setCheck({ ...check, description: 'incorrect' });
            setMessageInfoUser({
              ...messageInfoUser,
              website: 'Formato incorrecto',
            });
          }
          break;
        case 'description':
          if (
            formatRoles.regexOnlyText.test(inputValue) &&
            inputValue.length >= 20 &&
            inputValue.length <= 500
          ) {
            setCheck({ ...check, description: 'correct' });
            setData({ ...data, description: inputValue });
          } else {
            setCheck({ ...check, description: 'incorrect' });
            setMessageInfoUser({
              ...messageInfoUser,
              description:
                'Sólo puede contener letras, con un mínimo de 20 y un máximo de 500',
            });
          }
          break;
        case 'island':
          if (formatRoles.regexOnlyText.test(inputValue)) {
            setCheck({ ...check, island: 'correct' });
            setData({ ...data, island: inputValue });
          } else {
            setCheck({ ...check, description: 'incorrect' });
            setMessageInfoUser({
              ...messageInfoUser,
              island: 'Debe seleccionar una isla',
            });
          }
          break;
        case 'zipCode':
          if (formatRoles.regexZipcode.test(inputValue)) {
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
        case 'entityType':
          if (formatRoles.regexOnlyText.test(inputValue)) {
            setCheck({ ...check, entityType: 'correct' });
            setData({ ...data, entityType: typeAssociation(inputValue) });
          } else {
            setCheck({ ...check, description: 'incorrect' });
            setMessageInfoUser({
              ...messageInfoUser,
              entityType: 'Debe seleccionar un tipo',
            });
          }
          break;
        case 'registeredEntity':
          if (inputValue) {
            setCheck({ ...check, registeredEntity: 'correct' });
            setData({ ...data, registeredEntity: inputValue === 'Sí' });
          } else {
            setMessageInfoUser({
              ...messageInfoUser,
              registeredEntity: 'Debe seleccionar uno',
            });
            setCheck({ ...check, description: 'incorrect' });
          }
          break;
        case 'privacyPolicy':
          if (inputValue) {
            setCheck({ ...check, privacyPolicy: 'correct' });
            setData({ ...data, privacyPolicy: inputValue });
          } else {
            setCheck({ ...check, description: 'incorrect' });
            setMessageInfoUser({
              ...messageInfoUser,
              privacyPolicy: 'Debe aceptar para poder registrarse',
            });
          }
          break;

        case 'dataProtectionPolicy':
          if (inputValue) {
            setCheck({ ...check, dataProtectionPolicy: 'correct' });
            setData({ ...data, dataProtectionPolicy: inputValue });
          } else {
            setCheck({ ...check, description: 'incorrect' });
            setMessageInfoUser({
              ...messageInfoUser,
              dataProtectionPolicy: 'Debe aceptar para poder registrarse',
            });
          }
          break;
      }
    }
  }, [nameEvent, inputValue]);

  return {
    data,
    island,
    associationType,
    check,
    registered,
    setNameEvent,
    setInputValue,
    messageInfoUser,
  };
};
