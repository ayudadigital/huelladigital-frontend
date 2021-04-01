import { EsalEmployee } from '../models/Esal';
import { ContactPersonRepository } from '../../infrastructure/repositories/ContactPerson.repository';
import { activateAuth } from '../../infrastructure/http/cookies';

const registerContactPerson = (esalEmployee: EsalEmployee) => {
  ContactPersonRepository.registerEsalEmployee(esalEmployee).then((response: any) => {
    if (response.status === 201 || response.status === 200) {
      JSON.stringify(
        response
          .json()
          .then((res: { accessToken: string; refreshToken: string; roles: string }) => {
            activateAuth(res.accessToken, res.refreshToken, res.roles[0]);
          }),
      );
    }
  });
};

export const ContactPersonService = { registerContactPerson };
