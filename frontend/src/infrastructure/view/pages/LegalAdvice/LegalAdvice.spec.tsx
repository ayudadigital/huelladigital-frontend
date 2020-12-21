import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { LegalAdvice} from './';

describe('LegalAdvice', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <LegalAdvice/>,
    );
    expect(renderResult.queryByText('Hello from LegalAdvice!')).toBeTruthy();
  });
});