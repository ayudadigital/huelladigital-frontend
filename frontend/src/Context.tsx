import React, { createContext, useState } from 'react';
import { getCookie } from './utils/fetch/cookies';


interface ContextParams {
  isAuth: boolean;
  activateAuth?: () => void;
  removeAuth?: () => void;
}

// @ts-ignore
export const Context = createContext<ContextParams>();

// @ts-ignore
export const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(() => {
    return getCookie('accessToken') !== null &&
      getCookie('accessToken') !== undefined &&
      getCookie('accessToken') !== '';
  });

  const value = {
    isAuth,
    activateAuth: (accessToken: string, refreshToken: string) => {
      setIsAuth(true);
      // TODO: Aquí seteo las cookies
      // window.sessionStorage.setItem('token', token);
    },
    removeAuth: () => {
      setIsAuth(false);
      // TODO: Aquí las elimino
      // window.sessionStorage.removeItem('token');
    },

  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};
