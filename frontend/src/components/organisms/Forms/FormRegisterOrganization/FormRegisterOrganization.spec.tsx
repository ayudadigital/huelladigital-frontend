import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { FormRegisterOrganization} from './';

describe('FormRegisterOrganization', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <FormRegisterOrganization/>,
    );
    expect(renderResult.queryByText('Hello from FormRegisterOrganization!')).toBeTruthy();
  });
});