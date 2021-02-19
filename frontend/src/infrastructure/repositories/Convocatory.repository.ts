import { Convocatory } from '../../domain/models/Convocatory';
import { ProposalDTO } from '../http/dtos/ProposalDTO';
import { http } from '../http/http';
import { ROUTE } from '../http/routes';
import { BASE } from '../base';

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
      `${BASE.API}${ROUTE.API.proposals.register}`,
      content,
      'multipart/data-form',
      true,
    )
    .then((response) => {
      console.log(response);
    });
  return response;
};

const submitForRevision = (id: string, feedback: string | null) => {
  const hasFeedBack = !!feedback;
  const body = {
    feedback: feedback,
    hasFeedback: hasFeedBack,
  };
  return http.post(
    `${BASE.API}${ROUTE.API.proposals.submitRevision(id)}`,
    JSON.stringify(body),
    'application/json',
    true,
  );
};

export const convocatoryRepository = { createConvocatory, submitForRevision };
