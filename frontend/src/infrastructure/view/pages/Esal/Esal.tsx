import * as React from 'react';
import './Esal.scss';
import { FormRegisterContactPerson } from '../../components/organisms/Forms/FormRegisterContactPerson';
import { FormRegisterEsal } from '../../components/organisms/Forms/FormRegisterEsal';
import { FormRadio } from '../../components/molecules/FormRadio';
import { Label } from '../../components/atoms/Label';
import { LinkText } from '../../components/atoms/LinkText';
import { SubmitButton } from '../../components/atoms/SubmitButton';
import { MixFormRegisterEsal } from '../../components/organisms/Forms/MixFormRegisterEsal';

export const Esal: React.FC<{}> = () => (
  <div className="esal">
    {/*<h1>Registro Entidad</h1>*/}
    {/*<section className={'contact-persons'}>*/}
    {/*  <FormRegisterContactPerson />*/}
    {/*</section>*/}
    {/*<section className={'register-esals'}>*/}
    {/*  <FormRegisterEsal />*/}

    {/*  <div className={'row consents-check'}>*/}
    {/*    <Label text={'Consentimientos *'} />*/}
    {/*    <section className={'data-protection'}>*/}
    {/*      <FormRadio*/}
    {/*        title={'Política Privacidad'}*/}
    {/*        type={'checkbox'}*/}
    {/*        name={'Política Privacidad'}*/}
    {/*        value={''}*/}
    {/*        checked={false}*/}
    {/*      />*/}
    {/*      <p>*/}
    {/*        Estoy de acuerdo de con la {''}*/}
    {/*        <LinkText to={'/'} text={'Política de Privacidad'} />.*/}
    {/*      </p>*/}
    {/*    </section>*/}
    {/*    <section className={'data-protection'}>*/}
    {/*      <FormRadio*/}
    {/*        title={'Protección de datos'}*/}
    {/*        type={'checkbox'}*/}
    {/*        name={'Proteccion de datos'}*/}
    {/*        value={''}*/}
    {/*        checked={false}*/}
    {/*      />*/}
    {/*      <p>*/}
    {/*        Estoy de acuerdo de con la {''}*/}
    {/*        <LinkText to={'/'} text={'Política de Protección de Datos'} />.*/}
    {/*      </p>*/}
    {/*    </section>*/}
    {/*    <section className={'button-register'}>*/}
    {/*      <SubmitButton text={'Registrar Entidad'} />*/}
    {/*    </section>*/}
    {/*  </div>*/}
    {/*</section>*/}
    <MixFormRegisterEsal />
  </div>
);

Esal.displayName = 'Esal';
