import * as React from 'react';
import { useState } from 'react';
import './ConvocatoryList.scss';
import { ConvocatoryCard } from '../../../components/organisms/ConvocatoryCard';
import exampleConvocatoryList from './exampleConvocatoryList.json';
import { ConvocatoryCardProps } from '../../../components/organisms/ConvocatoryCard/types';
import { ConvocatoryService } from '../../../../../domain/services/Convocatory.service';
import { Convocatory } from '../../../../../domain/models/Convocatory'

export const ConvocatoryList: React.FC<{}> = () => {
  const [page, changePage] = useState(1);

  const [convocatories, setConvocatories] = useState<Convocatory[]>([]);
  const size = 5;

  React.useEffect(() => {
    setConvocatories(ConvocatoryService.getConvocatoryList(page, size));
  }, [page]);

  const nextPage = () => {
    changePage(page + 1);
  };
  const prevPage = () => {
    // tslint:disable-next-line: no-unused-expression
    page > 1 && changePage(page - 1);
  };

  return (
    <div className="ConvocatoryList">
      <h2 className="Title">Convocatorias</h2>
      {/* Change exampleConvocatoryList for convocatories for backend integration*/}
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
        <button onClick={() => prevPage()} className="navigation-button">
          Anterior
        </button>
        <p>1 - 2- 3 - 5 .... 30</p>
        <button onClick={() => nextPage()} className="navigation-button">
          Siguiente
        </button>
      </div>
    </div>
  );
};

ConvocatoryList.displayName = 'ConvocatoryList';
