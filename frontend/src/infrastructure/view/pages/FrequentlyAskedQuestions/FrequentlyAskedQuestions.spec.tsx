import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { FrequentlyAskedQuestions} from './';

describe('FrequentlyAskedQuestions', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <FrequentlyAskedQuestions/>,
    );
    expect(renderResult.queryByText('Hello from FrequentlyAskedQuestions!')).toBeTruthy();
  });
});