import * as React from 'react';
import {MixFormOrganization} from './MixFormOrganization';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'MixFormOrganization',
  decorators: [withA11y],
};

export const withText = () => <MixFormOrganization />;
