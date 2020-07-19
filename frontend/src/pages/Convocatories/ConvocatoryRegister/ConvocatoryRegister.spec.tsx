import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ConvocatoryRegister } from './';
import { BrowserRouter } from 'react-router-dom';

describe('ConvocatoryRegister', () => {
  xit('should display the default message', () => {
    const renderResult: RenderResult = render(
      <BrowserRouter>
        <ConvocatoryRegister/>
      </BrowserRouter>
    );
    expect(renderResult.queryByText('Hello from ConvocatoryRegister!')).toBeTruthy();
  });
});
