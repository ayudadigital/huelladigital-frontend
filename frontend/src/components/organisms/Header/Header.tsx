import * as React from 'react';
import {useContext, useState} from 'react';
import './Header.scss';
import {Image} from '../../atoms/Image';
import {NavBarDesktop} from '../../molecules/NavBarDesktop';
import useWindowSize from '../../../utils/hooks/useWindowSize';
import {NabBarMobil} from '../../molecules/NavBarMobil';
import {Context} from '../../../Context';

export const Header: React.FC<{}> = () => {
  const [showModal, setShowModal] = useState(false);
  const isAuth = useContext(Context);
  const size = useWindowSize();

  function handleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="Header">
      <Image
        source="https://huellapositiva.com/wp-content/uploads/2020/03/cropped-Logo-Huella-Positiva-PV-05.png"
        description="logo"
      />
      {
        // @ts-ignore
        size.width > 780 ? <NavBarDesktop isAuth={isAuth.isAuth} onClick={handleModal}/> : <NabBarMobil onClick={handleModal}/>
      }
      {
        // @ts-ignore
        showModal && <NavBarDesktop isAuth={isAuth.isAuth} onClick={handleModal}/>
      }
    </div>
  );
};

Header.displayName = 'Header';
