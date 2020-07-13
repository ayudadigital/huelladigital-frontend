import React, { Fragment, useCallback, useEffect, useState } from 'react';
import '../styles.scss';
import { FieldForm } from '../../../molecules/FieldForm';
import { SubmitButton } from '../../../atoms/SubmitButton';
import Client from '../../../../utils/fetch/client';

export const FormLoginVolunteer: React.FC<any> = ({ dispatchObj }) => {
  const [stateButton, setStateButton] = useState(true);
  const [data, setData] = useState(
    {
      email: '',
      password: '',
    },
  );

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
      alert('Tu usuario se ha registrado');
    }
  }

  useEffect(() => {
    handleStateButton();
  }, [data, handleStateButton]);

  return (
    <Fragment>
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
