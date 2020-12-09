import * as React from 'react';
import { Skill } from '../../../../../domain/models/Convocatory';
import './ConvocatoryListSkills.scss';

interface ConvocatoryListSkillsProps {
  title: string;
  skills: Skill[] | null;
}

export const ConvocatoryListSkills: React.FC<ConvocatoryListSkillsProps> = ({title, skills}) => (
  <div className="ConvocatoryListSkills">
    <h3>{title}</h3>
    {skills && skills.map((skill: Skill) => {
      return <>
        <h5>{skill.name}</h5>
        <p>{skill.description}</p>
      </>
    })}
  </div>
);

ConvocatoryListSkills.displayName = 'ConvocatoryListSkills';
