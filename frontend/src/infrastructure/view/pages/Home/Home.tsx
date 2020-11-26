import React from 'react';
import './styles.scss';
import { LinkButton } from '../../components/atoms/LinkButton/LinkButton';
import { ROUTE } from '../../../http/routes';

export const Home: React.FC<{}> = () => {
  return (
      <section className={'Home'}>
        <LinkButton path={ROUTE.convocatories.list} text={'Ver todas las convocatorias'}/>
        <LinkButton path={ROUTE.convocatories.register} text={'Crear una nueva convocatoria'}/>
      </section>
  );
};
