import * as React from 'react';
import { ConvocatoryList } from './ConvocatoryList';
import { withA11y } from '@storybook/addon-a11y';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Pages | Convocatories / ConvocatoryList',
  decorators: [withA11y, (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>],
};

export const withText = () => <ConvocatoryList />;
