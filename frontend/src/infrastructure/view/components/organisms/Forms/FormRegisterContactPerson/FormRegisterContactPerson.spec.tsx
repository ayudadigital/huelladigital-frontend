import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { FormRegisterContactPerson} from './index';

describe('FormRegisterContactPerson', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <FormRegisterContactPerson/>,
    );
    expect(renderResult.queryByText('Persona de Contacto')).toBeTruthy();
  });
});