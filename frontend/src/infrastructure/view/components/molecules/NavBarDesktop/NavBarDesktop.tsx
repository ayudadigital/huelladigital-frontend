import * as React from 'react';
import { Fragment } from 'react';
import './NavBar.scss';
import { LinkText } from '../../atoms/LinkText';
import { ROUTE } from '../../../../http/routes';
import { button } from '@storybook/addon-knobs';

interface NavBarDesktopProps {
  onClick?: () => void;
  onClickDisconnect?: () => void;
  isAuth: boolean | unknown;
  show?: boolean;
}

export const NavBarDesktop: React.FC<NavBarDesktopProps> = ({
                                                              onClick,
                                                              onClickDisconnect,
                                                              isAuth,
                                                              show,
                                                            }) => {
  return (
    <div className={!show ? 'NavBar' : 'NavBarShow'} onClick={onClick}>
      <LinkText key={`menu-inicio`} text={'inicio'} to={ROUTE.home}/>
      {
        !isAuth && (
          <Fragment>
            <LinkText key={`menu-acceder`} text={'acceder'} to={ROUTE.loginRegister}/>
            <LinkText key={`menu-registrarse`} text={'registrarse'} to={ROUTE.loginRegister}/>
            <LinkText key={`menu-organization-register`} text={'organización'} to={ROUTE.organizations.register}/>
          </Fragment>
        )
      }
      {
        // @ts-ignore
        isAuth && <button onClick={onClickDisconnect}>desconectar</button>
      }
    </div>

  );
};

NavBarDesktop.displayName = 'NavBarDesktop';
