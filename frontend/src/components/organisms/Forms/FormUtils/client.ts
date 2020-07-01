import { BASE } from '../../../../utils/base';
import { ROUTE } from '../../../../utils/routes';


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
}


function setCookie(key: string, value: any) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
  document.cookie = `${key}=${value}; expires=${expires.toUTCString()}; path=/;`;
}

function getCookie(key: string) {
  const keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : null;
}
