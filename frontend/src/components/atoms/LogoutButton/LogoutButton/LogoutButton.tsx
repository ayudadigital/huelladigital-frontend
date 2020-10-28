import * as React from 'react';
import './LogoutButton.scss';

interface LogoutButton {
  onclick?: () => void;
}

export const LogoutButton: React.FC<LogoutButton> = ({onclick}) => (
  <button className = "LogoutButton" onClick = {onclick}> salir </button>
);

LogoutButton.displayName = 'LogoutButton';
