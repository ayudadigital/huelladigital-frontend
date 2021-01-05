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

export const FormRegisterEsal: React.FC<{}> = () => {
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

  return (
    <div className="FormRegisterEsal">
      <form className={'register-esal'} method="post">
        <header>
          <h1>Datos Entidad</h1>
        </header>
        <section>
          <form className={'row'}>
            <form className={'col'}>
              <FieldForm title={'Nombre Entidad *'} type={'text'} name={'Entidad'} />
            </form>
            <form className={'col'}>
              <FieldForm title={'Página Web'} type={'text'} name={'Web'} />
            </form>
          </form>
        </section>{' '}
        <section>
          <form className={'row'}>
            <form className={'col'}>
              <TextAreaForm
                title={'Descripción *'}
                name={'Descripcion'}
                placeholder={'Breve descripción de la entidad'}
                rows={10}
                cols={2}
              />
            </form>
            <form className={'col localization'}>
              <Label text={'Ubicación *'} />
              <form className={'row'}>
                <form className={'col'}>
                  <section>
                    <form className="form-radio">
                      {island.map((islands, index) => {
                        return (
                          <FormRadio
                            title={''}
                            type={'radio'}
                            name={islands}
                            value={islands}
                            checked={false}
                            key={index}
                          />
                        );
                      })}
                    </form>
                  </section>
                </form>
                <form className={'col postal-code'}>
                  <FieldForm title={'Código Postal *'} type={'text'} name={'Otros'} />
                </form>
              </form>
            </form>
          </form>
        </section>
        <form className={'row'}>
          <form className={'col'}>
            <Label text={'Logo *'} />
            <form className="image-upload">
              <label>
                <input type="file" className={'file'} />
                <Image
                  source={superHeroes}
                  description={'super heroes logo register'}
                  width={'300px'}
                />
              </label>
            </form>
          </form>
          <form className={'col organization'}>
            <Label text={'Tipo de entidad *'} />
            <form className="row">
              <form className="form-organization">
                {associationType.map((types, index) => {
                  return (
                    <FormRadio
                      title={''}
                      type={'radio'}
                      name={types}
                      value={types}
                      checked={false}
                      key={index}
                    />
                  );
                })}
              </form>
            </form>
            <form className={'register-government'}>
              <Label
                text={
                  'Registrada como entidad de voluntariado en el Gobierno de Canarias *'
                }
              />
              <form className={'row'}>
                <FormRadio
                  title={''}
                  type={'checkbox'}
                  name={'Affirmative'}
                  value={'Sí'}
                  checked={false}
                />
                <FormRadio
                  title={''}
                  type={'checkbox'}
                  name={'Negative'}
                  value={'No'}
                  checked={false}
                />
              </form>
            </form>
          </form>
        </form>
        <form className={'row consents-check'}>
          <Label text={'Consentimientos *'} />
          <section className={'data-protection'}>
            <FormRadio
              title={'Política Privacidad'}
              type={'checkbox'}
              name={'Política Privacidad'}
              value={''}
              checked={false}
            />
            <p>
              Estoy de acuerdo de con la {''}
              <LinkText to={'/'} text={'Política de Privacidad'} />.
            </p>
          </section>
          <section className={'data-protection'}>
            <FormRadio
              title={'Protección de datos'}
              type={'checkbox'}
              name={'Proteccion de datos'}
              value={''}
              checked={false}
            />
            <p>
              Estoy de acuerdo de con la {''}
              <LinkText to={'/'} text={'Política de Protección de Datos'} />.
            </p>
          </section>
          <section className={'button-register'}>
            <SubmitButton text={'Registrar Entidad'} />
          </section>
        </form>
      </form>
    </div>
  );
};

FormRegisterEsal.displayName = 'FormRegisterEsal';
