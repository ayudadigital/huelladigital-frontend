import React, {useState} from 'react';
import {CheckInterfaceEmployee, CheckInterfaceEsal} from './types';
import {isText} from '../../utils/valitadors/isText';
import {isUrl} from '../../utils/valitadors/isUrl';
import {isZipCode} from '../../utils/valitadors/isZipCode';
import {ENTITY_TYPES, ISLANDS} from './constans';
import {isPhone} from '../../utils/valitadors/isPhone';
import {isEmail} from '../../utils/valitadors/isEmail';
import {isPassword} from '../../utils/valitadors/isPassword';

const minLengthName: number = 3;
const maxLengthName: number = 30;
const minLengthDescription: number = 20;
const maxLengthDescription: number = 500;

const validators: { [key: string]: (value: string | boolean) => boolean } = {
    name: (value) =>
        isText(String(value)) &&
        String(value).length > minLengthName &&
        String(value).length < maxLengthName,
    surname: (value) =>
        isText(String(value)) &&
        String(value).length > minLengthName &&
        String(value).length < maxLengthName,
    phoneNumber: (value) => isPhone(String(value)),
    email: (value) => isEmail(String(value)),
    password: (value) => isPassword(String(value)) && String(value).length > 6,
    description: (value) =>
        isText(String(value)) &&
        String(value).length > minLengthDescription &&
        String(value).length < maxLengthDescription,
    website: (value) => isUrl(String(value)),
    entityType: (value) => ENTITY_TYPES.includes(String(value)),
    privacyPolicy: (value) => Boolean(value),
    registeredEntity: (value) => Boolean(value),
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

    const [checkEsal, setCheckEsal] = useState<CheckInterfaceEsal>({
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

    const [dataEmployee, setDataEmployee] = useState({
        name: '',
        surname: '',
        phoneNumber: '',
        email: '',
        repeatEmail: '',
        password: '',
    });
    const [checkEmployee, setCheckEmployee] = useState<CheckInterfaceEmployee>({
        name: '',
        surname: '',
        phoneNumber: '',
        email: '',
        repeatEmail: '',
        password: '',
    });

    const validateEsal = (): boolean => {
        // We must cast Object.keys return because it method do not have a generic interface
        // Object.keys<MyType>(data)
        const keys = Object.keys(checkEsal).map((key) => key as keyof CheckInterfaceEsal);

        const newChecks: CheckInterfaceEsal = {...checkEsal};

        for (const key of keys) {
            newChecks[key] = validators[key](data[key]) ? 'correct' : 'incorrect';
        }

        setCheckEsal(newChecks);

        return keys.every((key) => newChecks[key] !== 'incorrect');
    };
    const validateEmployee = (): boolean => {
        // We must cast Object.keys return because it method do not have a generic interface
        // Object.keys<MyType>(data)
        const keys = Object.keys(checkEmployee).map((key) => key as keyof CheckInterfaceEmployee);

        const newChecks: CheckInterfaceEmployee = {...checkEmployee};

        for (const key of keys) {
            if (key === 'repeatEmail') {
                newChecks[key] = dataEmployee.email === dataEmployee.repeatEmail && dataEmployee.repeatEmail !== '' ? 'correct' : 'incorrect';
            } else {
                newChecks[key] = validators[key](dataEmployee[key]) ? 'correct' : 'incorrect';

            }
        }

        setCheckEmployee(newChecks);

        return keys.every((key) => newChecks[key] !== 'incorrect');
    };

    return {
        data, dataEmployee,
        checkEsal,
        checkEmployee,
        setData,
        setDataEmployee,
        validateEsal, validateEmployee
    };
};
