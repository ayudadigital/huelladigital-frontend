import * as React from 'react';
import { HamburguerMenu } from './HamburguerMenu';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Molecules | Navbar/NavBarMobil',
  decorators: [withA11y],
};

export const Movil = () => <HamburguerMenu />;
