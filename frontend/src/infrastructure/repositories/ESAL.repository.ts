import { Esal, EsalEmployee } from '../../domain/models/Esal';
import { BASE } from '../base';
import { EsalDTO, EsalEmployeeDTO } from '../http/dtos/EsalDTO';
import { http } from '../http/http';
import { ROUTE } from '../http/routes';

const associationWithUnicode = `Asociaci\u00F3n`;
const foundationWithUnicode = `Fundaci\u00F3n`;

const ASSOCIATION_EQUIVALENCE_TABLE: { [key: string]: string } = {
  [associationWithUnicode]: 'ASSOCIATION',
  [foundationWithUnicode]: 'FOUNDATION',
  'Club Deportivo': 'SPORTS_CLUB',
  'Colegio Profesional': 'COLLEGE_PROFESSIONAL',
  'Federacion Deportiva': 'SPORTS_FEDERATION',
};
const registerEmployee = (newEmployee: EsalEmployee) => {
  const esalEmployeeDTO: EsalEmployeeDTO = {
    name: newEmployee.name,
    surname: newEmployee.surname,
    phoneNumber: newEmployee.phoneNumber,
    email: newEmployee.email,
    password: newEmployee.password,
  };
  return new Promise((resolve, reject) =>
    http
      .post(
        `${BASE.API}/${ROUTE.API.organizations.registerEsalEmployee}`,
        JSON.stringify(esalEmployeeDTO),
        'application/json',
        false,
      )
      .then((response) => {
        resolve(response);
      }),
  );
};
const registerEsal = (newEsal: Esal) => {
  const newEsalDTO: EsalDTO = {
    name: newEsal.name,
    description: newEsal.description,
    website: newEsal.website,
    registeredEntity: newEsal.registeredEntity,
    entityType: ASSOCIATION_EQUIVALENCE_TABLE[newEsal.entityType],
    privacyPolicy: newEsal.privacyPolicy,
    dataProtectionPolicy: newEsal.dataProtectionPolicy,
    island: newEsal.island,
    zipCode: newEsal.zipCode,
  };
  return new Promise((resolve, reject) => {
    http
      .post(
        `${BASE.API}/${ROUTE.API.organizations.register}`,
        JSON.stringify(newEsalDTO),
        'application/json',
        true,
      )
      .then((response) => {
        resolve(response);
      })
      .catch((rej) => reject(rej));
  });
};

const uploadLogo = () => {};

export const ESALRepository = {
  registerEsal,
  registerEmployee,
};
