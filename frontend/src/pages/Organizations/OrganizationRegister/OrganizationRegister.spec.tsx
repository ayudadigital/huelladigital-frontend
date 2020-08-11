import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { OrganizationRegister} from './';

describe('OrganizationRegister', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <OrganizationRegister/>,
    );
    expect(renderResult.queryByText('Hello from OrganizationRegister!')).toBeTruthy();
  });
});