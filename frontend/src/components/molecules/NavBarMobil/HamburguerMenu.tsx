import * as React from 'react';
import './NavBarMovil.scss';

interface NabBarMobilProps {
    onClick?: () => void;
    show?: boolean;
}


export const HamburguerMenu: React.FC<NabBarMobilProps> = ({onClick, show}) => (
    <div className="NavBarMobil">
        {
            !show ?
            <div className={'container'} onClick={onClick}>
                <span/>
                <span/>
                <span/>
            </div>:
                <div className={'CloseModal'} onClick={onClick}>X</div>
        }
    </div>
);

HamburguerMenu.displayName = 'NavBarMobil';
