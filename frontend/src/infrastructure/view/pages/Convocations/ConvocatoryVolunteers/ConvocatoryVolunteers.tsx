import * as React from 'react';
import { useParams } from 'react-router-dom';
import { InscribedVolunteer } from '../../../../../domain/models/Convocatory';
import { VolunteerService } from '../../../../../domain/services/Volunteer.service';
import './ConvocatoryVolunteers.scss';

interface ParamsTypes {
  id: string;
}

export const ConvocatoryVolunteers: React.FC<{}> = () => {
  const initialVolunteers = [
    {
      id: "7cb55e62-c06a-4257-93a7-04110f7af4b0",
      emailAddress: "luis@laspalmas.com",
      confirmed: true
    },
    {
      id: "7cb55e62-c06a-4257-93a7-04110f7af4b1",
      emailAddress: "pepe@tenerife.com",
      confirmed: true
    },
    {
      id: "7cb55e62-c06a-4257-93a7-04110f7af4b2",
      emailAddress: "feluco@lanzarote.com",
      confirmed: true
    }
  ];
  const params = useParams<ParamsTypes>();
  const [volunteers, setVolunteers] = React.useState<InscribedVolunteer[]>(initialVolunteers);
  const [desestimatedVolunteers, setDesestimatedVolunteers] = React.useState<InscribedVolunteer[]>([]);
  // volunteer data request
  /*const volunteers = 
  */

  const desestimateVolunteer = (id: number) => {
    const desestimatedVolunteer: InscribedVolunteer = volunteers[id];
    setVolunteers(volunteers.filter(volunteer => volunteer != desestimatedVolunteer));
    setDesestimatedVolunteers(desestimatedVolunteers => [...desestimatedVolunteers, desestimatedVolunteer])
  }

  const undesestimateVolunteer = (id: number) => {
    const desestimatedVolunteer: InscribedVolunteer = desestimatedVolunteers[id];
    setDesestimatedVolunteers(desestimatedVolunteers.filter(volunteer => volunteer != desestimatedVolunteer));
    setVolunteers(volunteers => [...volunteers, desestimatedVolunteer])
  }

  return (
    <div className="ConvocatoryVolunteers">
      <main className="container">
        <h2>
          Voluntarios inscritos
        </h2>
        <table>
          <tr>
            <th>Dirección de correo</th>
            <th>Desestimar</th>
          </tr>
          {
            volunteers &&
            volunteers.map((volunteer: InscribedVolunteer, id: number) => {
              return (
                <tr>
                  <td>
                    {volunteer.emailAddress}
                  </td>
                  <td>
                    <button onClick={() => desestimateVolunteer(id)}>Desestimar</button>
                  </td>
                </tr>
              )
            })
          }
        </table>
        <h2>
          Voluntarios desestimados
        </h2>
        <table id="desestimados">
          <tr>
            <th>Dirección de correo</th>
            <th>Aceptar</th>
          </tr>
          {
            desestimatedVolunteers &&
            desestimatedVolunteers.map((volunteer: InscribedVolunteer, id: number) => {
              return (
                <tr>
                  <td>
                    {volunteer.emailAddress}
                  </td>
                  <td>
                    <button onClick={() => undesestimateVolunteer(id)}>Aceptar</button>
                  </td>
                </tr>
              )
            })
          }
        </table>
      </main>
    </div>);
};


ConvocatoryVolunteers.displayName = 'ConvocatoryVolunteers';