import {Esal, EsalEmployee} from '../models/Esal';
import {ESALRepository} from '../../infrastructure/repositories/ESAL.repository';
import {activateAuth} from '../../infrastructure/http/cookies';

const registerEsal = async (esal: Esal) => {
    await ESALRepository.registerEsal(esal).then((response: any) => {
        if (response.status === 201) {
            console.log(response);
            // Añadir logo si existe
            // Routing (¿Qué pagina se muestra a continuación?)
        }
    });
};

const registerBunch = async (esal: Esal, newEmployee: EsalEmployee) => {
    await ESALRepository.registerEmployee(newEmployee).then((response: any) => {
        if (response.status === 201) {
            JSON.stringify(
                response
                    .json()
                    .then((res: { accessToken: string; refreshToken: string; roles: string }) => {
                        activateAuth(res.accessToken, res.refreshToken, res.roles[0]);
                        // console.log(res);
                        registerEsal(esal);
                    }),
            );
        }
    });
};

export const EsalService = {
    registerBunch,
};
