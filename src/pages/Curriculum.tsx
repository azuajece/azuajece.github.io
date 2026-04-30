import { memo } from 'react'
import '../styles/Pages.css'

interface Experience {
  id: number
  empresa: string
  ubicacion: string
  puesto: string
  fecha: string
  descripcion: string[]
}

const experiencias: Experience[] = [
  {
    id: 1,
    empresa: 'Accenture',
    ubicacion: 'Buenos Aires, Argentina',
    puesto: 'Developer Full Stack',
    fecha: 'Julio 2022 - Actualmente',
    descripcion: [
      'Trabajando como Desarrollador Fullstack en una Web App interna de la empresa llamada Master Data input Tool para automatizar la manipulación de datos en uno de sus equipos. Tecnologías: Angular y Express.',
      'Trabajé en el rol de Desarrollador Fullstack para desarrollar una encuesta para el Coloquio IDEA 2025. Tecnologías: React y Nest Js.',
      'Trabajé en el rol de Desarrollador frontend para la integración del JDK de Adobe Experience Platform Data Collection para la implementación de etiquetas de seguimientos en la App Mobile del Banco Santander Argentina. Tecnologías: React Native.',
      'Trabajé en el rol de Desarrollador frontend en una Web App interna de la empresa llamada Data Platform Services Portal para el seguimientos de ticket o proyectos. Tecnologías: Angular.',
      'Trabajé en el rol de Desarrollador, creación de un sistema para el registro de emprendedores Conectar, con el rol principal de desarrollador backend. Tecnologías: Angular, PHP, Web Apis, Laravel, MySQL.',
    ],
  },
  {
    id: 2,
    empresa: 'Via Bariloche',
    ubicacion: 'Buenos Aires, Argentina',
    puesto: 'Developer Full Stack',
    fecha: 'Marzo 2020 - Junio 2022',
    descripcion: [
      'Participación en la creación, edición y adaptaciones de los diferentes sistemas y sitio web desarrollados en WordPress, Codeigniter, React Js, Bootstrap, CSS, Jquery, HTML, MySQL y SQL Server, además de la creación y modificaciones de los diferentes métodos API que se encargan de manipular la información del sistema de compra de pasajes.',
    ],
  },
  {
    id: 3,
    empresa: 'Punto IT S.R.L.',
    ubicacion: 'Buenos Aires, Argentina',
    puesto: 'Developer Full Stack',
    fecha: 'Marzo 2019 - Marzo 2020',
    descripcion: [
      'Trabajé como consultor para AUSA (Carreteras Urbanas) y participando en adecuaciones al sistema FLEET y también desarrollando el sistema para obtener diferentes reportes de impresoras fiscales de la empresa HASAR.',
      'Desarrollo de servicios web para el intercambio de información entre diferentes sistemas para uso interno, todos desarrollados en ASP.Net, C# .Net y SQL Server.',
      'Desarrollo del sitio web Creadoreshtml.com.ar, plataforma para el aprendizaje, desarrollado en PHP y MySQL con ayuda del CMS Moodle.',
      'Desarrollo del sitio web Calendar.puntoit.com.ar, sistema de control de permisos del personal, desarrollado con Bootstrap, Laravel y MySQL.',
      'Desarrollo de aplicación móvil Android para el Club Ferro Carril Oeste, aplicaciones utilizadas para mostrar información sobre sus actividades y servicios, desarrolladas con React Native y Backend Laravel y MySQL.',
    ],
  },
  {
    id: 4,
    empresa: 'Globaltech S.A.',
    ubicacion: 'Buenos Aires, Argentina',
    puesto: 'Developer Full Stack',
    fecha: 'Enero 2018 - Marzo 2019',
    descripcion: [
      'Trabajo inicialmente remoto desde Venezuela y luego presencial en Argentina.',
      'Participación en modificaciones al sistema WMS DEPOT desarrollado en Visual Basic .Net.',
      'Desarrollo de diferentes servicios web con Microframework SLIM (PHP) y SQL Server para procesar información entre su sistema y otros externos.',
      'Desarrollo del sistema para el intercambio de información entre WMS DEPOT y la Capa de Servicio (SAP Business One), desarrollado en PHP, Bootstrap, Ajax, Jquery y SQL Server.',
    ],
  },
  {
    id: 5,
    empresa: 'Imagina Colombia',
    ubicacion: 'Ibagué, Colombia',
    puesto: 'Developer Full Stack',
    fecha: 'Febrero 2016 - Diciembre 2017',
    descripcion: [
      'Estuve trabajando remotamente desde Venezuela, como desarrollador Frontend de diferentes sitios web usando CMS WordPress o Asgard como también CSS y LESS. Principalmente el trabajo fue llevar de una maqueta en imagen de la web a un sitio web.',
    ],
  },
  {
    id: 6,
    empresa: 'PDVSA Guardián Del Alba S.A.',
    ubicacion: 'Mérida, Venezuela',
    puesto: 'Developer Full Stack',
    fecha: 'Octubre 2012 - Junio 2016',
    descripcion: [
      'Estuve participando en el desarrollo e implementación del Sistema Integral de Confiabilidad de Activos (SCIA) de PDVSA Industrial desarrollado en QOOXDOO y PostgreSQL.',
      'Como principal tarea dentro de esta empresa fue el desarrollo desde el inicio al fin del Sistema de Monitoreo Nacional (SIMON) de Inventario de materiales de construcción, desarrollado con el framework Symfony, librerías como Ajax y Jquery y base de datos PostgreSQL.',
    ],
  },
  {
    id: 7,
    empresa: 'Instituto Tecnológico Universitario Dr. Cristobal Mendoza',
    ubicacion: 'Mérida, Venezuela',
    puesto: 'Profesor',
    fecha: 'Marzo 2010 - Noviembre 2014',
    descripcion: [
      'Docente part time en horario nocturno y sábado en la rama de Informática dictando las materias Lógica de Programación, Lenguaje y Programación (HTML, PHP y MySQL) y Mantenimiento de Computadoras.',
    ],
  },
  {
    id: 8,
    empresa: 'Infocentro Foundation',
    ubicacion: 'Mérida, Venezuela',
    puesto: 'Soporte Técnico',
    fecha: 'Enero 2010 - Octubre 2012',
    descripcion: [
      'Institución estatal encargada de brindar gratuitamente servicios de internet y cursos a comunidades cercanas. Mi función principal era el control y mantenimiento de computadoras en más de 6 centros de capacitación.',
    ],
  },
  {
    id: 9,
    empresa: 'Janus Sistemas C.A',
    ubicacion: 'Mérida, Venezuela',
    puesto: 'Analista Programador',
    fecha: 'Marzo 2007 - Julio 2009',
    descripcion: [
      'Este fue mi primer trabajo como desarrollador, aun siendo estudiante de la última fase de la carrera universitaria.',
      'Participación en el desarrollo del sistema de Operaciones y Producción de Fenix Soft.',
      'Desarrollo del sistema de Producción para la empresa Producciones Marquibe Mérida Venezuela, ambos sistemas desarrollados con MOJAVI, EZPDO y MySQL.',
    ],
  },
]

const ExperienceItem = memo(function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <h3 className="experience-title">{experience.puesto}</h3>
        <span className="experience-date">{experience.fecha}</span>
      </div>
      <div className="experience-company">
        <p className="company-name">{experience.empresa}</p>
        <p className="company-location">{experience.ubicacion}</p>
      </div>
      <div className="experience-description">
        {experience.descripcion.map((desc, idx) => (
          <p key={idx}>{desc}</p>
        ))}
      </div>
    </div>
  )
})

const Curriculum = memo(function Curriculum() {
  return (
    <section className="page-section">
      <div className="container">
        <h2 className="section-title">Curriculum / Experiencia Laboral</h2>
        <div className="curriculum-content">
          {experiencias.map((exp) => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  )
})

export default Curriculum
