import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { FormRegisterEsal } from './index';

describe('Register Esal', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(<FormRegisterEsal />);
    expect(renderResult.queryByText('Datos Entidad')).toBeTruthy();
  });
});
