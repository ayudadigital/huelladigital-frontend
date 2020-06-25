import { BASE } from '../../../../utils/base';
import { ROUTE } from '../../../../utils/routes';


export default class Client {
  registerVolunteer(credentials: object) {
    const URL = `${BASE.API}${ROUTE.API.volunteers.register}`;
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        if (response.status === 201 || response.status === 200) {
          window.location.replace(`${BASE.URI}${ROUTE.email.confirmation}`);
        }
      })
      // tslint:disable-next-line:no-console
      .catch((error) => console.log(error));
  }
}


