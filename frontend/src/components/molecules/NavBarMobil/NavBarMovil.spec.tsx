import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { NabBarMobil } from './index';

describe('NavBarMobil', () => {
  xit('should display the default message', () => {
    const renderResult: RenderResult = render(
      <NabBarMobil/>,
    );
    expect(renderResult.queryByText('Hello from NavBarMobil!')).toBeTruthy();
  });
});
