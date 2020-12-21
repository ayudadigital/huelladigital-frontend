import * as React from 'react';
import './FormRegisterEsal.scss';
import { FieldForm } from '../../../molecules/FieldForm';
import { TextAreaForm } from '../../../molecules/TextAreaForm';
import { FormRadio } from '../../../molecules/FormRadio';
import { Label } from '../../../atoms/Label';
import { Image } from '../../../atoms/Image';
import superHeroes from '../../../atoms/Image/assets/superHeroes.svg';

export const FormRegisterEsal: React.FC<{}> = () => {
  return (
    <div className="RegisterEsal">
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
          <div className={'col'}>
            <Label text={'Ubicación *'} />
            <div className={'row'}>
              <div className={'col'}>
                <section>
                  <div className="formRadio">
                    <section>
                      <FormRadio
                        title={''}
                        type={'radio'}
                        name={'Gran Canaria'}
                        value={'Gran Canaria'}
                        checked={false}
                      />
                      <FormRadio
                        title={''}
                        type={'radio'}
                        name={'Fuerteventura'}
                        value={'Fuerteventura'}
                        checked={false}
                      />
                      <FormRadio
                        title={''}
                        type={'radio'}
                        name={'Lanzarote'}
                        value={'Lanzarote'}
                        checked={false}
                      />
                      <FormRadio
                        title={''}
                        type={'radio'}
                        name={'La Graciosa'}
                        value={'La Graciosa'}
                        checked={false}
                      />
                    </section>
                    <section>
                      <FormRadio
                        title={''}
                        type={'radio'}
                        name={'Tenerife'}
                        value={'Tenerife'}
                        checked={false}
                      />
                      <FormRadio
                        title={''}
                        type={'radio'}
                        name={'La Palmas'}
                        value={'La Palmas'}
                        checked={false}
                      />
                      <FormRadio
                        title={''}
                        type={'radio'}
                        name={'La Gomera'}
                        value={'La Gomera'}
                        checked={false}
                      />
                      <FormRadio
                        title={''}
                        type={'radio'}
                        name={'El Hierro'}
                        value={'El Hierro'}
                        checked={false}
                      />
                    </section>
                  </div>
                </section>
              </div>
              <div className={'col postalCode'}>
                <FieldForm title={'Código Postal *'} type={'text'} name={'Otros'} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={'row'}>
        <div className={'col'}>
          <Label text={'Logo *'} />
          <div className="imageFileUpload">
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
        <div className={'col'}>
          <Label text={'Tipo de entidad *'} />
          <div className="row">
            <div className="formOrganization">
              <FormRadio
                title={''}
                type={'radio'}
                name={'Asociacion'}
                value={'Asociacion'}
                checked={false}
              />
              <FormRadio
                title={''}
                type={'radio'}
                name={'Fundacion'}
                value={'Fundacion'}
                checked={false}
              />

              <FormRadio
                title={''}
                type={'radio'}
                name={'Club Deportivo'}
                value={'Club Deportivo'}
                checked={false}
              />
              <FormRadio
                title={''}
                type={'radio'}
                name={'Colegio Profesional'}
                value={'Colegio Profesional'}
                checked={false}
              />
              <FormRadio
                title={''}
                type={'radio'}
                name={'Federacion Deportiva'}
                value={'Federacion Deportiva'}
                checked={false}
              />
            </div>
          </div>
          <div className={'registerIntoGovernment'}>
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
