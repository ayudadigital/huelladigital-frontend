import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ConvocatoryList } from './';
import { BrowserRouter } from 'react-router-dom';

describe('ConvocatoryList', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <BrowserRouter>
        <ConvocatoryList/>,
      </BrowserRouter>,
    );
    expect(renderResult.queryByText('Convocatorias')).toBeTruthy();
  });
});
