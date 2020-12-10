import * as React from 'react';
import './ConvocatoryDetails.scss';
import {Convocatory,Skill} from '../../../../../domain/models/Convocatory';
import exampleConvocatory from './exampleConvocatory.json';
import {Image} from '../../../components/atoms/Image';
import {ConvocatoryListRequirements} from '../../../components/molecules/ConvocatoryListRequirements';
import {ConvocatoryListSkills} from '../../../components/molecules/ConvocatoryListSkills';
import {ConvocatoryTextSection} from '../../../components/molecules/ConvocatoryTextSection';

export const ConvocatoryDetails: React.FC<{}> = () => {
<<<<<<< HEAD
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
=======
  const [active, setActive] = useState('Descripción');

  function handleClick(clicked: string) {
    setActive(clicked);
  }

  const convocatory = exampleConvocatory;

  const menu = [
    {
      title: 'Descripción',
      icon: <DescriptionIcon fill={active === 'Descripción' ? 'black' : '#AEAEAE'} />,
    },
    {
      title: 'Requisitos',
      icon: <RequisitosIcon fill={active === 'Requisitos' ? 'black' : '#AEAEAE'} />,
    },
    {
      title: 'Información',
      icon: <InformationIcon fill={active === 'Información' ? 'black' : '#AEAEAE'} />,
    },
  ];
  return (
    <div className="ConvocatoryDetails">
      <div className="Panel">
        <img src={convocatory.imageURL} />
        <div className="AttributesList">
          {menu.map((menuItem) => (
            <span
              onClick={() => handleClick(menuItem.title)}
              className="MenuItem"
              style={{ color: active === menuItem.title ? 'black' : '#AEAEAE' }}
            >
              {menuItem.icon}
              {menuItem.title}
              <div className={active === menuItem.title ? 'Selected' : 'Not-selected'} />
            </span>
          ))}
        </div>
      </div>
      <div className="Panel">
        <div className="MainInfo">
          <h2>{convocatory.title}</h2>
          <span className="Tag">#{convocatory.category}</span>
          <div className="IconGrid">
            <div className="Icon-calendar" />
            Hasta el {convocatory.closingProposalDate}
          </div>
          <div className="IconGrid">
            <div className="Icon-organization" />
            {convocatory.esalName}
          </div>
          <div className="IconGrid">
            <div className="Icon-location" />
            {convocatory.address}
          </div>
        </div>
        <div className="MenuInfoContainer"></div>
>>>>>>> develop
      </div>
    </div>
  );
};

ConvocatoryDetails.displayName = 'ConvocatoryDetails';
