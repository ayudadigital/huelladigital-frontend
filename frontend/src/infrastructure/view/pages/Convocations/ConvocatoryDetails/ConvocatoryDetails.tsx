import * as React from 'react';
import './ConvocatoryDetails.scss';
import {Convocatory} from '../../../../../domain/models/Convocatory';
import exampleConvocatory from './exampleConvocatory.json';

export const ConvocatoryDetails: React.FC<{}> = () => {
  const convocatory = exampleConvocatory.Convocatory as Convocatory;
  return (
    <div className="ConvocatoryDetails">
      <div className="img-title-container">
        <div className="title">
          <h2>{convocatory.title}</h2>
        </div>
      </div>
    </div>
  );
};

ConvocatoryDetails.displayName = 'ConvocatoryDetails';
