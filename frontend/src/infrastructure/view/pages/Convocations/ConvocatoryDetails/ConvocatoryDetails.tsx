import * as React from 'react';
import './ConvocatoryDetails.scss';
import {Convocatory,Skill} from '../../../../../domain/models/Convocatory';
import exampleConvocatory from './exampleConvocatory.json';
import {Image} from '../../../components/atoms/Image';

export const ConvocatoryDetails: React.FC<{}> = () => {
  const listRequirements = (requirements: string[]) => {
    let result = '<ul>';
    requirements.forEach((requirement) => {
      result += '<ul>' + requirement + '</ul>';
    });
    return result + '</ul>';
  }
  const listSkills = (skills: Skill[]) => {
    let result = '<ul>';
    skills.forEach(skill => {
      result += '<li>'+ skill.name+': '+skill.description+'</li>';
    });
    return result + '</ul>';
  };
  const convocatory = exampleConvocatory.Convocatory as Convocatory;
  const sections = [{
    question: '¿Qué voy a hacer?',
    text: convocatory.description
  },
  {
    question: '¿Qué habilidades desarrollaré para mi CV?',
    text: listSkills(convocatory.skills)
  },
  {
    question: '¿Qué necesito?',
    text: listRequirements(convocatory.requirements),
  },
  {
    question: '¿Qué más necesito saber',
    text: convocatory.extraInfo
  }];
  return (
    <div className="ConvocatoryDetails">
      <div className="Convocatory">
        <div className="Img-title-container">
          <Image source={convocatory.imageURL} description=""></Image>
          <div className="Title">
            <h2>{convocatory.title}</h2>
          </div>
        </div>
        <div className="Content">
          <div className="TableContainer">
            {/** Table component **/}
          </div>
          <div className="ConvocatoryInfo">
            {sections.map((section)=> {
              return <>
              <h3>{section.question}</h3>
              <p>{section.text}</p>
              </>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

ConvocatoryDetails.displayName = 'ConvocatoryDetails';
