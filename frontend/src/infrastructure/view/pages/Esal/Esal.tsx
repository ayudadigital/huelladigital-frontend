import * as React from 'react';
import './Esal.scss';
import { FieldForm } from '../../components/molecules/FieldForm';

export const Esal: React.FC<{}> = () => (
         <div className="Esal">
           <header>
             <h1>Persona de Contacto</h1>
           </header>
           <section className="contactPerson">
             <FieldForm title={'Nombre *'} type={'text'} name={'Nombre'} />
             <FieldForm title={'Apellidos *'} type={'text'} name={'Apellidos'} />
             <FieldForm title={'Email *'} type={'email'} name={'Email'} />
             <FieldForm
               title={'Confirmar Email *'}
               type={'email'}
               name={'ConfirmarEmail'}
             />
             <FieldForm title={'Teléfono de contacto'} type={'text'} name={'Telefono'} />
             <FieldForm title={'Contraseña *'} type={'text'} name={'Contaseña'} />
           </section>
         </div>
       );

Esal.displayName = 'Esal';
