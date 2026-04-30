import { memo } from 'react'
import './Navigation.css'

interface NavigationProps {
  activeSection: string
  onSectionChange: (section: 'sobre-mi' | 'curriculum' | 'contacto') => void
}

const Navigation = memo(function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Carlos E. Azuaje Arias</span>
        </div>
        <ul className="nav-menu">
          {(['sobre-mi', 'curriculum', 'contacto'] as const).map((section) => (
            <li key={section} className="nav-item">
              <button
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => onSectionChange(section)}
              >
                {section === 'sobre-mi' ? 'Sobre Mi' : 
                 section === 'curriculum' ? 'Curriculum' : 
                 'Contacto'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
})

export default Navigation
