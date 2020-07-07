import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ConvocatoryDetails} from './';

describe('ConvocatoryDetails', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <ConvocatoryDetails/>,
    );
    expect(renderResult.queryByText('Hello from ConvocatoryDetails!')).toBeTruthy();
  });
});