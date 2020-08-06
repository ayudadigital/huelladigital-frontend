import * as React from 'react';
import { ConvocatoryRegister } from './ConvocatoryRegister';
import { withA11y } from '@storybook/addon-a11y';
import {BrowserRouter} from 'react-router-dom';

export default {
  title: 'Pages | Convocatories / ConvocatoryRegister',
  decorators: [withA11y, (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>],
};

export const withText = () => <ConvocatoryRegister />;
