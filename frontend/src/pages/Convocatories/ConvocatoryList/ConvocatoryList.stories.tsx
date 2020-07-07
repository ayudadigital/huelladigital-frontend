import * as React from 'react';
import {ConvocatoryList} from './ConvocatoryList';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'ConvocatoryList',
  decorators: [withA11y],
};

export const withText = () => <ConvocatoryList />;
