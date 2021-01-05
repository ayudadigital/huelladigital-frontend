import { Convocatory } from '../../domain/models/Convocatory';
import { ProposalDTO } from '../http/dtos/ProposalDTO';
import { http } from '../http/http';
import { ROUTE } from '../http/routes';
import { BASE } from '../base';
import {Skill} from '../../domain/models/Convocatory';

const createConvocatory = (convocatory: Convocatory, file: string) => {
  const proposalDto: ProposalDTO = {
    title: convocatory.title,
    esalName: convocatory.organizer,
    province: convocatory.province,
    town: convocatory.town,
    address: convocatory.address,
    minimumAge: convocatory.minimumAge,
    maximumAge: convocatory.maximumAge,
    startingProposalDate: convocatory.startingDate,
    startingVolunteeringDate: convocatory.startingVolunteeringDate,
    closingProposalDate: convocatory.closingDate,
    status: convocatory.status,
    description: convocatory.description,
    instructions: convocatory.instructions,
    extraInfo: convocatory.extraInfo,
    durationInDays: convocatory.duration,
    category: convocatory.category,
    imageURL: convocatory.imageURL,
    inscribedVolunteers: null,
    inscribedVolunteersCount: 0,
    skills: convocatory.skills,
    requirements: convocatory.requirements,
  };

  const content = new FormData();
  content.append('dto', JSON.stringify(proposalDto));
  content.append('file', file);
  const response = http
    .post(
      `${BASE.API}${ROUTE.API.convocatories.register}`,
      content,
      'multipart/data-form',
      true,
    )
    .then((response) => {
      console.log(response);
    });
  return response;
};

const  getConvocatories  =  (page: number, size: number): Convocatory[] => {
  const response =  http.get(`${BASE.API}${ROUTE.API.convocatories.fetchListOfConvocatories(page,size)}`)

  const convocatory: Convocatory = {
    id: 1,
    title: "string",
    organizer: "string",
    category: "string",
    endingDate: "string",
    minimumAge: 1,
    maximumAge: 1,
    province: 1,
    town: "string",
    address: "string",
    startingDate: "string",
    closingDate: "string",
    startingVolunteeringDate: "string",
    status: 1,
    description: "string",
    instructions: "string", //¿Qué voy a hacer?
    extraInfo: "string", //¿Qué más necesito saber?
    duration: 1,
    imageURL: "string",
    inscribedVolunteers: null,
    inscribedVolunteersCount: 1,
    skills: [{
      name: 'Javi',
      description: 'Basket lover',
    }],
    requirements: ["string"],
  };

  console.log(response);
  return [convocatory];

};

export const convocatoryRepository = { createConvocatory, getConvocatories };
