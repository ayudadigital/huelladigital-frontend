import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { HamburguerMenu } from './index';

describe('NavBarMobil', () => {
  xit('should display the default message', () => {
    const renderResult: RenderResult = render(
      <HamburguerMenu/>,
    );
    expect(renderResult.queryByText('Hello from NavBarMobil!')).toBeTruthy();
  });
});
