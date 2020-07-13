import React, {useCallback, useEffect, useState} from 'react';
import '../styles.scss';
import {FieldForm} from '../../../molecules/FieldForm';
import {SubmitButton} from '../../../atoms/SubmitButton';
import Client from '../../../../utils/fetch/client';

export const FormLoginVolunteer: React.FC<any> = () => {
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
    await client.loginVolunteer(volunteerDTO);
  }

  useEffect(() => {
    handleStateButton();
  }, [data, handleStateButton]);

  return (
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
  );
};

FormLoginVolunteer.displayName = 'FormLoginVolunteer';
