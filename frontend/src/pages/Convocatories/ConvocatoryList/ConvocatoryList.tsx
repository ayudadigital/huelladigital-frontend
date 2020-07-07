import * as React from 'react';
import './ConvocatoryList.scss';
import { LinkButton } from '../../../components/atoms/LinkButton/LinkButton';
import { ROUTE } from '../../../utils/routes';

export const ConvocatoryList: React.FC<{}> = () => (
  <div className="ConvocatoryList">
    <h2 className="Title">Convocatorias</h2>
    <div className="ConvocatoryCard">
      <img src="" alt="" />
      <div className="content">
        <h3>Recogida de residuos: Igueste de San Andres</h3>
        <p>
          Se requieren voluntarios/as para colaborar con un grupo de recogida de residuos
          en la playa de Igueste de San Andrés. Se organizaran varios grupos a los que se
          les proporcionarán bolsas y guantes para la recogida de todo tipo de residuos.
        </p>
        <div className="content-info">
          <div className="columns">
            <i></i>Santa Cruz de Tenerife
          </div>
          <div className="columns">
            <i></i>Igueste de San Andrés
          </div>
          <div className="columns">
            <i></i>16-30
          </div>
          <div className="columns">
            <i></i>Inicio: 10/06/2020
          </div>
          <div className="columns">
            <i></i>Fin: 10/06/2020
          </div>
        </div>
        <LinkButton path={ROUTE.convocatory.convocatories.details} text={'More info'} />
      </div>
    </div>
  </div>
);

ConvocatoryList.displayName = 'ConvocatoryList';
