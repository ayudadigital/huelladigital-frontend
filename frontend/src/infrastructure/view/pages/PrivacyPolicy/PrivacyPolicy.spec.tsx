import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { PrivacyPolicy} from './';

describe('PrivacyPolicy', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <PrivacyPolicy/>,
    );
    expect(renderResult.queryByText('Hello from PrivacyPolicy!')).toBeTruthy();
  });
});