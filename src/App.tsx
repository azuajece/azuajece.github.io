import { useState, useCallback } from 'react'
import Navigation from './components/Navigation'
import Header from './components/Header'
import SobreMi from './pages/SobreMi'
import Curriculum from './pages/Curriculum'
import Contacto from './pages/Contacto'
import './App.css'

type Section = 'sobre-mi' | 'curriculum' | 'contacto'

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('sobre-mi')

  const handleSectionChange = useCallback((section: Section) => {
    setActiveSection(section)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="app">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      <Header />
      <main className="main-content">
        {activeSection === 'sobre-mi' && <SobreMi />}
        {activeSection === 'curriculum' && <Curriculum />}
        {activeSection === 'contacto' && <Contacto />}
      </main>
      <footer className="footer">
        <p>&copy; 2026 Carlos E. Azuaje Arias. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
