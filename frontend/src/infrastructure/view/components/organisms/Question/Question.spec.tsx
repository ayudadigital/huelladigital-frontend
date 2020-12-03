import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Question} from '.';

describe('Question', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <Question title = "" body = ""/>,
    );
    expect(renderResult.queryByText('Hello from Question!')).toBeTruthy();
  });
});