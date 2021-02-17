import * as React from 'react';
import { useParams } from 'react-router-dom';
import './ConvocatoryVolunteers.scss';

interface ParamsTypes {
  id: string;
}

export const ConvocatoryVolunteers: React.FC<{}> = () => {
  const params = useParams<ParamsTypes>();
  console.log(params.id);
  return (<div className="ConvocatoryVolunteers">
    Hello from ConvocatoryVolunteers! The id required is {params.id}
  </div>);
};


ConvocatoryVolunteers.displayName = 'ConvocatoryVolunteers';