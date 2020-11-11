import React, { useCallback, useEffect, useState } from 'react';
import '../styles.scss';
import { FieldForm } from '../../../molecules/FieldForm';
import { SubmitButton } from '../../../atoms/SubmitButton';
import { volunteerRepository } from '../../../../repositories/Volunteer.repository';

export const FormLoginVolunteer: React.FC<any> = () => {
  const [stateButton, setStateButton] = useState(true);
  const [messageShow, setMessageShow] = useState(false);
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
    volunteerRepository.login(volunteerDTO);

    /*if (response === 403) {
      setMessageShow(true);
    }*/
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
      {messageShow && <p style={{color: 'red', marginTop: '5px'}}>El email o contraseña están mal</p>}
      <SubmitButton text={'Acceder'} disabled={stateButton}/>
    </form>
  );
};

FormLoginVolunteer.displayName = 'FormLoginVolunteer';
