import * as React from 'react';
import './ConvocatoryDetails.scss';
import {Convocatory} from '../../../../../domain/models/Convocatory';
import exampleConvocatory from './exampleConvocatory.json';
import {Image} from '../../../components/atoms/Image';

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
      </div>
    </div>
  );
};

ConvocatoryDetails.displayName = 'ConvocatoryDetails';
