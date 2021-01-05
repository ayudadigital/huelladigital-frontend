import { NumericLiteral } from 'typescript';
import { convocatoryRepository } from '../../infrastructure/repositories/Convocatory.repository';
import { Convocatory } from '../models/Convocatory';

const registerConvocatory = (convocatory: Convocatory, file: string) => {
  const response = convocatoryRepository.createConvocatory(convocatory, file);
};

const getConvocatoryList = (page: number, size: number): Array<Convocatory> => convocatoryRepository.getConvocatories(page, size);

export const ConvocatoryService = { registerConvocatory, getConvocatoryList };

