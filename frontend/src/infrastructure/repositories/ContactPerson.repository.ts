import { EsalEmployee } from '../../domain/models/Esal';
import { EsalEmployeeDTO } from '../http/dtos/EsalDTO';
import { http } from '../http/http';
import { BASE } from '../base';
import { ROUTE } from '../http/routes';

const registerEsalEmployee = (newEmployee: EsalEmployee) => {
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

export const ContactPersonRepository = { registerEsalEmployee };
