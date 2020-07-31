import * as React from 'react';
import './ConvocatoryList.scss';
import { ConvocatoryCard } from '../../../components/organisms/ConvocatoryCard';
import exampleConvocatoryList from './exampleConvocatoryList.json';
import { ConvocatoryCardProps } from '../../../components/organisms/ConvocatoryCard/types';

export const ConvocatoryList: React.FC<{}> = () => (
  <div className="ConvocatoryList">
    <h2 className="Title">Convocatorias</h2>
    {exampleConvocatoryList.map((convocatory: ConvocatoryCardProps) => (
      <ConvocatoryCard
        title={convocatory.title}
        description={convocatory.description}
        photo={convocatory.photo}
        city={convocatory.city}
        localization={convocatory.localization}
        agesRange={convocatory.agesRange}
        startDay={convocatory.startDay}
        finishDay={convocatory.finishDay}
      />
    ))}
    <div className={'pageNav'}>
      <button>Anterior</button>
      <p>1 - 2- 3 - 5 .... 30</p>
      <button>Siguiente</button>
    </div>
  </div>
);

ConvocatoryList.displayName = 'ConvocatoryList';
