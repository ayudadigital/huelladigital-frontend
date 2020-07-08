import React, { Fragment, useCallback, useContext, useEffect, useState } from 'react';
import '../styles.scss';
import { FieldForm } from '../../../molecules/FieldForm';
import { SubmitButton } from '../../../atoms/SubmitButton';
import Client from '../FormUtils/client';
import { Store } from '../../../../redux/Store';
import { button } from '@storybook/addon-knobs';

export const FormLoginVolunteer: React.FC<any> = ({ dispatchObj }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { state, dispatch } = useContext(Store);
  const [stateButton, setStateButton] = useState(true);
  const [data, setData] = useState(
    {
      email: '',
      password: '',
    },
  );

  // redux
  const toggleLoginStatus = () => {
    return dispatch({ type: 'LOG-IN' });
  };


  const handleStateButton = useCallback(() => {
    (data.email !== '' && data.password !== '')
      ? setStateButton(false)
      : setStateButton(true);
  }, [data.email, data.password]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const volunteerDTO = {
      email: data.email,
      password: data.password,
    };
    const client = new Client();
    const response = await client.loginVolunteer(volunteerDTO);
    if (response === 'OK') {
      toggleLoginStatus(); // redux
      alert('Tu usuario se ha registrado');
    }
  }

  useEffect(() => {
    handleStateButton();
  }, [data, handleStateButton]);

  return (
    <Fragment>
      {/*// TODO : Botones de prueba borrarlos*/}
      <button onClick={toggleLoginStatus}>loguearse</button>
      <button onClick={() => dispatch({ type: 'LOG-OUT' })}>Desconectar</button>
      {/*// TODO : Botones de prueba borrarlos*/}
      <form className="ContainerForm" method="POST" id="form" onSubmit={handleSubmit}>
        <FieldForm title={'Email'}
                   type={'email'}
                   name={'email'}
                   onChange={(e) => setData({ ...data, email: e.target.value })}/>
        <FieldForm title={'Contraseña'}
                   type={'password'}
                   name={'password'}
                   onChange={(e) => setData({ ...data, password: e.target.value })}/>
        <SubmitButton text={'Acceder'} disabled={stateButton}/>
      </form>
    </Fragment>
  );
};

FormLoginVolunteer.displayName = 'FormLoginVolunteer';
