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
  photo = '',
  city = 'city',
  localization = 'localization',
  agesRange = '15-30',
  startDay = '01/01/2020',
  finishDay = '01/01/2020',
}) => (
  <div className="ConvocatoryCard">
    <img src={photo} alt="Imagen de convocatoria" />
    <div className="ContentConvocatory">
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <div className="ContentInfo">
        <div className="ContentInfoRows">
          <img src={town} alt="Ciudad de inicio" /> <p>{city}</p>
        </div>
        <div className="ContentInfoRows">
          <img src={location} alt="Lugar de inicio" /> <p>{localization}</p>
        </div>
        <div className="ContentInfoRows">
          <img src={ages} alt="Rango de edades" /> <p>{agesRange}</p>
        </div>
        <div className="ContentInfoRows">
          <img src={ages} alt="icono fecha de inicio" /> <p>Inicio: {startDay}</p>
        </div>
        <div className="ContentInfoRows">
          <img src={ages} alt="icono fecha de fin" /> <p> Fin: {finishDay}</p>
        </div>
        {<LinkButton path={ROUTE.convocatories.details} text={'Más información'} />}
      </div>
    </div>
  </div>
);

ConvocatoryCard.displayName = 'ConvocatoryCard';
