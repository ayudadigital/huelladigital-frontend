import React from 'react';
import './styles.scss';
import { MixForms } from '../../components/organisms/Forms/MixForms';

export const Home: React.FC<{}> = () => {
  return (
      <section className={'Home'}>
        <MixForms />
      </section>
  );
};
