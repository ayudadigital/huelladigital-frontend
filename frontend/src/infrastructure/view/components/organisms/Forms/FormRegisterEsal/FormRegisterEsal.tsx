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
import { EsalService } from '../../../../../../domain/services/Esal.service';
import { FormRegisterContactPerson } from '../FormRegisterContactPerson';
import { ROUTE } from '../../../../../http/routes';
import { useCheckEsal } from '../../../../../hooks/useCheckEsal';

export const FormRegisterEsal: React.FC<{}> = () => {
  const {
    data,
    island,
    associationType,
    check,
    setNameEvent,
    setInputValue,
    messageInfoUser,
    registered,
  } = useCheckEsal();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    EsalService.regsiterBunch(data);
  };

  return (
    <>
      <FormRegisterContactPerson />

      <form
        className="FormRegisterEsal"
        method={'POST'}
        id="form"
        onSubmit={handleSubmit}
      >
        <div className={'register-esal'}>
          <div className={'div-register-esal'}>
            <header>
              <h1>Datos Entidad</h1>
            </header>
            <div className={'row'}>
              <div className={'col'}>
                <FieldForm
                  title={'Nombre entidad *'}
                  type={'text'}
                  name={'nameEntity'}
                  stateValidate={check.name}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setNameEvent(e.target.name);
                  }}
                  messageInfoUser={messageInfoUser.name}
                />
              </div>
              <div className={'col'}>
                <FieldForm
                  title={'Página web'}
                  type={'text'}
                  name={'website'}
                  stateValidate={check.website}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setNameEvent(e.target.name);
                  }}
                  messageInfoUser={messageInfoUser.website}
                />
              </div>
            </div>
            <div className={'row'}>
              <div className={'col'}>
                <TextAreaForm
                  title={'Descripción *'}
                  name={'description'}
                  placeholder={'Breve descripción de la entidad'}
                  rows={10}
                  cols={2}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setNameEvent(e.target.name);
                  }}
                  messageInfoUser={messageInfoUser.description}
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
                            name={'island'}
                            value={islands}
                            checked={false}
                            key={index}
                            onChange={(e) => {
                              setInputValue(e.target.value);
                              setNameEvent(e.target.name);
                            }}
                            messageInfoUser={messageInfoUser.island}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className={'col postal-code'}>
                    <FieldForm
                      title={'Código postal *'}
                      type={'text'}
                      name={'zipCode'}
                      onChange={(e) => {
                        setInputValue(e.target.value);
                        setNameEvent(e.target.name);
                      }}
                      messageInfoUser={messageInfoUser.zipCode}
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
                          name={'entityType'}
                          value={types}
                          checked={false}
                          key={index}
                          onChange={(e) => {
                            setInputValue(e.target.value);
                            setNameEvent(e.target.name);
                          }}
                          messageInfoUser={messageInfoUser.entityType}
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
                    {registered.map((items: string, index: number) => {
                      return (
                        <FormRadio
                          title={''}
                          type={'radio'}
                          name={'registeredEntity'}
                          value={items}
                          checked={false}
                          key={index}
                          onChange={(e) => {
                            setInputValue(e.target.value);
                            setNameEvent(e.target.name);
                          }}
                          messageInfoUser={messageInfoUser.registeredEntity}
                        />
                      );
                    })}
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
                  name={'privacyPolicy'}
                  value={''}
                  checked={false}
                  onChange={(e) => {
                    e.target.checked ? setInputValue(true) : setInputValue(false);
                    setNameEvent(e.target.name);
                  }}
                  messageInfoUser={messageInfoUser.privacyPolicy}
                />
                <p>
                  Estoy de acuerdo de con la {''}
                  <LinkText to={ROUTE.privacyPolicy} text={'Política de privacidad'} />.
                </p>
              </div>
              <div className={'data-protection'}>
                <FormRadio
                  title={'Protección de datos'}
                  type={'checkbox'}
                  name={'dataProtectionPolicy'}
                  value={''}
                  checked={false}
                  onChange={(e) => {
                    e.target.checked ? setInputValue(true) : setInputValue(false);
                    setNameEvent(e.target.name);
                  }}
                  messageInfoUser={messageInfoUser.dataProtectionPolicy}
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
    </>
  );
};

FormRegisterEsal.displayName = 'FormRegisterEsal';
