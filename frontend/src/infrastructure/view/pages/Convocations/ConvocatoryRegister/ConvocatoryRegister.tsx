import * as React from 'react';
import { useState } from 'react';
import './ConvocatoryRegister.scss';
import { FieldForm } from '../../../components/molecules/FieldForm';
import { SubmitButton } from '../../../components/atoms/SubmitButton';
import { ConvocatoryCard } from '../../../components/organisms/ConvocatoryCard';
import { FormSelect } from '../../../components/molecules/FormSelect';
import { LIST_MUNICIPALITY } from './assets/listMunicipality';
import { ConvocatoryService } from '../../../../../domain/services/Convocatory.service';
import { Convocatory, Skill } from '../../../../../domain/models/Convocatory';
import { Volunteer } from '../../../../../domain/models/Volunteer';
import { ProposalDTO } from '../../../../http/dtos/ProposalDTO';

export const ConvocatoryRegister: React.FC<{}> = () => {
  // @ts-ignore
  const ages = [...Array(85).keys()].map((item) => (15 + item).toString());
  const exampleSkill: Skill = { name: 'Nombre skill', description: 'description' };
  const [data, setData] = useState({
    title: '',
    description: '',
    photo: '',
    city: 'Santa Cruz de Tenerife',
    localization: 'Prueba 1',
    agesMin: '15',
    agesMax: '16',
    startDay: '01/01/2020',
    finishDay: '02/01/2020',
    inscribedVolunteers: null,
    skills: exampleSkill,
  });

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log(data);
    // TODO: Hacer el POST
    const convocatoryTemp: Convocatory = {
      title: data.title,
      organizer: '',
      category: '',
      minimumAge: Number(data.agesMin),
      maximumAge: Number(data.agesMax),
      province: 0,
      town: data.city,
      address: '',
      startingDate: data.startDay,
      closingDate: '',
      endingDate: '',
      startingVolunteeringDate: '',
      status: 0,
      description: data.description,
      instructions: '', // ¿Qué voy a hacer?
      extraInfo: '', // ¿Qué más necesito saber?
      duration: 0,
      imageURL: '',
      inscribedVolunteersCount: 0,
      inscribedVolunteers: data.inscribedVolunteers,
      skills: [data.skills],
      requirements: [''],
    };

    ConvocatoryService.registerConvocatory(convocatoryTemp, '');
  }

  return (
    <div className="ConvocatoryRegister">
      <h2>Preview de cómo se vería</h2>
      <ConvocatoryCard
        title={data.title}
        description={data.description}
        photo={data.photo}
        city={data.city}
        localization={data.localization}
        agesRange={`${data.agesMin}-${data.agesMax}`}
        startDay={data.startDay}
        finishDay={data.finishDay}
      />

      <form className="ContainerForm" method="POST" id="form" onSubmit={handleSubmit}>
        <FieldForm
          title={'Título'}
          type={'text'}
          name={'title'}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <FieldForm
          title={'Descripción'}
          type={'text'}
          name={'description'}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
        <FieldForm
          title={'Foto'}
          type={'file'}
          name={'photo'}
          onChange={(e) => setData({ ...data, photo: e.target.value })}
        />
        <FormSelect
          text={'Ciudad'}
          name={'city'}
          onChange={(e: any) => setData({ ...data, city: e.target.value })}
          optionsList={LIST_MUNICIPALITY}
        />
        <FormSelect
          text={'Ubicación'}
          name={'localization'}
          onChange={(e) => setData({ ...data, localization: e.target.value })}
          optionsList={['Prueba 1', 'Prueba 2', 'Prueba 3', 'Prueba 4', 'Prueba 5']}
        />
        <h3>Edades</h3>
        <div className={'ages'}>
          <FormSelect
            text={'Mínima '}
            name={'agesRangeMin'}
            onChange={(e) => setData({ ...data, agesMin: e.target.value })}
            optionsList={ages}
          />

          <FormSelect
            text={'Máxima '}
            name={'agesRangeMax'}
            onChange={(e) => setData({ ...data, agesMax: e.target.value })}
            optionsList={ages}
          />
        </div>
        <h3>Fechas</h3>
        <div className={'dates'}>
          <FieldForm
            title={'Inicio'}
            type={'date'}
            name={'startDay'}
            onChange={(e) =>
              setData({
                ...data,
                startDay: e.target.value
                  .split('-')
                  .reverse()
                  .join('/'),
              })
            }
          />
          <FieldForm
            title={'Finalización'}
            type={'date'}
            name={'finishDay'}
            onChange={(e) =>
              setData({
                ...data,
                finishDay: e.target.value
                  .split('-')
                  .reverse()
                  .join('/'),
              })
            }
          />
        </div>
        <SubmitButton text={'Crear convocatoria'} />
      </form>
    </div>
  );
};

ConvocatoryRegister.displayName = 'ConvocatoryRegister';
