import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ConvocatoryDetails } from './';
import { BrowserRouter } from 'react-router-dom';

describe('ConvocatoryDetails', () => {
  xit('should display the default message', () => {
    const renderResult: RenderResult = render(
      <BrowserRouter>
        <ConvocatoryDetails/>
      </BrowserRouter>
    );
    expect(renderResult.queryByText('Hello from ConvocatoryDetails!')).toBeTruthy();
  });
});
