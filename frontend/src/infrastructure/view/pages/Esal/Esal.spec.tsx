import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Esal } from './';

describe('Esal', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(<Esal />);
    expect(renderResult.queryByText('Registro Entidad')).toBeTruthy();
  });
});
