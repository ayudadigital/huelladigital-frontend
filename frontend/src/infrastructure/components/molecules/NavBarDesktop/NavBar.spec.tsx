import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { NavBarDesktop } from './index';
import { BrowserRouter } from 'react-router-dom';


describe('NavBarDesktop', () => {

  it('should display the default controls', () => {
    const { queryByText } = render(
      <BrowserRouter>
        <NavBarDesktop isAuth={false}/>
      </BrowserRouter>,
    );
    expect(queryByText('inicio')).toBeTruthy();
    expect(queryByText('acceder')).toBeTruthy();
    expect(queryByText('registrarse')).toBeTruthy();
    expect(queryByText('desconectar')).toBeFalsy();
  });

  it('should display a button disconnect', () => {
    const renderResult: RenderResult = render(
      <BrowserRouter>
        <NavBarDesktop isAuth={true}/>
      </BrowserRouter>,
    );
    expect(renderResult.queryByText('inicio')).toBeTruthy();
    expect(renderResult.queryByText('acceder')).toBeFalsy();
    expect(renderResult.queryByText('registrarse')).toBeFalsy();
    expect(renderResult.queryByText('desconectar')).toBeTruthy();
  });
});
