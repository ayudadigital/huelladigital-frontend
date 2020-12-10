import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ConvocatoryInformationDisplay} from './';

describe('ConvocatoryInformationDisplay', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <ConvocatoryInformationDisplay/>,
    );
    expect(renderResult.queryByText('Hello from ConvocatoryInformationDisplay!')).toBeTruthy();
  });
});