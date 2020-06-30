import * as React from 'react';
import './Header.scss';
import { Image } from '../../atoms/Image';
import { NavBarDesktop } from '../../molecules/NavBarDesktop';
import useWindowSize from '../../../utils/hooks/useWindowSize';
import { NabBarMobil } from '../../molecules/NavBarMobil';
import { useState } from 'react';

export const Header: React.FC<{}> = () => {
  const [showModal, setShowModal] = useState(false);
  const size = useWindowSize();

  function handleModal() {
    setShowModal(!showModal);
    console.log(showModal);
  }

  return (
    <div className="Header">
      <Image
        source="https://huellapositiva.com/wp-content/uploads/2020/03/cropped-Logo-Huella-Positiva-PV-05.png"
        description="logo"
      />
      {
        // @ts-ignore
        size.width > 780 ? <NavBarDesktop onClick={handleModal}/> : <NabBarMobil onClick={handleModal}/>
      }
      {
        showModal && <NavBarDesktop onClick={handleModal}/>
      }
    </div>
  );
};

Header.displayName = 'Header';
