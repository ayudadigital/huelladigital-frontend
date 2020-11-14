// This is a placeholder file
import {Volunteer} from './Volunteer';

export type Convocatory = {
    id: number;
    title: string;
    organizer: string;
    category: string;
    endingDate: string;
    minimumAge: number;
    maximumAge: number;
    province: number;
    town: string;
    address: string;
    startingDate: string;
    closingDate: string;
    startingVolunteeringDate: string;
    status: number;
    description: string;
    instructions: string;   //¿Qué voy a hacer?
    extraInfo: string;  //¿Qué más necesito saber?
    duration: number;
    imageURL: string;
    inscribedVolunteers: [Volunteer]
    inscribedVolunteersCount: number;
    skills: [Skill],
    requirements: [string]
};

export type Skill = {
    name: string;
    description: string;
};

