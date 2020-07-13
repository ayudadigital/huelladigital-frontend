import * as React from 'react';
import {useContext} from 'react';
import './NavBar.scss';
import {LinkText} from '../../atoms/LinkText';
import {ROUTE} from '../../../utils/routes';
import {button} from '@storybook/addon-knobs';
import {Context} from '../../../Context';

interface NavBarDesktopProps {
  onClick?: () => void;
  isAuth: boolean | unknown;
}

export const NavBarDesktop: React.FC<NavBarDesktopProps> = ({ onClick, isAuth }) => {
  const auth = useContext(Context);

  return (
    <div className="NavBar" onClick={onClick}>
      {
        <LinkText key={`menu-inicio`} text={'Inicio'} to={ROUTE.home}/>
      }
      {
        !isAuth && <LinkText key={`menu-Acceder`} text={'Acceder'} to={ROUTE.loginRegister}/>
      }
      {
        !isAuth && <LinkText key={`menu-Registrarse`} text={'Registrarse'} to={ROUTE.loginRegister}/>
      }
      {
        // @ts-ignore
        isAuth && <button onClick={auth.removeAuth}>Desconectar</button>
      }
    </div>
  );
};

NavBarDesktop.displayName = 'NavBarDesktop';
