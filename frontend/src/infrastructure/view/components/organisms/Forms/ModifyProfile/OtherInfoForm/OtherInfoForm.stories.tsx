import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { BrowserRouter } from 'react-router-dom';
import { OtherInfoForm } from './OtherInfoForm';

export default {
  title: 'Organisms | Forms',
  decorators: [withA11y, (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>],
};

export const otherInfoForm = () => <OtherInfoForm />;
