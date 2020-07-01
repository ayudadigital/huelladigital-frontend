import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { NavBarDesktop } from './';

describe('NavBarDesktop', () => {
  xit('should display the default message', () => {
    const renderResult: RenderResult = render(
      <NavBarDesktop/>,
    );
    expect(renderResult.queryByText('Hello from NavBarDesktop!')).toBeTruthy();
  });
});
