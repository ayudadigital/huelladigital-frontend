import * as React from 'react';
import './FormRegisterEsal.scss';
import { FieldForm } from '../../../molecules/FieldForm';
import { TextAreaForm } from '../../../molecules/TextAreaForm';
import { FormRadio } from '../../../molecules/FormRadio';
import { Label } from '../../../atoms/Label';
import { Image } from '../../../atoms/Image';
import superHeroes from '../../../atoms/Image/assets/superHeroes.svg';
import { LinkText } from '../../../atoms/LinkText';
import { SubmitButton } from '../../../atoms/SubmitButton';
import { Esal, EsalEmployee } from '../../../../../../domain/models/Esal';
import { EsalService } from '../../../../../../domain/services/Esal.service';
import { isTypeQueryNode } from 'typescript';
import { FormRegisterContactPerson } from '../FormRegisterContactPerson';

export const FormRegisterEsal: React.FC<{}> = () => {
  const [state, setState] = React.useState<any>({
    Name: '',
    Surname: '',
    Email: '',
    PhoneNumber: '',
    Password: '',
    Entity: '',
    Web: '',
    Description: '',
    Island: '',
    PostalCode: '',
    EntityType: '',
    PrivacyPolicy: '',
    DataProtection: '',
    RegisteredAsVolunteeringEntity: '',
  });
  const island = [
    'Gran Canaria',
    'Fuerteventura',
    'Lanzarote',
    'La Graciosa',
    'Tenerife',
    'La Palma',
    'La Gomera',
    'El Hierro',
  ];
  const associationType = [
    'Asociacion',
    'Fundación',
    'Club Deportivo',
    'Colegio Profesional',
    'Federación Deportiva',
  ];

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const esalEmployee: EsalEmployee = {
      name: state.Name,
      surname: state.Surname,
      phoneNumber: state.PhoneNumber,
      email: state.Email,
      password: state.Password,
    };
    const esal: Esal = {
      name: state.EntityName,
      description: state.Description,
      website: state.Web,
      registeredEntity: state.RegisteredAsVolunteeringEntity === 'Si',
      entityType: state.EntityType,
      privacyPolicy: state.PrivacyPolicy,
      dataProtectionPolicy: state.DataProtection,
      island: state.Island,
      zipCode: state.ZipCode,
    };
    EsalService.regsiterBunch(esalEmployee, esal);
  };

  const handleCheckChange = (event: React.FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.checked,
    });
  };

  const handleChange = (
    event: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <form className="FormRegisterEsal" method={'POST'} id="form" onSubmit={handleSubmit}>
      <div className={'register-esal'}>
        <FormRegisterContactPerson />
        <div className={'div-register-esal'}>
          <header>
            <h1>Datos Entidad</h1>
          </header>
          <div className={'row'}>
            <div className={'col'}>
              <FieldForm
                title={'Nombre entidad *'}
                type={'text'}
                name={'EntityName'}
                onChange={handleChange}
              />
            </div>
            <div className={'col'}>
              <FieldForm
                title={'Página web'}
                type={'text'}
                name={'Web'}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={'row'}>
            <div className={'col'}>
              <TextAreaForm
                title={'Descripción *'}
                name={'Description'}
                placeholder={'Breve descripción de la entidad'}
                rows={10}
                cols={2}
                onChange={handleChange}
              />
            </div>
            <div className={'col localization'}>
              <Label text={'Ubicación *'} />
              <div className={'row'}>
                <div className={'col'}>
                  <div className="div-radio">
                    {island.map((islands, index) => {
                      return (
                        <FormRadio
                          title={''}
                          type={'radio'}
                          name={'Island'}
                          value={islands}
                          checked={false}
                          key={index}
                          onChange={handleChange}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className={'col postal-code'}>
                  <FieldForm
                    title={'Código postal *'}
                    type={'text'}
                    name={'ZipCode'}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={'row'}>
            <div className={'col'}>
              <Label text={'Logo *'} />
              <div className="image-upload">
                <label>
                  <input type="file" className={'file'} />
                  <Image
                    source={superHeroes}
                    description={'super heroes logo register'}
                    width={'300px'}
                  />
                </label>
              </div>
            </div>
            <div className={'col organization'}>
              <Label text={'Tipo de entidad *'} />
              <div className="row">
                <div className="div-organization">
                  {associationType.map((types, index) => {
                    return (
                      <FormRadio
                        title={''}
                        type={'radio'}
                        name={'EntityType'}
                        value={types}
                        checked={false}
                        key={index}
                        onChange={handleChange}
                      />
                    );
                  })}
                </div>
              </div>
              <div className={'register-government'}>
                <Label
                  text={
                    'Registrada como entidad de voluntariado en el Gobierno de Canarias *'
                  }
                />
                <div className={'row'}>
                  <FormRadio
                    title={''}
                    type={'checkbox'}
                    name={'RegisteredAsVolunteeringEntity'}
                    value={'Si'}
                    checked={false}
                    onChange={handleChange}
                  />
                  <FormRadio
                    title={''}
                    type={'checkbox'}
                    name={'RegisteredAsVolunteeringEntity'}
                    value={'No'}
                    checked={false}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={'row consents-check'}>
            <Label text={'Consentimientos *'} />
            <div className={'data-protection'}>
              <FormRadio
                title={'Política Privacidad'}
                type={'checkbox'}
                name={'PrivacyPolicy'}
                value={''}
                checked={false}
                onChange={handleCheckChange}
              />
              <p>
                Estoy de acuerdo de con la {''}
                <LinkText to={'/'} text={'Política de privacidad'} />.
              </p>
            </div>
            <div className={'data-protection'}>
              <FormRadio
                title={'Protección de datos'}
                type={'checkbox'}
                name={'DataProtection'}
                value={''}
                checked={false}
                onChange={handleCheckChange}
              />
              <p>
                Estoy de acuerdo de con la {''}
                <LinkText to={'/'} text={'Política de protección de datos'} />.
              </p>
            </div>
            <div className={'button-register'}>
              <SubmitButton text={'Registrar Entidad'} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

FormRegisterEsal.displayName = 'FormRegisterEsal';
