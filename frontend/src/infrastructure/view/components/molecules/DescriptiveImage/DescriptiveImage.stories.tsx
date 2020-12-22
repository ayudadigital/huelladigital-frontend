import * as React from 'react';
import { DescriptiveImage } from './DescriptiveImage';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Molecules | DescriptiveImage',
  decorators: [withA11y],
};

export const descriptiveImage = () => <DescriptiveImage />;
