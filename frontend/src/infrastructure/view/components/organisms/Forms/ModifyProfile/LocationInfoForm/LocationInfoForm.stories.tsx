import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { BrowserRouter } from 'react-router-dom';
import { LocationInfoForm } from './LocationInfoForm';

export default {
  title: 'Organisms | Forms',
  decorators: [withA11y, (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>],
};

export const locationInfoForm = () => <LocationInfoForm />;
