import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { DescriptiveImage } from './DescriptiveImage';

describe('descriptiveImage', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(<DescriptiveImage />);
    expect(renderResult.queryByText('Hello from descriptiveImage!')).toBeTruthy();
  });
});
