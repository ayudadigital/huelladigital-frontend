import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { NavBarMovil } from './index';

describe('NavBarMovil', () => {
  xit('should display the default message', () => {
    const renderResult: RenderResult = render(
      <NavBarMovil/>,
    );
    expect(renderResult.queryByText('Hello from NavBarMovil!')).toBeTruthy();
  });
});
