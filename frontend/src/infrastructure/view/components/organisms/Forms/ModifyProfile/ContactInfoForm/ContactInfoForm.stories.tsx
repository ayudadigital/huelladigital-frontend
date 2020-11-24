import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { ContactInfoForm } from './index';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Organisms | Forms',
  decorators: [withA11y, (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>],
};

export const contactInfoForm = () => <ContactInfoForm />;
