// This is a placeholder file
export interface ConvocatoryDto {
    id: string;
    title: string;
    esalName: string;
    province: string;
    town: string;
    address: string;
    minimumAge: number;
    maximumAge: number;
    startingProposalDate: string;
    startingVolunteeringDate: string;
    closingProposalDate: string;
    status: string;
    description: string;
    instructions: string;
    extraInfo: string;
    durationInDays: string;
    category: string;
    imageURL: string;
    inscribedVolunteers: [VolunteerDto];
    inscribedVolunteersCount: 0;
    skills: [SkillDto];
    requirements: [
        string
    ];
}

export interface SkillDto {
    name: string;
    description: string;
}

export interface VolunteerDto {
    id: string;
}