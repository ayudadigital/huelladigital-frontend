import * as React from 'react';
import { useContext } from 'react';
import './NavBar.scss';
import { LinkText } from '../../atoms/LinkText';
import { ROUTE } from '../../../utils/routes';
import { Menu } from './types';
import { Store } from '../../../redux/Store';

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

  return (
    <div className="NavBar" onClick={onClick}>
      {console.log('navbar: ' + state.login)}
      {
        MENU_VALUES.map((menu: Menu) => <LinkText key={`menu-${menu.title}`} text={menu.title} to={menu.path}/>)
      }
      {
        state.login === false && <LinkText key={`menu-Acceder`} text={'Acceder'} to={ROUTE.loginRegister}/>
      }
      {
        state.login === false && <LinkText key={`menu-Registrarse`} text={'Registrarse'} to={ROUTE.loginRegister}/>
      }
      {
        state.login === true && <LinkText key={`menu-Desconectar`} text={'Desconectar'} to={ROUTE.home}/>
      }
    </div>
  );
};

NavBarDesktop.displayName = 'NavBarDesktop';
