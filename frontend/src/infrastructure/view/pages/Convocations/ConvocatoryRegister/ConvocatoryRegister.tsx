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
import { stateValidateTypes } from '../../../components/atoms/InputFieldForm/types';

export const ConvocatoryRegister: React.FC<{}> = () => {
  const islandTenerife = ['Tenerife', 'La Palmas', 'La Gomera', 'El Hierro'];
  const islandLasPalmas = ['Gran Canaria', 'Fuerteventura', 'Lanzarote', 'La Graciosa'];
  // @ts-ignore
  const ages = [...Array(85).keys()].map((item) => (15 + item).toString());
  const exampleSkill: Skill = { name: 'Nombre skill', description: 'description' };
  const separatorDate = '/';
  const [finishDateIsCorrect, setFinishDateIsCorrect] = React.useState<
    stateValidateTypes
  >('');
  const [startDateIsCorrect, setStartDateIsCorrect] = React.useState<stateValidateTypes>(
    '',
  );
  const [data, setData] = useState({
    title: '',
    description: '',
    photo: '',
    city: 'Santa Cruz de Tenerife',
    localization: 'Prueba 1',
    agesMin: '15',
    agesMax: '16',
    startDay: '',
    finishDay: '',
    inscribedVolunteers: null,
    skills: exampleSkill,
  });

  const checkDateIsCorrect = (dateIsCorrect: boolean) => {
    const checkDate: Date = new Date();
    const toDay = {
      day: checkDate.getDate(),
      month: checkDate.getMonth(),
      year: checkDate.getFullYear(),
    };

    const startDateCheck: Date = new Date(
      String(data.startDay.split(separatorDate).reverse()),
    );
    const finishDateCheck: Date = new Date(
      String(data.finishDay.split(separatorDate).reverse()),
    );

    const toDayForCheck: Date = new Date(toDay.year, toDay.month, toDay.day);

    if (toDayForCheck <= startDateCheck && finishDateCheck > startDateCheck) {
      dateIsCorrect = true;
      setStartDateIsCorrect('correct');
      setFinishDateIsCorrect('correct');
    } else if (finishDateCheck < startDateCheck) {
      dateIsCorrect = false;
      setFinishDateIsCorrect('incorrect');
    } else if (toDayForCheck > startDateCheck) {
      setStartDateIsCorrect('incorrect');
      dateIsCorrect = false;
    }

    return dateIsCorrect;
  };

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

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
    // @ts-ignore
    if (checkDateIsCorrect()) {
      ConvocatoryService.registerConvocatory(convocatoryTemp, '');
    }
  }

  return (
    <div className="ConvocatoryRegister">
      <h1>Vista previa de la convocatoria</h1>
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
          title={'Nombre Entidad Convocante'}
          type={'text'}
          name={'title'}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />{' '}
        <FieldForm
          title={'Título de la Convocatoria'}
          type={'text'}
          name={'title'}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <div className={'first-date-address'}>
          <FormSelect
            text={'Provincia'}
            name={'city'}
            onChange={(e: any) => setData({ ...data, city: e.target.value })}
            optionsList={['Santa Cruz de Tenerife', 'Las Palmas']}
          />
          <FormSelect
            text={'Isla'}
            name={'localization'}
            onChange={(e) => setData({ ...data, localization: e.target.value })}
            optionsList={islandTenerife}
          />
          <FieldForm title={'Código Postal'} type={'text'} name={'Postal code'} />
          <FormSelect
            text={'Ciudad'}
            name={'city'}
            onChange={(e: any) => setData({ ...data, city: e.target.value })}
            optionsList={LIST_MUNICIPALITY}
          />
        </div>
        <div className={'second-date-address'}>
          <FieldForm title={'Dirección'} type={'text'} name={'address'} />
          <div className={'dates'}>
            <FieldForm
              title={'Inicio'}
              type={'date'}
              name={'startDay'}
              stateValidate={startDateIsCorrect}
              onChange={(e) =>
                setData({
                  ...data,
                  startDay: e.target.value
                    .split('-')
                    .reverse()
                    .join(separatorDate),
                })
              }
            />
            <FieldForm
              title={'Finalización'}
              type={'date'}
              name={'finishDay'}
              stateValidate={finishDateIsCorrect}
              onChange={(e) =>
                setData({
                  ...data,
                  finishDay: e.target.value
                    .split('-')
                    .reverse()
                    .join(separatorDate),
                })
              }
            />
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
        </div>
        <SubmitButton text={'Crear convocatoria'} />
      </form>
    </div>
  );
};

ConvocatoryRegister.displayName = 'ConvocatoryRegister';
