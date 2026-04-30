import { memo } from 'react'
import './Header.css'

const Header = memo(function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-image">
          <img 
            src={`${import.meta.env.BASE_URL}profile_pic.png`} 
            alt="Carlos E. Azuaje Arias"
            loading="lazy"
          />
        </div>
        <div className="header-content">
          <h1>Carlos E. Azuaje Arias.</h1>
          <p className="subtitle">Ingeniero de Sistemas y Desarrollador Full Stack</p>
          <div className="contact-info">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:ce.azuaje@gmail.com">ce.azuaje@gmail.com</a>
            </p>
            <p>
              <strong>Teléfono:</strong>{' '}
              <a href="tel:+541126009240">(+54) 911 2600 9240</a>
            </p>
            <p>
              <strong>Ubicación:</strong> José Bonifacio, CABA (Argentina)
            </p>
          </div>
        </div>
      </div>
    </header>
  )
})

export default Header
