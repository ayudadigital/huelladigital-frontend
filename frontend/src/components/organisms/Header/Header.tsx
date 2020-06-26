import * as React from 'react';
import './Header.scss';
import { Image } from '../../atoms/Image';
import { NavBarDesktop } from '../../molecules/NavBarDesktop';
import waveHeader from './assets/wave-header.svg';
import useWindowSize from '../../../utils/hooks/useWindowSize';
import { NavBarMovil } from '../../molecules/NavBarMovil';

const bgStyle = {
  background: `url(${waveHeader}) no-repeat center bottom,linear-gradient(rgba(126, 37, 78, 0.45), rgba(126, 37, 78, 0.45)), url(https://huellapositiva.com/wp-content/uploads/2020/03/remi-walle-UOwvwZ9Dy6w-unsplash.jpg)
    no-repeat center`,
  backgroundSize: '110%, auto, cover',
};

export const Header: React.FC<{}> = () => {

  const size = useWindowSize();

  return (
    <div className="Header" style={bgStyle}>
      <Image
        source="https://huellapositiva.com/wp-content/uploads/2020/03/cropped-Logo-Huella-Positiva-PV-05.png"
        description="logo"
      />
      {
        // @ts-ignore
        size.width > 780 ? <NavBarDesktop/> : <NavBarMovil/>
      }
    </div>
  );
};

Header.displayName = 'Header';
