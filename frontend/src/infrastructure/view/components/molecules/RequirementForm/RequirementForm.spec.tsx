import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { RequirementForm} from './';

describe('RequirementForm', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <RequirementForm/>,
    );
    expect(renderResult.queryByText('Hello from RequirementForm!')).toBeTruthy();
  });
});