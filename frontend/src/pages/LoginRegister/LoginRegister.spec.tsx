import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { LoginRegister} from './index';

describe('LoginRegister', () => {
  xit('should display the default message', () => {
    const renderResult: RenderResult = render(
      <LoginRegister/>,
    );
    expect(renderResult.queryByText('Hello from LoginRegister!')).toBeTruthy();
  });
});
