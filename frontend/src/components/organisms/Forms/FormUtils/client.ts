import { BASE } from '../../../../utils/base';
import { ROUTE } from '../../../../utils/routes';


export default class Client {
  registerVolunteer(credentials: object) {
    const URL = `${BASE.API}${ROUTE.API.volunteers.register}`;
    return fetch(URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        if (response.status === 201 || response.status === 200) {
          JSON.stringify(response.json().then(res => {
            window.document.cookie = `accessToken=${res.accessToken}; path=/;`;
            window.document.cookie = `refreshToken=${res.refreshToken}; path=/;`;
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
