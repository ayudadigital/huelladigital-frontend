import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { FieldForm } from '../../../molecules/FieldForm';
import { SubmitButton } from '../../../atoms/SubmitButton';
import Client from '../FormUtils/client';
import '../styles.scss';
import { CheckInterface, DataInterface } from './types';

export const FormRegisterVolunteer: React.FC = () => {
  const [data, setData] = useState<DataInterface>({
    email: '',
    password: '',
    passwordRepeated: '',
  });

  const [userAlreadyExist, setAlreadyExist] = useState<any>();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const volunteerDTO = {
      email: data.email,
      password: data.password,
    };
    const client = new Client();
    const response = await client.registerVolunteer(volunteerDTO);
    await setAlreadyExist(response);

    if (userAlreadyExist !== undefined && userAlreadyExist === 409) {
      setCheck({ ...check, email: 'incorrect' });
    }
  };

  const [check, setCheck] = useState<CheckInterface>({
    email: '',
    password: '',
    passwordRepeated: '',
  });
  const checkPasswordsAreTheSame = () => {
    const passwordsAreEquals = data.password === data.passwordRepeated;
    const passwordIsNotEmpty = data.password !== '';
    const passwordsAreNotEmpty = passwordIsNotEmpty && data.passwordRepeated !== '';
    if (passwordsAreEquals && passwordsAreNotEmpty) {
      setCheck({ ...check, passwordRepeated: 'correct' });
    } else {
      if (passwordIsNotEmpty) {
        setCheck({ ...check, passwordRepeated: 'incorrect' });
      }
    }
  };
  const checkIsAllowedValue: (event: ChangeEvent<HTMLInputElement>) => void = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const minLength: number = 6;
    const regexEmail = new RegExp(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    );
    const inputValue = event.target.value;
    const nameEvent = event.target.name;

    switch (nameEvent) {
      case 'email':
        if (regexEmail.test(inputValue)) {
          setCheck({ ...check, email: 'correct' });
        } else {
          setCheck({ ...check, email: 'incorrect' });
        }
        break;
      case 'password':
        if (inputValue.length >= minLength) {
          setCheck({ ...check, password: 'correct' });
        } else {
          setCheck({ ...check, password: 'incorrect' });
        }
        break;
      default:
        break;
    }
  };

  const [submitState, setSubmitState] = useState(true);
  const handleEnableSubmitButton = () => {
    if (
      check.email === 'correct' &&
      check.password === 'correct' &&
      check.passwordRepeated === 'correct'
    ) {
      setSubmitState(false);
    } else {
      setSubmitState(true);
    }
  };

  useEffect(() => {
    if (userAlreadyExist !== undefined && userAlreadyExist === 409) {
      setCheck({ ...check, email: 'incorrect' });
    } else if (userAlreadyExist === 200) {
      setCheck({ ...check, email: 'correct' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAlreadyExist]);

  useEffect(() => {
    handleEnableSubmitButton();
  });

  useEffect(() => {
    checkPasswordsAreTheSame();
    // eslint-disable-next-line
  }, [data.passwordRepeated, data.password]);

  return (
    <form className="ContainerForm" method="POST" onSubmit={handleSubmit}>
      <FieldForm
        title={'Email'}
        type={'email'}
        name={'email'}
        onChange={(event) => {
          checkIsAllowedValue(event);
          setData({ ...data, email: event.target.value });
        }}
        stateValidate={check.email}
        messageInfoUser={
          userAlreadyExist === 409
            ? 'Email ya registrado'
            : 'El email introducido no es válido'
        }
      />
      <FieldForm
        title={'Contraseña'}
        type={'password'}
        name={'password'}
        onChange={(event) => {
          checkIsAllowedValue(event);
          setData({ ...data, password: event.target.value });
        }}
        stateValidate={check.password}
        messageInfoUser={'Contraseña demasiado corta, se necesitan más de 6 carácteres'}
      />
      <FieldForm
        title={'Repetir contraseña'}
        type={'password'}
        name={'repeatedPassword'}
        onChange={(event) => {
          setData({ ...data, passwordRepeated: event.target.value });
        }}
        stateValidate={check.passwordRepeated}
        messageInfoUser={'Las contraseñas no coinciden'}
      />
      <SubmitButton text={'Registrarse'} disabled={submitState} />
    </form>
  );
};

FormRegisterVolunteer.displayName = 'FormRegisterVolunteer';
