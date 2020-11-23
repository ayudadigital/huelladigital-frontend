import { VolunteerDto } from './VolunteerDTO';

export interface ProposalDTO {
  id?: string;
  title: string;
  esalName: string;
  province: number;
  town: string;
  address: string;
  minimumAge: number;
  maximumAge: number;
  startingProposalDate: string;
  startingVolunteeringDate: string;
  closingProposalDate: string;
  status: number;
  description: string;
  instructions: string;
  extraInfo: string;
  durationInDays: number;
  category: string;
  imageURL: string;
  inscribedVolunteers: [VolunteerDto] | null;
  inscribedVolunteersCount: number;
  skills: [SkillDto] | null;
  requirements: [string];
}

export interface SkillDto {
  name: string;
  description: string;
}

export interface ProposalListDTO {
  proposals: ProposalDTO[];
}
