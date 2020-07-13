import * as React from 'react';
import './NavBar.scss';
import { LinkText } from '../../atoms/LinkText';
import { ROUTE } from '../../../utils/routes';
import { Menu } from './types';
import { button } from '@storybook/addon-knobs';
import { cleanCookies } from '../../../utils/fetch/cookies';

const MENU_VALUES: Menu[] = [
  {
    title: 'Inicio',
    path: ROUTE.home,
  },
  // {
  //   title: 'Acceder',
  //   path: ROUTE.loginRegister,
  // },
  // {
  //   title: 'Registrarse',
  //   path: ROUTE.loginRegister,
  // }
  // {
  //   title: 'Desconectar',
  //   path: ROUTE.home,
  // }
];

interface NavBarDesktopProps {
  onClick?: () => void;
}

export const NavBarDesktop: React.FC<NavBarDesktopProps> = ({ onClick }) => {

  function tokenExist(key: string) {
    const token = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return token !== null && token !== undefined;
  }

  function handleStateLogin() {
    return !tokenExist('accessToken');
  }

  return (
    <div className="NavBar" onClick={onClick}>
      {console.log('access-cookie: ' + tokenExist('accessToken'))}
      {
        MENU_VALUES.map((menu: Menu) => <LinkText key={`menu-${menu.title}`} text={menu.title} to={menu.path}/>)
      }
      {
        handleStateLogin && <LinkText key={`menu-Acceder`} text={'Acceder'} to={ROUTE.loginRegister}/>
      }
      {
        handleStateLogin && <LinkText key={`menu-Registrarse`} text={'Registrarse'} to={ROUTE.loginRegister}/>
      }
      {
        !handleStateLogin && <button onClick={cleanCookies}>Desconectar</button>
      }
    </div>
  );
};

NavBarDesktop.displayName = 'NavBarDesktop';
