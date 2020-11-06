import React, { createContext, useState } from 'react';
import { cleanCookies, getCookie } from './http/cookies';


export interface ContextParams {
  isAuth: boolean;
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
    removeAuth: () => {
      setIsAuth(false);
      cleanCookies();
    },

  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};
