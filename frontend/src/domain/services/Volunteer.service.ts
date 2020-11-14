import {Volunteer} from '../models/Volunteer';

// Importar el repository encargado de la comunicación con el back

const addCV = () => {
    // Repository.addCV()
};


const changePassword = () => {
    // repository.changePassword()
};

const editProfile = (newVolunteerData: Volunteer) => {
    // repository.changeProfile(newVolunteerData)
}



export const VolunteerService = {
    changePassword,
    addCV,
    editProfile
};