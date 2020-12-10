import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { FrequentlyAskedQuestions} from './';

describe('FrequentlyAskedQuestions', () => {
<<<<<<< HEAD
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <FrequentlyAskedQuestions/>,
    );
    expect(renderResult.queryByText('Hello from FrequentlyAskedQuestions!')).toBeTruthy();
=======
  it('should display the page title', () => {
    const renderResult: RenderResult = render(
      <FrequentlyAskedQuestions/>,
    );
    expect(renderResult.queryByText('Preguntas frecuentes')).toBeTruthy();
>>>>>>> 6fab1db5629103258ff190607108597500c53e3e
  });
});