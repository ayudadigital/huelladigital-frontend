import * as React from 'react';
import { Fragment, useContext } from 'react';
import './NavBar.scss';
import { LinkText } from '../../atoms/LinkText';
import { ROUTE } from '../../../utils/routes';
import { button } from '@storybook/addon-knobs';
import { Context } from '../../../Context';

interface NavBarDesktopProps {
    onClick?: () => void;
    isAuth: boolean | unknown;
    show?: boolean;
}

export const NavBarDesktop: React.FC<NavBarDesktopProps> = ({onClick, isAuth, show}) => {
    const auth = useContext(Context);
    return (
        <div className={!show ? 'NavBar' : 'NavBar show'} onClick={onClick}>
                    <LinkText key={`menu-inicio`} text={'inicio'} to={ROUTE.home}/>
                    {
                        !isAuth && (
                            <Fragment>
                                <LinkText key={`menu-acceder`} text={'acceder'} to={ROUTE.loginRegister}/>
                                <LinkText
                                    key={`menu-registrarse`}
                                    text={'registrarse'}
                                    to={ROUTE.loginRegister}
                                />
                            </Fragment>
                        )
                    }
                    {
                        // @ts-ignore
                        isAuth && <button onClick={auth.removeAuth}>Desconectar</button>
                    }
                </div>

    );
};

NavBarDesktop.displayName = 'NavBarDesktop';
