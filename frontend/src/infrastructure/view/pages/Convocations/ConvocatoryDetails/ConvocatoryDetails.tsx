import * as React from 'react';
import './ConvocatoryDetails.scss';
import { Convocatory } from '../../../../../domain/models/Convocatory';
import exampleConvocatory from './exampleConvocatory.json';
import { Image } from '../../../components/atoms/Image';
import { ConvocatoryListRequirements } from '../../../components/molecules/ConvocatoryListRequirements';
import { ConvocatoryListSkills } from '../../../components/molecules/ConvocatoryListSkills';
import { ConvocatoryTextSection } from '../../../components/molecules/ConvocatoryTextSection';
import { ConvocatoryInformationDisplay } from '../../../components/molecules/ConvocatoryInformationDisplay';
import { Context } from '../../../../Context';
import { InputFieldForm } from '../../../components/atoms/InputFieldForm';
import { FieldForm } from '../../../components/molecules/FieldForm';
import { InputTextArea } from '../../../components/atoms/InputTextArea';
import { FormRegisterVolunteer } from '../../../components/organisms/Forms/FormRegisterVolunteer';
import { SubmitButton } from '../../../components/atoms/SubmitButton';

export const ConvocatoryDetails: React.FC<{}> = () => {
  const convocatory = exampleConvocatory.Convocatory as Convocatory;
  const isAuth = React.useContext(Context);
  return (
    <div className="ConvocatoryDetails">
      <div className="Convocatory">
        <div className="Img-title-container">
          <Image source={convocatory.imageURL} description=""></Image>
          <div className="Title">
            <h2>{convocatory.title}</h2>
          </div>
        </div>
        <div className="Content">
          <div className="TableContainer">
            <ConvocatoryInformationDisplay convocatory={convocatory} />
          </div>
          <div className="ConvocatoryInfo">
            <ConvocatoryTextSection
              title="¿Qué voy a hacer?"
              content={convocatory.description}
            />
            <ConvocatoryListSkills
              title="¿Qué habilidades desarrollaré para mi CV?"
              skills={convocatory.skills}
            />
            <ConvocatoryListRequirements
              title="¿Qué necesito?"
              requirements={convocatory.requirements}
            />
            <ConvocatoryTextSection
              title="¿Qué más necesito saber?"
              content={convocatory.extraInfo}
            />
          </div>
        </div>
        {isAuth ? (
          <div className="convocatory-register">
            <FieldForm title="Correo" type="text" name="Correo" />
            <FieldForm title="Contraseña" type="password" name="Contraseña" />
            <FieldForm title="Contraseña" type="password" name="Contraseña" />
            <hr />
            <FieldForm title="Nombre" type="text" name="Nombre" />
            <FieldForm title="Apellidos" type="text" name="Apellidos" />
            <label>Motivaciones</label>
            <InputTextArea name="Motivaciones" placeholder="" />
            <SubmitButton text="Inscribirse" />
          </div>
        ) : (
          <div className="convocatory-register">
            <FieldForm title="Nombre" type="text" name="Nombre" />
            <FieldForm title="Apellidos" type="text" name="Apellidos" />
            <label>Motivaciones</label>
            <InputTextArea name="Motivaciones" placeholder="" />
          </div>
        )}
      </div>
    </div>
  );
};

ConvocatoryDetails.displayName = 'ConvocatoryDetails';
