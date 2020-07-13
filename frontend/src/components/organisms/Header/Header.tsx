import * as React from 'react';
import {useContext, useState} from 'react';
import './Header.scss';
import {Image} from '../../atoms/Image';
import {NavBarDesktop} from '../../molecules/NavBarDesktop';
import {Context} from '../../../Context';

export const Header: React.FC<{}> = () => {
  const [showModal, setShowModal] = useState(false);
  const isAuth = useContext(Context);

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
      <NavBarDesktop isAuth={isAuth.isAuth} onClick={handleModal}/>
      }
    </div>
  );
};

Header.displayName = 'Header';
