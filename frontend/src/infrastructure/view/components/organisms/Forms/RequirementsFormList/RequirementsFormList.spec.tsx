import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { RequirementsFormList} from './';

describe('RequirementsFormList', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <RequirementsFormList/>,
    );
    expect(renderResult.queryByText('Hello from RequirementsFormList!')).toBeTruthy();
  });
});