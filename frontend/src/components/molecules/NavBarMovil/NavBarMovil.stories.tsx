import * as React from 'react';
import { NavBarMovil } from './NavBarMovil';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Molecules | Navbar/NavBarMovil',
  decorators: [withA11y],
};

export const Movil = () => <NavBarMovil />;
