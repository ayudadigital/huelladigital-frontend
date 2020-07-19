import * as React from 'react';
import { useState } from 'react';
import './ConvocatoryRegister.scss';
import { FieldForm } from '../../../components/molecules/FieldForm';
import { SubmitButton } from '../../../components/atoms/SubmitButton';
import { ConvocatoryCard } from '../../../components/organisms/ConvocatoryCard';
import { FormSelect } from '../../../components/molecules/FormSelect';
import { LIST_MUNICIPALITY } from './assets/listMunicipality';


export const ConvocatoryRegister: React.FC<{}> = () => {
  // @ts-ignore
  const ages = [...Array(85).keys()].map(item => (15 + item).toString());
  const [data, setData] = useState(
    {
      title: '',
      description: '',
      photo: '',
      city: 'Santa Cruz de Tenerife',
      localization: '',
      agesMin: '15',
      agesMax: '16',
      startDay: '01/01/2020',
      finishDay: '02/01/2020',
    },
  );

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log(data);
    // TODO: Hacer el POST
  }

  return (
    <div className="ConvocatoryRegister">
      <h2>Preview de cómo se vería</h2>
      <ConvocatoryCard title={data.title}
                       description={data.description}
                       photo={data.photo}
                       city={data.city}
                       localization={data.localization}
                       agesRange={`${data.agesMin}-${data.agesMax}`}
                       startDay={data.startDay}
                       finishDay={data.finishDay}
      />


      <form className="ContainerForm" method="POST" id="form" onSubmit={handleSubmit}>
        <FieldForm title={'Título'}
                   type={'text'}
                   name={'title'}
                   onChange={(e) => setData({ ...data, title: e.target.value })}/>
        <FieldForm title={'Descripción'}
                   type={'text'}
                   name={'description'}
                   onChange={(e) => setData({ ...data, description: e.target.value })}/>
        <FieldForm title={'Foto'}
                   type={'file'}
                   name={'photo'}
                   onChange={(e) => setData({ ...data, photo: e.target.value })}/>
        <FormSelect title={'Ciudad'}
                    name={'city'}
                    onChange={(e: any) => setData({ ...data, city: e.target.value })}
                    optionsList={LIST_MUNICIPALITY}
        />
        <FormSelect title={'Ubicación'}
                    name={'localization'}
                    onChange={(e) => setData({ ...data, localization: e.target.value })}
                    optionsList={['Prueba 1', 'Prueba 2', 'Prueba 3', 'Prueba 4', 'Prueba 5']}
        />
        <FormSelect title={'Edad mínima '}
                    name={'agesRange'}
                    onChange={(e) => setData({ ...data, agesMin: e.target.value })}
                    optionsList={ages}
        />
        <FormSelect title={'Edad máxima '}
                    name={'agesRange'}
                    onChange={(e) => setData({ ...data, agesMax: e.target.value })}
                    optionsList={ages}
        />
        <FieldForm title={'Fecha de inicio'}
                   type={'date'}
                   name={'startDay'}
                   onChange={(e) => setData({ ...data, startDay: e.target.value.split('-').reverse().join('/') })}/>
        <FieldForm title={'Fecha de finalización'}
                   type={'date'}
                   name={'finishDay'}
                   onChange={(e) => setData({ ...data, finishDay: e.target.value.split('-').reverse().join('/') })}/>
        <SubmitButton text={'Crear convocatoria'}/>
      </form>
    </div>
  );
};

ConvocatoryRegister.displayName = 'ConvocatoryRegister';
