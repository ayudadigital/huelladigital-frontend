import * as React from 'react';
import './NavBar.scss';
import { LinkText } from '../../atoms/LinkText';

const menuValues: string[] = ['Inicio', 'Quiero ayuda', 'Necesito ayuda', 'Blog', 'Contacto'];

export const NavBarDesktop: React.FC<{}> = () => (
  <div className="NavBar">
    {
      menuValues.map(menu => <LinkText text={menu} to={'#'}/>)
    }
  </div>
);

NavBarDesktop.displayName = 'NavBarDesktop';
