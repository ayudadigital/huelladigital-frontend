import * as React from 'react';
import './FormRegisterEsal.scss';
import { FieldForm } from '../../../molecules/FieldForm';
import { TextAreaForm } from '../../../molecules/TextAreaForm';
import { FormRadio } from '../../../molecules/FormRadio';
import { Label } from '../../../atoms/Label';
import { Image } from '../../../atoms/Image';
import superHeroes from '../../../atoms/Image/assets/superHeroes.svg';

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
    <div className="register-esal">
      <header>
        <h1>Datos Entidad</h1>
      </header>
      <section>
        <div className={'row'}>
          <div className={'col'}>
            <FieldForm title={'Nombre Entidad *'} type={'text'} name={'Entidad'} />
          </div>
          <div className={'col'}>
            <FieldForm title={'Página Web'} type={'text'} name={'Web'} />
          </div>
        </div>
      </section>{' '}
      <section>
        <div className={'row'}>
          <div className={'col'}>
            <TextAreaForm
              title={'Descripción *'}
              name={'Descripcion'}
              placeholder={'Breve descripción de la entidad'}
              rows={10}
              cols={2}
            />
          </div>
          <div className={'col localization'}>
            <Label text={'Ubicación *'} />
            <div className={'row'}>
              <div className={'col'}>
                <section>
                  <div className="form-radio">
                    {island.map((islands) => {
                      return (
                        <FormRadio
                          title={''}
                          type={'radio'}
                          name={islands}
                          value={islands}
                          checked={false}
                        />
                      );
                    })}
                  </div>
                </section>
              </div>
              <div className={'col postal-code'}>
                <FieldForm title={'Código Postal *'} type={'text'} name={'Otros'} />
              </div>
            </div>
          </div>
        </div>
      </section>
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
            <div className="form-organization">
              {associationType.map((types) => {
                return (
                  <FormRadio
                    title={''}
                    type={'radio'}
                    name={types}
                    value={types}
                    checked={false}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FormRegisterEsal.displayName = 'FormRegisterEsal';
