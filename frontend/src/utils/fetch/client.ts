import { BASE } from '../base';
import { ROUTE } from '../routes';
import { setCookie } from './cookies';


export default class Client {
  async registerVolunteer(credentials: object) {
    const URL = `${BASE.API}${ROUTE.API.volunteers.register}`;
    return await fetch(URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        if (response.status === 201 || response.status === 200) {

          JSON.stringify(response.json().then((res: { accessToken: string, refreshToken: string }) => {
            setCookie('accessToken', res.accessToken);
            setCookie('refreshToken', res.refreshToken);
          }));
          window.location.replace(`${BASE.URI}${ROUTE.email.confirmation}`);
        } else if (response.status === 409) {
          return 409;
        }
      })
      // tslint:disable-next-line:no-console
      .catch((error) => console.log(error));
  }

  async loginVolunteer(credentials: object) {
    const URL = `${BASE.API}${ROUTE.API.volunteers.login}`;

    return await fetch(URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        if (response.status === 201 || response.status === 200) {
          JSON.stringify(response.json().then((res: { accessToken: string, refreshToken: string }) => {
            setCookie('accessToken', res.accessToken);
            setCookie('refreshToken', res.refreshToken);
          }));
          window.location.replace(`${BASE.URI}${ROUTE.home}`);

          return 'OK';
        } else {
          return 'ERROR';
        }
      })
      // tslint:disable-next-line:no-console
      .catch((error) => console.log(error));
  }
}
