import * as React from 'react';
import './Esal.scss';
import { FormRegisterEsal } from '../../components/organisms/Forms/FormRegisterEsal';

export const Esal: React.FC<{}> = () => {
  return (
    <div className="esal">
      <h1>Necesito Ayuda</h1>
      <div className="content">
        ¿Eres un colectivo o entidad y necesitas apoyo de voluntariado para llevar a cabo tu iniciativa?, ¿eres una persona con alguna necesidad y necesitas voluntarios que te ayuden? ¡No dudes en escribirnos!

        Esta plataforma ha sido creada justamente con este objetivo, el de ayudarnos entre todos para salir lo antes posible de este complicado momento que estamos viviendo.

        Si tienes alguna duda consulta nuestras preguntas frecuentes.
      </div>
      <div className="buttons">
        <button>ENTIDAD</button>
        <button>PERSONA FÍSICA</button>
      </div>
      {/* <FormRegisterEsal /> */}
    </div>

  )
};

Esal.displayName = 'Esal';
