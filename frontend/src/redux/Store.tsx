import React, { useReducer } from 'react';

// @ts-ignore
export const Store = React.createContext();

const initialState = {
  login: false,
};

function reducer(state: { login: boolean }, action: { type: 'LOG-IN' | 'LOG-OUT'; }) {
  switch (action.type) {
    case 'LOG-IN':
      return { ...state, login: true };
    case 'LOG-OUT':
      return { ...state, login: false };
    default:
      return state;
  }
}

// @ts-ignore
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <Store.Provider value={value}>
      {props.children}
    </Store.Provider>
  );
}
