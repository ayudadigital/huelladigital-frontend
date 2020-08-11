import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { MixFormOrganization} from './';

describe('MixFormOrganization', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <MixFormOrganization/>,
    );
    expect(renderResult.queryByText('Hello from MixFormOrganization!')).toBeTruthy();
  });
});