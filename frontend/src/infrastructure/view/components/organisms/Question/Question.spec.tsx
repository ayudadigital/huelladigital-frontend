import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Question} from '.';

describe('Question', () => {
  it('should display the default message', () => {
<<<<<<< HEAD
    const renderResult: RenderResult = render(
      <Question title = "" body = ""/>,
    );
    expect(renderResult.queryByText('Hello from Question!')).toBeTruthy();
=======
    const title = 'Pregunta';
    const renderResult: RenderResult = render(
      <Question title = {title} body = ""/>,
    );
    expect(renderResult.queryByText('Pregunta')).toBeTruthy();
>>>>>>> 6fab1db5629103258ff190607108597500c53e3e
  });
});