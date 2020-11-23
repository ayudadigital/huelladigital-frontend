import { convocatoryRepository } from '../../infrastructure/repositories/Convocatory.repository';
import { Convocatory } from '../models/Convocatory';

const registerConvocatory = (convocatory: Convocatory, file: string) => {
    const response = convocatoryRepository.createConvocatory(convocatory, file);
    console.log(response);
};

export const ConvocatoryService = { registerConvocatory };
