import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { TextAreaForm } from './';

describe('TextAreaForm', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <TextAreaForm text="Text area" placeholder="Información de interés" />,
    );
    expect(renderResult.queryByPlaceholderText('Información de interés')).toBeTruthy();
  });
});
