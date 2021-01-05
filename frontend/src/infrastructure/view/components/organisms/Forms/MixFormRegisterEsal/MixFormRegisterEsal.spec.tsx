import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { MixFormRegisterEsal } from './index';

describe('MixFormRegisterEsal', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(<MixFormRegisterEsal />);
    expect(renderResult.queryByText('Hello from MixFormRegisterEsal!')).toBeTruthy();
  });
});
