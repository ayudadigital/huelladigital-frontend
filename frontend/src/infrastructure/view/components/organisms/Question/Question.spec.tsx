import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Question} from '.';

describe('Question', () => {
  it('should display the default message', () => {
    const title = 'Pregunta';
    const renderResult: RenderResult = render(
      <Question title = {title} body = ""/>,
    );
    expect(renderResult.queryByText('Pregunta')).toBeTruthy();
  });
});