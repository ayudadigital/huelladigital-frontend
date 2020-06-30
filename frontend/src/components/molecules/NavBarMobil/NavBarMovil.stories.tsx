import * as React from 'react';
import { NabBarMobil } from './NabBarMobil';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Molecules | Navbar/NavBarMobil',
  decorators: [withA11y],
};

export const Movil = () => <NabBarMobil />;
