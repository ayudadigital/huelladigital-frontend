import React, { useState } from 'react';
import { CheckInterface } from './types';
import { isText } from '../../utils/valitadors/isText';
import { isUrl } from '../../utils/valitadors/isUrl';
import { isZipCode } from '../../utils/valitadors/isZipCode';
import { ENTITY_TYPES, ISLANDS } from './constans';

const minLength: number = 3;
const maxLength: number = 30;

const validators: { [key: string]: (value: string | boolean) => boolean } = {
  name: (value) =>
    isText(String(value)) &&
    String(value).length > minLength &&
    String(value).length < maxLength,
  description: (value) => isText(String(value)),
  website: (value) => isUrl(String(value)),
  entityType: (value) => ENTITY_TYPES.includes(String(value)),
  privacyPolicy: (value) => Boolean(value),
  dataProtectionPolicy: (value) => Boolean(value),
  island: (value) => ISLANDS.includes(String(value)),
  zipCode: (value) => isZipCode(String(value)),
};

export const useCheckEsal = () => {
  const [data, setData] = React.useState({
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

  const [check, setCheck] = useState<CheckInterface>({
    name: '',
    description: '',
    website: '',
    entityType: '',
    privacyPolicy: '',
    dataProtectionPolicy: '',
    island: '',
    zipCode: '',
  });

  const validate = (): boolean => {
    // We must cast Object.keys return because it method do not have a generic interface
    // Object.keys<MyType>(data)
    const keys = Object.keys(check).map((key) => key as keyof CheckInterface);

    const newChecks: CheckInterface = { ...check };

    for (const key of keys) {
      newChecks[key] = validators[key](data[key]) ? 'correct' : 'incorrect';
    }

    setCheck(newChecks);

    return keys.every((key) => newChecks[key] !== 'incorrect');
  };

  return {
    data,
    check,
    setData,
    validate,
  };
};
