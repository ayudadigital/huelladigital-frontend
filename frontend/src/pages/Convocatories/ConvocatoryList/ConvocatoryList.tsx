import * as React from 'react';
import './ConvocatoryList.scss';
import { LinkButton } from '../../../components/atoms/LinkButton/LinkButton';
import { ROUTE } from '../../../utils/routes';
import convocatoryImage from '../assets/Convocatory-images/Igueste.jpg';
import ages from '../assets/Convocatory-icons/ages.jpeg';
import location from '../assets/Convocatory-icons/location.jpeg';
import town from '../assets/Convocatory-icons/town.jpeg';

export const ConvocatoryList: React.FC<{}> = () => (
  <div className="ConvocatoryList">
    <h2 className="Title">Convocatorias</h2>
    <div className="ConvocatoryCard">
      <img src={convocatoryImage} alt="Imagen de convocatoria" />
      <div className="ContentConvocatory">
        <h3>Recogida de residuos: Igueste de San Andres</h3>
        <p>
          Se requieren voluntarios/as para colaborar con un grupo de recogida de residuos
          en la playa de Igueste de San Andrés. Se organizaran varios grupos a los que se
          les proporcionarán bolsas y guantes para la recogida de todo tipo de residuos.
        </p>
        <div className="ContentInfo">
          <div className="ContentInfoRows">
            <img src={town} alt="Ciudad de inicio" /> Santa Cruz de Tenerife
          </div>
          <div className="ContentInfoRows">
            <img src={location} alt="Lugar de inicio" />
            Igueste de San Andrés
          </div>
          <div className="ContentInfoRows">
            <img src={ages} alt="Rango de edades" />
            16-30
          </div>
          <div className="ContentInfoRows">
            <img src={ages} alt="icono fecha de inicio" />
            Inicio: 10/06/2020
          </div>
          <div className="ContentInfoRows">
            <img src={ages} alt="icono fecha de fin" />
            Fin: 10/06/2020
          </div>
          <LinkButton path={ROUTE.convocatory.convocatories.details} text={'More info'} />
        </div>
      </div>
    </div>
  </div>
);

ConvocatoryList.displayName = 'ConvocatoryList';
