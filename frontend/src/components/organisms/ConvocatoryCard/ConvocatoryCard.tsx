import * as React from 'react';
import './ConvocatoryCard.scss';
import town from '../../../pages/Convocatories/assets/Convocatory-icons/town.jpeg';
import location from '../../../pages/Convocatories/assets/Convocatory-icons/location.jpeg';
import ages from '../../../pages/Convocatories/assets/Convocatory-icons/ages.jpeg';
import { LinkButton } from '../../atoms/LinkButton/LinkButton';
import { ROUTE } from '../../../utils/routes';
import { ConvocatoryCardProps } from './types';

export const ConvocatoryCard: React.FC<ConvocatoryCardProps> = ({
                                                title = 'title',
                                                description = 'description',
                                                photo =  '',
                                                city = 'city',
                                                localization = 'localization',
                                                agesRange = '15-30',
                                                startDay = '01/01/2020',
                                                finishDay = '01/01/2020',
                                              }) => (
  <div className="ConvocatoryCard">
    <div className="ConvocatoryCard">
      <img src={photo} alt="Imagen de convocatoria"/>
      <div className="ContentConvocatory">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="ContentInfo">
          <img className="ContentInfoRows" src={town} alt="Ciudad de inicio"/> {city}
          <img className="ContentInfoRows" src={location} alt="Lugar de inicio"/>{localization}
          <img className="ContentInfoRows" src={ages} alt="Rango de edades"/>{agesRange}
          <img className="ContentInfoRows" src={ages} alt="icono fecha de inicio"/>Inicio: {startDay}
          <img className="ContentInfoRows" src={ages} alt="icono fecha de fin"/> Fin: {finishDay}
        </div>
        <LinkButton path={ROUTE.convocatories.details} text={'More info'}/>
      </div>
    </div>
  </div>
);

ConvocatoryCard.displayName = 'ConvocatoryCard';
