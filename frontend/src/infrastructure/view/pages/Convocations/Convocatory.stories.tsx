import * as React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { ConvocatoryDetails } from './ConvocatoryDetails';
import { BrowserRouter } from 'react-router-dom';
import { ConvocatoryList } from './ConvocatoryList';
import { ConvocatoryRegister } from './ConvocatoryRegister';

export default {
  title: 'Pages | Convocations',
  decorators: [withA11y, (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>]
};

export const Details = () => <ConvocatoryDetails />;

export const List = () => <ConvocatoryList />;

export const Register = () => <ConvocatoryRegister />;