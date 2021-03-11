import { Esal, EsalEmployee } from '../models/Esal';
import { ESALRepository } from '../../infrastructure/repositories/ESAL.repository';
import { activateAuth } from '../../infrastructure/http/cookies';

const regsiterBunch = (esalEmployee: EsalEmployee, esal: Esal) => {
  ESALRepository.registerEsalEmployee(esalEmployee).then((response: any) => {
    if (response.status === 201) {
      JSON.stringify(
        response
          .json()
          .then((res: { accessToken: string; refreshToken: string; roles: string }) => {
            activateAuth(res.accessToken, res.refreshToken, res.roles[0]);
            console.log(res);
            ESALRepository.registerEsal(esal).then((response: any) => {});
          }),
      );
    }
  });
};

export const EsalService = {
  regsiterBunch,
};
