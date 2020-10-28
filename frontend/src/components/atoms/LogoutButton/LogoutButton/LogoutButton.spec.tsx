import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { LogoutButton} from './';

describe('LogoutButton', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <LogoutButton/>,
    );
    expect(renderResult.queryByText('Hello from LogoutButton!')).toBeTruthy();
  });
});