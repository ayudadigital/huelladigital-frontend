import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ConvocatoryRegister} from './';

describe('ConvocatoryRegister', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <ConvocatoryRegister/>,
    );
    expect(renderResult.queryByText('Hello from ConvocatoryRegister!')).toBeTruthy();
  });
});