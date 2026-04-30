import { memo } from 'react'
import '../styles/Pages.css'

const SobreMi = memo(function SobreMi() {
  const skills = [
    'Colaborador',
    'Proactivo',
    'Trabajo en equipo',
    'Aprendizaje constante',
    'Compromiso y dedicación',
    'Creativo',
    'Capacidad de análisis',
  ]

  const languages = ['Español (Nativo)', 'Inglés (Básico A2)']

  const hobbies = ['Fútbol', 'Aggressive Roller Skate', 'Videojuegos']

  return (
    <section className="page-section">
      <div className="container">
        <h2 className="section-title">Sobre Mi</h2>
        <div className="content-box">
          <p className="about-text">
            Trabajo como desarrollador freelance por más de <strong>17 años</strong> para
            diferentes clientes/empresas, entre ellas PDVSA, Venezuela por
            aproximadamente <strong>4 años</strong>.
          </p>
          <p className="about-text">
            En los últimos <strong>4 años</strong> he estado trabajando para{' '}
            <strong>Accenture</strong> como Desarrollador FullStack utilizando
            tecnologías como <strong>PHP, Js, Angular, HTML, React Js, React Native, Nest Js, Express</strong>.
          </p>

          <h3 className="subsection-title">Aptitudes</h3>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <h3 className="subsection-title">Lenguajes</h3>
          <ul className="skills-list">
            {languages.map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>

          <h3 className="subsection-title">Hobbies</h3>
          <ul className="skills-list">
            {hobbies.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
})

export default SobreMi
