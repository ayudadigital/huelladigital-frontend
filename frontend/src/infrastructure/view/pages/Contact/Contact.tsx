import React from 'react';
import { LinkButton } from '../../components/atoms/LinkButton/LinkButton';
import { FieldForm } from '../../components/molecules/FieldForm';
import { FormSelect } from '../../components/molecules/FormSelect';

export const Contact: React.FC<{}> = () => {
  return (
    <div className="main-div">
      <div className="info-div">
        <p className="title">¡No dudes en ponerte en contacto con nosotros!</p>
        <ul>
          <li>
            <b>Persona en busca de ayuda:</b> Has identificado alguna necesidad y/o
            necesitas voluntarios que te ayuden.
          </li>
          <li>
            <b>Ayuda Profesional:</b> Si eres un profesional o empresa y has detectado
            alguna posible mejora con la que crees que puedes contribuir en esta campaña,
            nos vendría genial el apoyo de especialistas en: copywriting, marketing,
            diseño gráfico, redes sociales, comunicación, creación de contenidos, ley de
            protección de datos… así como en las diferentes iniciativas ciudadanas que
            irán surgiendo en los próximos días.
          </li>
          <li>
            <b>Prensa / Comunicación:</b> Si quieres ayudar difundiendo esta iniciativa,
            puedes hacerlo a través de las redes sociales, mediante una colaboración en
            prensa o medios de comunicación.
          </li>
          <li>
            <b>Asesoramiento:</b> Si tienes en mente poner en marcha una iniciativa de
            ayuda y no sabes como empezar, necesitas contactos o… quizá podamos ayudarte.
          </li>
        </ul>
        <p className="faq">
          Si tienes alguna duda consulta nuestras preguntas frecuentes.
        </p>
        <p className="slogan">¡Cada persona suma!</p>
      </div>
      <div className="contact-form-div">
        <p>Contacta con nosotros</p>
        <div className="form-fields">
          <FieldForm type="text" title="Nombre" name="name" />
          <FieldForm type="text" title="Apellidos" name="surname" />
          <FieldForm type="email" title="Correo electrónico" name="email" />
          <FieldForm type="email" title="Confirmar correo" name="email-confirmation" />
          <FieldForm type="text" title="Teléfono" name="phone-number" />
          <FieldForm type="text" title="Asunto" name="subject" />
          <FieldForm type="text-area" title="Mensaje" name="message" />
          <FormSelect text="Consentimiento *" name="consent" optionsList={['']} />
          <p>Acepto la política de privacidad del sitio</p>
          <p>CAPTCHA</p>
          <LinkButton path="" text="Enviar" />
        </div>
      </div>
    </div>
  );
};
