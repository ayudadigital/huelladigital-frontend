import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { InputTextArea } from './';

describe('InputTextArea', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <InputTextArea id="textArea" placeholder="Información de interés" />,
    );
    expect(renderResult.queryByLabelText('input-textArea')).toBeTruthy();
  });
});
