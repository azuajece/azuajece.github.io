import { memo, useActionState } from 'react'
import '../styles/Pages.css'

async function sendMessage(_prevState: unknown, formData: FormData) {
  const nombre = formData.get('nombre') as string
  const email = formData.get('email') as string
  const mensaje = formData.get('mensaje') as string

  if (!nombre || !email || !mensaje) {
    return { error: 'Por favor completa todos los campos' }
  }

  // Crear el mailto link
  const mailtoLink = `mailto:ce.azuaje@gmail.com?subject=Contacto de ${nombre}&body=${encodeURIComponent(mensaje)}\n\nDe: ${email}`
  window.location.href = mailtoLink

  return { success: true }
}

const Contacto = memo(function Contacto() {
  const [state, formAction, isPending] = useActionState(sendMessage, null)

  return (
    <section className="page-section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <div className="contact-content">
          <div className="contact-info-box">
            <h3>Información de Contacto</h3>
            <div className="contact-item">
              <p>
                <strong>Email:</strong>
              </p>
              <a href="mailto:ce.azuaje@gmail.com">ce.azuaje@gmail.com</a>
            </div>
            <div className="contact-item">
              <p>
                <strong>Teléfono:</strong>
              </p>
              <a href="tel:+541126009240">(+54) 911 2600 9240</a>
            </div>
            <div className="contact-item">
              <p>
                <strong>Ubicación:</strong>
              </p>
              <p>José Bonifacio, CABA (Argentina)</p>
            </div>
          </div>

          <div className="contact-form-box">
            <h3>Enviar Mensaje</h3>
            <form action={formAction} className="contact-form">
              {state?.error && <div className="error-message">{state.error}</div>}

              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  placeholder="Tu nombre"
                  disabled={isPending}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Tu email"
                  disabled={isPending}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  placeholder="Tu mensaje"
                  rows={5}
                  disabled={isPending}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isPending}>
                {isPending ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Contacto
