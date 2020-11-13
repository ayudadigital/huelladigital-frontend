import {Convocatory} from '../models/Convocatory';
import {Volunteer} from '../models/Volunteer';

const addVolunteer = (volunteer: Volunteer, convocatory: Convocatory) => {
    // repository.addVolunteer(volunteer, convocatory);
};

const getConvocatories = () => {
    // return repository.getConvocatories();
};

const getConvocatory = (convocatory: Convocatory) => {
    // return repository.getConvocatory(convocatory.id);
};

export const ConvocatoryService = {
    addVolunteer,
    getConvocatories,
    getConvocatory
};