import React from 'react';
import './styles.scss';
import { WrapperPages } from '../../components/templates/WrapperPages';
import { MixForms } from '../../components/organisms/Forms/MixForms';
import {Header} from '../../components/organisms/Header';
import { Footer } from '../../components/organisms/Footer';

export const Home: React.FC<{}> = () => {
  return (
    <WrapperPages>
      <Header/>
      <section className={'Home'}>
        <MixForms />
      </section>
      <Footer />
    </WrapperPages>
  );
};
