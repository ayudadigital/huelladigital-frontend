import { Convocatory, Skill } from '../../domain/models/Convocatory';
import { ProposalDTO, SkillDto } from '../http/dtos/ProposalDTO';
import { http } from '../http/http';
import { ROUTE } from '../http/routes';
import { VolunteerDto } from '../http/dtos/VolunteerDTO';
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

  const response = http.post(
    `${BASE.API}${ROUTE.API.convocatories.register}`,
    JSON.stringify({ proposalDto, file }),
  );
  return response;
};

export const convocatoryRepository = { createConvocatory };
