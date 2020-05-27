import React, { useState } from 'react';
import { FieldForm } from '../../../molecules/FieldForm';
import { SubmitButton } from '../../../atoms/SubmitButton';
import { ROUTE } from '../../../../utils/routes';
import { LinkText } from '../../../atoms/LinkText/LinkText';
import '../styles.scss';

interface dataInterface {
  email: string | React.ChangeEvent<HTMLInputElement>;
  password: string | React.ChangeEvent<HTMLInputElement>;
  passwordRepeated: string | React.ChangeEvent<HTMLInputElement>;
}

export const FormRegisterVolunteer: React.FC<{}> = () => {
  const [data, setData] = useState<dataInterface>({
    email: '',
    password: '',
    passwordRepeated: '',
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const exampleJsonToApi = {
      email: data.email,
      password: data.password,
    };
    console.log(exampleJsonToApi);
  };
  return (
    <form className="ContainerForm" onSubmit={handleSubmit}>
      <h1>Registro de voluntario</h1>
      <FieldForm
        title={'Email'}
        type={'email'}
        name={'email'}
        onChange={(event) => setData({ ...data, email: event.target.value })}
      />
      <FieldForm
        title={'Contraseña'}
        type={'password'}
        name={'password'}
        onChange={(event) => setData({ ...data, password: event.target.value })}
      />
      <FieldForm
        title={'Repetir contraseña'}
        type={'password'}
        name={'repeatedPassword'}
        onChange={(event) => setData({ ...data, passwordRepeated: event.target.value })}
      />
      <SubmitButton text={'Acceder'} />
      <p>
        ¿Ya tiene cuenta? <LinkText to={ROUTE.volunteer.login} text={'Iniciar sesión'} />
      </p>
    </form>
  );
};

FormRegisterVolunteer.displayName = 'FormRegisterVolunteer';
