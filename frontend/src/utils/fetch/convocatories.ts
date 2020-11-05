import { BASE } from '../base';
import { ROUTE } from '../routes';
import { ConvocatoryDto } from '../dto';
import { getCookie } from './cookies';


export default class ConvocatoriesFetch {
    async getConvocatoriesPage(page: number, size: number) {
        const URL = `${BASE.API}${ROUTE.API.convocatories.fetchListOfConvocatories(page, size)}`;
        return await fetch(URL, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'accept': '*/*'
            }
        })
            .then((response) => {
                if (response.status === 201 || response.status === 200) {
                    return response.json();
                } else {
                    return response.status;
                }
            });
    }

    async addNewConvocatory(convocatoryData: ConvocatoryDto) {
        const URL = `${BASE.API}${ROUTE.API.convocatories.register}`;
        let file;
        if (window.localStorage.getItem('Image')) {
            file = window.localStorage.getItem('Image');
        } else {
            file = '';
        }
        return await fetch(URL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: JSON.stringify({convocatoryData, file, contactPersonEmail:''})
        }).then((response) => {
            console.log(response);
        })
    }
}