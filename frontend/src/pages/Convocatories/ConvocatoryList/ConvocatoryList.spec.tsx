import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ConvocatoryList } from './';
import { BrowserRouter } from 'react-router-dom';

describe('ConvocatoryList', () => {
  xit('should display the default message', () => {
    const renderResult: RenderResult = render(
      <BrowserRouter>
        <ConvocatoryList/>,
      </BrowserRouter>,
    );
    expect(renderResult.queryByText('Hello from ConvocatoryList!')).toBeTruthy();
  });
});
