import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ConvocatoryVolunteers } from './';
import { createMemoryHistory } from "history";
import { Route, Router } from 'react-router-dom';

describe('ConvocatoryVolunteers', () => {
  it('renders 2 volunteersList components', () => {
    const history = createMemoryHistory();
    const renderResult: RenderResult = render(
      <Router history={history}>
        <ConvocatoryVolunteers />
      </Router>
    )
    expect(renderResult.getAllByRole('table').length).toEqual(2);
  });
});