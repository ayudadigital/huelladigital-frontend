import * as React from 'react';
import './Header.scss';
import { Image } from '../../atoms/Image';
import { NavBarDesktop } from '../../molecules/NavBarDesktop';
import useWindowSize from '../../../utils/hooks/useWindowSize';
import { NabBarMobil } from '../../molecules/NavBarMobil';

export const Header: React.FC<{}> = () => {

  const size = useWindowSize();

  return (
    <div className="Header">
      <Image
        source="https://huellapositiva.com/wp-content/uploads/2020/03/cropped-Logo-Huella-Positiva-PV-05.png"
        description="logo"
      />
      {
        // @ts-ignore
        size.width > 780 ? <NavBarDesktop/> : <NabBarMobil onClick={() => console.log('foo')}/>
      }
    </div>
  );
};

Header.displayName = 'Header';
