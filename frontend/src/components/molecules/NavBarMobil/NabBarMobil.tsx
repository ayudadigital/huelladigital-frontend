import * as React from 'react';
import './NavBarMovil.scss';

interface NabBarMobilProps {
  onClick?: () => void;
}

export const NabBarMobil: React.FC<NabBarMobilProps> = ({onClick}) => (
  <div className="NavBarMobil">
    <div className={'container'} onClick={onClick}>
      <span/>
      <span/>
      <span/>
    </div>
  </div>
);

NabBarMobil.displayName = 'NavBarMobil';
