import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { TextAreaForm} from './';

describe('TextAreaForm', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <TextAreaForm/>,
    );
    expect(renderResult.queryByText('Hello from TextAreaForm!')).toBeTruthy();
  });
});