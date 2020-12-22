import React from 'react';
import './styles.scss';
import { LinkButton } from '../../components/atoms/LinkButton/LinkButton';
import { ROUTE } from '../../../http/routes';
import { LinkText } from '../../components/atoms/LinkText';
import { Image } from '../../components/atoms/Image';

export const Home: React.FC<{}> = () => {
  return (
    <div className="main-div">
      <div className="welcome-div">
        <p>PLATAFORMA DE VOLUNTARIADO EN CANARIAS</p>
        <p>Campaña #CORONAYUDA - Ahora y Después. Porque juntos somos más fuertes.</p>
        <LinkButton path="" text="Quiero ayudar (Voluntariado)" />
        <LinkButton path="" text="Necesito ayuda (Personas / Entidades)" />
      </div>
      <div className="main-event">
        <p>¿Qué es la campaña?</p>
        <iframe
          width="901"
          height="507"
          src="https://www.youtube.com/embed/3woUcQNAf2k"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <p>
          La campaña #Coronayuda es una iniciativa ciudadana que surgió con el objetivo de
          amortiguar los efectos de la Crisis del Coronavirus en Canarias. Una crisis que
          ya sabíamos que no sería cosa de unos días, y que ha ido evolucionando a lo
          largo de los meses, así como las necesidades de los diferentes colectivos y
          personas afectadas. Desde el inicio de la pandemia, la solidaridad se ha
          disparado, experimentando un aumento sin precedentes. La situación ha cambiado,
          pero esta crisis aún no ha concluido. Seguimos necesitando voluntarios (héroes
          anónimos) que nos ayuden a continuar en nuestra lucha.
        </p>
        <Image source="" description="Logo Huella Positiva" />
        <LinkText to="" text="¡Buscamos superpersonas enmascaradas!" />
        <p>Y quizás tú seas una de ellas.</p>
      </div>
      <div className="volunteer-info">
        <p>El VOLUNTARIADO es la mejor solución transitoria</p>
        <p>
          Quedarse en casa es la primera medida solidaria que de manera individual puedes
          llevar a cabo. Pero no la única. Las personas voluntarias tienen históricamente
          una función fundamental en las situaciones de crisis. Gracias a su labor, la
          vuelta a la normalidad se produce más rapidamente. Ahora tienes la oportunidad
          de contribuir, aportando tu granito de arena.
        </p>
        <p>
          #CORONAYUDA Campaña Crisis del #coronavirus en Canarias ¡Es el momento de los
          superhéroes anónimos!
        </p>
        <LinkButton text="Quiero ayudar" path="" />
      </div>
      <div className="porpose-info-div">
        <div>
          <p>Una respuesta ante una situación cambiante</p>
          <p>
            La epidemia del Coronavirus ha desencadenado una crisis global muy compleja
            que requiere de ajustes casi diarios que tienen una repercusión directa en la
            vida de millones de personas. Hoy por hoy, se cuentan por miles las personas
            que se han visto afectadas por esta pandemia. Personas cuyas vidas ya no
            volverán a ser las mismas. ¡Esta es tu oportunidad de poder ayudarlas!
          </p>
        </div>
        <div>
          <div>
            <Image source="" description="New initiative" />
            <p>Nuevas Iniciativas</p>
            <p>
              Son muchas las iniciativas útiles y altruistas que se están poniendo en
              marcha. Todas estas iniciativas van a necesitar de personas voluntarias que
              presten su ayuda para poder llevarlas a cabo. Aquí es donde entramos
              nosotros.
            </p>
          </div>
          <div>
            <Image source="" description="Overwhelmed organizations" />
            <p>Instituciones Desbordadas</p>
            <p>
              Las instituciones públicas se encuentran desbordadas. Necesitan ayuda y
              colaboración externa. Es nuestra obligación responder como sociedad ante las
              repercusiones presentes y futuras. Es el momento de ayudarnos entre todos
            </p>
          </div>
          <div>
            <Image source="" description="Answers" />
            <p>Respuesta</p>
            <p>
              La plataforma de voluntariado es una herramienta muy útil que nos permitirá
              organizarnos para estar disponibles y preparados ante las necesidades que
              irán surgiendo en los próximos meses y poder así responder más rápidamente.
            </p>
          </div>
        </div>
        <div className="how-it-works-div">
          <p>¿Cómo funciona?</p>
          <p>
            La idea principal en la que se basa la plataforma es simple: conectar a
            aquellas personas que necesitan ayuda con voluntarios dispuestos a ayudar,
            tanto ahora como después, en el transcurso de esta crisis. Para ello, hemos
            creado dos registros distintos, uno para las personas que deseen ofrecerse
            como voluntarios (quiero ayudar) y otro para las entidades que ya están
            organizando iniciativas y necesitan voluntariado (necesito ayuda). De esta
            manera, las entidades podrán centrar sus esfuerzos en articular las distintas
            iniciativas, sin perder tiempo y recursos buscando personas voluntarias, pues
            la plataforma agiliza todo el proceso de búsqueda y organización del
            voluntariado. Esta plataforma ha sido a su vez concebida para que todos los
            participantes puedan interactuar, colaborando entre sí mediante iniciativas
            propias que atiendan las necesidades emergentes, promoviendo la inteligencia
            colectiva y la participación a través de tecnologías sociales especificas.
          </p>
          <Image source="" description="Diagram" />
        </div>
        <div>
          <p>Áreas de Actuación</p>
          <p>
            Son varias las iniciativas que se pueden poner en marcha en función de las
            necesidades y los retos presentes y futuros.
          </p>
          <p>Estos son solo algunos ejemplos:</p>
        </div>
        <div></div>
        <div className="allies-div">
          <p>Entidades aliadas</p>
          <div></div>
        </div>
        <div className="why-volunteer-div"></div>
        <div className="platform-description-div"></div>
        <div></div>
        <div className="collaborators-div"></div>
        <div className="other-info"></div>
        <div className="home-media-div"></div>
      </div>
    </div>
  );
};
