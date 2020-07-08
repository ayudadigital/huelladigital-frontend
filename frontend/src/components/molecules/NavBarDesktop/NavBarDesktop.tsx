import * as React from 'react';
import { useContext } from 'react';
import './NavBar.scss';
import { LinkText } from '../../atoms/LinkText';
import { ROUTE } from '../../../utils/routes';
import { Menu } from './types';
import { Store } from '../../../redux/Store';
import { button } from '@storybook/addon-knobs';

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

  const { state, dispatch } = useContext(Store);

  function tokenExist(key:string) {
    const token = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return token !== null || token !== undefined;
  }

  function cleanCookies() {
    document.cookie.split(';').forEach((cookie)  => {
      document.cookie = cookie
        .replace(/^ +/, '')
        .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
  }

  function handleStateLogin() {
    return !tokenExist('accessToken');
  }

  return (
    <div className="NavBar" onClick={onClick}>
      {console.log('access-cookie: ' + tokenExist('accessToken'))}
      {console.log('refresh-cookie: ' + tokenExist('refreshToken'))}
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
