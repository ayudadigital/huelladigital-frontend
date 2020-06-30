import * as React from 'react';
import './NavBar.scss';
import { LinkText } from '../../atoms/LinkText';
import { ROUTE } from '../../../utils/routes';
import { Menu } from './types';

const menuValues: Menu[] = [
  {
    title: 'Inicio',
    path: ROUTE.home,
  },
  {
    title: 'Acceder',
    path: ROUTE.loginRegister,
  },
  {
    title: 'Registrarse',
    path: ROUTE.loginRegister,
  },
];

interface NavBarDesktopProps {
  onClick?: () => void;
}

export const NavBarDesktop: React.FC<NavBarDesktopProps> = ({onClick}) => (
  <div className="NavBar"  onClick={onClick}>
    {
      menuValues.map((menu:Menu) => <LinkText key={`menu-${menu.title}`} text={menu.title} to={menu.path}/>)
    }
  </div>
);

NavBarDesktop.displayName = 'NavBarDesktop';
