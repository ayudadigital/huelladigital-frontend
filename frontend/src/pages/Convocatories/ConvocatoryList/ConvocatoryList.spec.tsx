import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ConvocatoryList} from './';

describe('ConvocatoryList', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <ConvocatoryList/>,
    );
    expect(renderResult.queryByText('Hello from ConvocatoryList!')).toBeTruthy();
  });
});