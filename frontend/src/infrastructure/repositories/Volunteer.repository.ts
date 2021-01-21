import { VolunteerCredentialsDTO } from '../http/dtos/CredentialsDTO';
import { http } from '../http/http';
import { ROUTE } from '../http/routes';
import { BASE } from '../base';
import { activateAuth } from '../http/cookies';
import { VolunteerCredential } from '../../domain/models/Credential';

const login = (loginCredentials: VolunteerCredential) => {
  http
    .post(`${BASE.API}${ROUTE.API.volunteers.login}`, JSON.stringify(loginCredentials))
    .then((response) => {
      if (response.status === 201 || response.status === 200) {
        JSON.stringify(
          response
            .json()
            .then((res: { accessToken: string; refreshToken: string; roles: string }) => {
              activateAuth(res.accessToken, res.refreshToken, res.roles[0]);
            }),
        );
        window.location.replace(`${BASE.URI}${ROUTE.home}`);

        return 200;
      } else {
        return 403;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const register = (registerCredentials: VolunteerCredentialsDTO) => {
  http
    .post(
      `${BASE.API}${ROUTE.API.volunteers.register}`,
      JSON.stringify(registerCredentials),
    )
    .then((response) => {
      if (response.status === 201 || response.status === 200) {
        JSON.stringify(
          response
            .json()
            .then((res: { accessToken: string; refreshToken: string; roles: string }) => {
              activateAuth(res.accessToken, res.refreshToken, res.roles[0]);
            }),
        );
        window.location.replace(`${BASE.URI}${ROUTE.email.confirmation}`);
      } else if (response.status === 409) {
        return 409;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const volunteerRepository = {
  login,
  register,
};
