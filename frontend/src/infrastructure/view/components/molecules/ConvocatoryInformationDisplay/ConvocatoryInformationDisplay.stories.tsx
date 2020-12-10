import * as React from 'react';
import {ConvocatoryInformationDisplay} from './ConvocatoryInformationDisplay';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'ConvocatoryInformationDisplay',
  decorators: [withA11y],
};

export const withText = () => <ConvocatoryInformationDisplay/>;
