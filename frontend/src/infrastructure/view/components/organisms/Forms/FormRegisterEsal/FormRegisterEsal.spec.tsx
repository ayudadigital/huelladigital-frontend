import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { FormRegisterEsal} from './index';

describe('Esal', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <FormRegisterEsal/>,
    );
    expect(renderResult.queryByText('Persona de Contacto')).toBeTruthy();
  });
});