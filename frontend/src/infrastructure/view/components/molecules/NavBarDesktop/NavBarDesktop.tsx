import * as React from 'react';
import { Fragment } from 'react';
import './NavBar.scss';
import { LinkText } from '../../atoms/LinkText';
import { ROUTE } from '../../../../http/routes';
import { Role } from '../../../../../domain/models/Roles'

interface NavBarDesktopProps {
  onClick?: () => void;
  onClickDisconnect?: () => void;
  role?: Role;
  isAuth: boolean | unknown;
  show?: boolean;
}

export const NavBarDesktop: React.FC<NavBarDesktopProps> = ({
  onClick,
  onClickDisconnect,
  isAuth,
  role,
  show,
}) => {
  return (
    <div className={!show ? 'NavBar' : 'NavBarShow'} onClick={onClick}>
      <LinkText key={`menu-inicio`} text={'Inicio'} to={ROUTE.home} />
      {!isAuth && (
        <Fragment>
          <LinkText
            key={`menu-registrarse-usuario`}
            text={'Quiero ayudar'}
            to={ROUTE.loginRegister}
          />
          <LinkText
            key={`menu-registrarse-ESAL`}
            text={'Necesito ayuda'}
            to={ROUTE.organizations.register}
          />
        </Fragment>
      )}
      {
        (role === Role.REVISER) && (
          <LinkText key={`convocatories`} text={'Convocatorias'} to={ROUTE.proposals.list} />
        )
      }
      <LinkText key={`menu-blog`} text={'Blog'} to={ROUTE.home} />
      <LinkText key={`menu-contacto`} text={'Contacto'} to={ROUTE.home} />
      {//@ts-ignore
        isAuth ? (
          <button onClick={onClickDisconnect} className="logoutButton">Desconectar</button>
        ) : (
            <LinkText key={`menu-login`} text={'Acceder'} to={ROUTE.loginRegister} />
          )}
    </div>
  );
};

NavBarDesktop.displayName = 'NavBarDesktop';
