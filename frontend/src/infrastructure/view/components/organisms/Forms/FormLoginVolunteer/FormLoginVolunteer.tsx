import React, { useEffect, useState } from 'react';
import '../styles.scss';
import { FieldForm } from '../../../molecules/FieldForm';
import { SubmitButton } from '../../../atoms/SubmitButton';
import { VolunteerCredential } from '../../../../../../domain/models/Credential';
import { VolunteerService } from '../../../../../../domain/services/Volunteer.service';
import formatRoles, { stateValidateTypes } from '../../../atoms/InputFieldForm/types';

const isValidate: { [key: string]: (value: string) => boolean } = {
  email: (value) => formatRoles.regexEmail.test(value),
  password: (value: string) => formatRoles.regexPassword.test(value),
};

export const FormLoginVolunteer: React.FC<any> = () => {
  const [stateButton, setStateButton] = useState<boolean>(true);
  const [messageShow, setMessageShow] = useState<boolean>(false);
  const [data, setData] = useState<Record<string, string>>({
    email: '',
    password: '',
  });
  const validate: Record<string, stateValidateTypes> = {
    email: '',
    password: '',
  };

  const isCorrect = () => {
    const key = Object.keys(validate).map((keys) => keys);
    for (const keyForm in data) {
      validate[keyForm] = isValidate[keyForm](data[keyForm]) ? 'correct' : 'incorrect';
    }
    setStateButton(key.every((valueKey) => validate[valueKey] !== 'incorrect'));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const volunteerCredential: VolunteerCredential = {
      email: data.email,
      password: data.password,
    };
    VolunteerService.loginVolunteer(volunteerCredential).then((status) =>
      setMessageShow(!!(status !== 200 || 201)),
    );
  };

  useEffect(() => {
    isCorrect();
  }, [data]);

  return (
    <form className="ContainerForm" method="POST" id="form" onSubmit={handleSubmit}>
      <FieldForm
        title={'Email'}
        type={'email'}
        name={'email'}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <FieldForm
        title={'Contraseña'}
        type={'password'}
        name={'password'}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      {messageShow && (
        <p style={{ color: 'red', marginTop: '5px' }}>El email o contraseña están mal</p>
      )}
      <SubmitButton text={'Acceder'} disabled={!stateButton} />
    </form>
  );
};

FormLoginVolunteer.displayName = 'FormLoginVolunteer';
