import * as React from 'react';
import './ConvocatoryDetails.scss';
import exampleConvocatory from './assets/exampleConvocatory.json';
import { useState } from 'react';
import { url } from 'inspector';
import { ReactComponent as DescriptionIcon } from './assets/Description.svg';
import { ReactComponent as RequisitosIcon } from './assets/Requisites.svg';
import { ReactComponent as InformationIcon } from './assets/Information.svg';
import HamburguerMenuStories from '../../../components/molecules/HamburguerMenu/HamburguerMenu.stories';
import { convertCompilerOptionsFromJson } from 'typescript';

export const ConvocatoryDetails: React.FC<{}> = () => {
  const [active, setActive] = useState('Descripción');

  function handleClick(clicked:string) {
    setActive(clicked)
  }

  const convocatory = exampleConvocatory;

  const menu = [
    {
      title: 'Descripción',
      icon: <DescriptionIcon fill={active === 'Descripción'? 'black' : '#AEAEAE' }/>
    },
    {
      title: 'Requisitos',
      icon: <RequisitosIcon fill={active === 'Requisitos'? 'black' : '#AEAEAE' }/>
    },
    {
      title: 'Información',
      icon: <InformationIcon fill={active === 'Información'? 'black' : '#AEAEAE' }/>
    }
  ];
  return (
    <div className="ConvocatoryDetails">
      <div className="Panel">
        <img src = {convocatory.imageURL}/>
        <div className="AttributesList">
          {
            menu.map((menuItem) => (
              <span onClick={() => handleClick(menuItem.title)} className="MenuItem" style={{color: active === menuItem.title ? 'black' : '#AEAEAE'}}>
                {menuItem.icon}
                {menuItem.title}
                <div className={active===menuItem.title ? 'Selected' : 'Not-selected'}/>
              </span>
            ))
          }
        </div>
      </div>
      <div className="Panel">
          <div className="MainInfo">
            <h2>{convocatory.title}</h2>
            <span className="Tag">#{convocatory.category}</span>
            <div className="IconGrid">
              <div className="Icon-calendar"/>
              Hasta el {convocatory.closingProposalDate}
            </div>
            <div className="IconGrid">
              <div className="Icon-organization"/>
              {convocatory.esalName}
            </div>
            <div className="IconGrid">
              <div className="Icon-location"/>
              {convocatory.address}
            </div>
          </div>
          <div className="MenuInfoContainer">
            
          </div>
      </div>
    </div>
  );
};

ConvocatoryDetails.displayName = 'ConvocatoryDetails';
