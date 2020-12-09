import * as React from 'react';
import './ConvocatoryDetails.scss';
import {Convocatory,Skill} from '../../../../../domain/models/Convocatory';
import exampleConvocatory from './exampleConvocatory.json';
import {Image} from '../../../components/atoms/Image';
import {ConvocatoryListRequirements} from '../../../components/molecules/ConvocatoryListRequirements';
import {ConvocatoryListSkills} from '../../../components/molecules/ConvocatoryListSkills';
import {ConvocatoryTextSection} from '../../../components/molecules/ConvocatoryTextSection';

export const ConvocatoryDetails: React.FC<{}> = () => {
  const convocatory = exampleConvocatory.Convocatory as Convocatory;
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
            <ConvocatoryTextSection title="¿Qué voy a hacer?" content = {convocatory.description}/>
            <ConvocatoryListSkills title="¿Qué habilidades desarrollaré para mi CV?" skills={convocatory.skills}/>
            <ConvocatoryListRequirements title="¿Qué necesito?" requirements = {convocatory.requirements}/>
            <ConvocatoryTextSection title="¿Qué más necesito saber?" content={convocatory.extraInfo}/>
          </div>
        </div>
      </div>
    </div>
  );
};

ConvocatoryDetails.displayName = 'ConvocatoryDetails';
