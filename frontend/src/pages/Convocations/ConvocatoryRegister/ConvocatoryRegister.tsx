import * as React from 'react';
import { useState } from 'react';
import './ConvocatoryRegister.scss';
import { FieldForm } from '../../../components/molecules/FieldForm';
import { SubmitButton } from '../../../components/atoms/SubmitButton';
import { ConvocatoryCard } from '../../../components/organisms/ConvocatoryCard';
import { FormSelect } from '../../../components/molecules/FormSelect';
import { LIST_MUNICIPALITY } from './assets/listMunicipality';
import { ConvocatoryDto } from '../../../utils/dto';
import ConvocatoriesFetch from '../../../utils/fetch/convocatories';
import { FileWatcherEventKind } from 'typescript';

export const ConvocatoryRegister: React.FC<{}> = () => {
  const [image, setImage] = useState('');
  // @ts-ignore
  const ages = [...Array(85).keys()].map((item) => (15 + item).toString());
  const [data, setData] = useState({
    title: '',
    esalName: '',
    province: '',
    town: 'No seleccionado',
    address: 'Santa Cruz de Tenerife',
    minimumAge: 15,
    maximumAge: 16,
    startingProposalDate: '01/01/2020',
    startingVolunteeringDate: '01/01/2020',
    closingProposalDate: '02/01/2020',
    description: '',
    durationInDays: '0',
    category: '',
    imageURL: '',
  });

  function handleFileChange (e: any) {
    const fileReader = new FileReader();
    const file = e.target.files[0];
    fileReader.readAsDataURL(file);
    fileReader.onload = (event: Event) => {
      window.localStorage.setItem(
        'Image', fileReader.result as string
      );
      setImage(fileReader.result as string);
    }
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const convocatoryDto : ConvocatoryDto = data;
    const fetcher = new ConvocatoriesFetch();
    fetcher.addNewConvocatory(convocatoryDto);


  }

  return (
    <div className="ConvocatoryRegister">
      <h2>Preview de cómo se vería</h2>
      <ConvocatoryCard
        title={data.title}
        description={data.description}
        photo={image}
        city={data.town}
        localization={data.town}
        agesRange={`${data.minimumAge}-${data.maximumAge}`}
        startDay={data.startingProposalDate}
        finishDay={data.closingProposalDate}
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
          onChange={(e) => handleFileChange(e)}
        />
        <FormSelect
          title={'Ciudad'}
          name={'city'}
          onChange={(e: any) => setData({ ...data, town: e.target.value })}
          optionsList={LIST_MUNICIPALITY}
        />
        <FormSelect
          title={'Ubicación'}
          name={'localization'}
          onChange={(e) => setData({ ...data, town: e.target.value })}
          optionsList={['Prueba 1', 'Prueba 2', 'Prueba 3', 'Prueba 4', 'Prueba 5']}
        />
        <h3>Edades</h3>
        <div className={'ages'}>
          <FormSelect
            title={'Mínima '}
            name={'agesRangeMin'}
            onChange={(e) => setData({ ...data, minimumAge: e.target.value })}
            optionsList={ages}
          />

          <FormSelect
            title={'Máxima '}
            name={'agesRangeMax'}
            onChange={(e) => setData({ ...data, maximumAge: e.target.value })}
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
                startingProposalDate: e.target.value
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
                startingProposalDate: e.target.value
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
