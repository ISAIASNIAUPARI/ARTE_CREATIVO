import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad — Arte Creativo',
  description:
    'Conoce cómo Arte Creativo recopila, usa y protege tus datos personales conforme a la legislación ecuatoriana y las políticas de Meta.',
  robots: { index: true, follow: true },
}

const CONTACT_EMAIL = 'niauparii@gmail.com'
const LAST_UPDATED = '27 de agosto de 2025'

export default function PoliticaDePrivacidad() {
  return (
    <>
      <style jsx>{`
        .pp-hero {
          background: linear-gradient(135deg, #0f0f0f 0%, #1c1c1c 100%);
          padding: clamp(80px, 12vw, 140px) clamp(20px, 6vw, 80px) clamp(60px, 8vw, 100px);
          text-align: center;
          border-bottom: 1px solid rgba(243, 193, 59, 0.18);
        }
        .pp-eyebrow {
          display: inline-block;
          font-family: 'Exo', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #f3c13b;
          background: rgba(243, 193, 59, 0.1);
          border: 1px solid rgba(243, 193, 59, 0.25);
          border-radius: 20px;
          padding: 6px 16px;
          margin-bottom: 24px;
        }
        .pp-title {
          font-family: 'Exo', sans-serif;
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 16px;
          line-height: 1.15;
        }
        .pp-subtitle {
          font-family: 'Ubuntu', sans-serif;
          font-size: clamp(14px, 2vw, 16px);
          color: rgba(255, 255, 255, 0.55);
          margin: 0;
        }
        .pp-body {
          background: #0f0f0f;
          padding: clamp(48px, 8vw, 100px) clamp(20px, 6vw, 80px);
        }
        .pp-container {
          max-width: 820px;
          margin: 0 auto;
        }
        .pp-section {
          margin-bottom: clamp(36px, 5vw, 56px);
          padding-bottom: clamp(36px, 5vw, 56px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .pp-section:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }
        .pp-section-title {
          font-family: 'Exo', sans-serif;
          font-size: clamp(18px, 2.5vw, 22px);
          font-weight: 700;
          color: #f3c13b;
          margin: 0 0 16px;
        }
        .pp-section-number {
          display: inline-block;
          width: 28px;
          height: 28px;
          line-height: 28px;
          text-align: center;
          background: rgba(243, 193, 59, 0.12);
          border-radius: 50%;
          font-size: 12px;
          font-weight: 700;
          color: #f3c13b;
          margin-right: 10px;
          vertical-align: middle;
        }
        .pp-text {
          font-family: 'Ubuntu', sans-serif;
          font-size: clamp(14px, 1.8vw, 16px);
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.75);
          margin: 0 0 14px;
        }
        .pp-text:last-child {
          margin-bottom: 0;
        }
        .pp-list {
          font-family: 'Ubuntu', sans-serif;
          font-size: clamp(14px, 1.8vw, 16px);
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.75);
          padding-left: 20px;
          margin: 0 0 14px;
        }
        .pp-list li {
          margin-bottom: 8px;
        }
        .pp-highlight-box {
          background: rgba(243, 193, 59, 0.06);
          border: 1px solid rgba(243, 193, 59, 0.2);
          border-left: 3px solid #f3c13b;
          border-radius: 6px;
          padding: 18px 22px;
          margin: 20px 0;
        }
        .pp-highlight-box p {
          font-family: 'Ubuntu', sans-serif;
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
        }
        .pp-email-link {
          color: #f3c13b;
          text-decoration: none;
          font-weight: 600;
          border-bottom: 1px solid rgba(243, 193, 59, 0.35);
          transition: border-color 0.2s;
        }
        .pp-email-link:hover {
          border-color: #f3c13b;
        }
        .pp-updated {
          font-family: 'Ubuntu', sans-serif;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.35);
          text-align: center;
          margin-top: clamp(40px, 5vw, 64px);
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
      `}</style>

      {/* Hero */}
      <section className="pp-hero">
        <span className="pp-eyebrow">Legal</span>
        <h1 className="pp-title">Política de Privacidad</h1>
        <p className="pp-subtitle">
          Arte Creativo — Agencia de Diseño Web &amp; Marketing Digital · Quito, Ecuador
        </p>
      </section>

      {/* Body */}
      <main className="pp-body">
        <div className="pp-container">

          {/* 1. Quiénes somos */}
          <section className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-number">1</span>
              Quiénes somos y alcance de esta política
            </h2>
            <p className="pp-text">
              <strong style={{ color: '#fff' }}>Arte Creativo</strong> es una agencia de diseño web y
              marketing digital con sede en Quito, Ecuador. Brindamos servicios de desarrollo de
              sitios web, branding, estrategia digital y automatización de comunicaciones para
              empresas y emprendedores.
            </p>
            <p className="pp-text">
              Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y
              protegemos los datos personales de quienes interactúan con nuestro sitio web
              (<strong style={{ color: 'rgba(255,255,255,.9)' }}>arte-creativo.vercel.app</strong>),
              nuestras plataformas de mensajería y nuestros sistemas de automatización,
              incluyendo el uso de la API de WhatsApp Business de Meta.
            </p>
            <p className="pp-text">
              Al contactarnos o utilizar cualquiera de nuestros servicios, usted acepta las
              prácticas descritas en este documento.
            </p>
          </section>

          {/* 2. Datos que recopilamos */}
          <section className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-number">2</span>
              Datos personales que recopilamos
            </h2>
            <p className="pp-text">Podemos recopilar las siguientes categorías de datos:</p>
            <ul className="pp-list">
              <li>
                <strong style={{ color: 'rgba(255,255,255,.9)' }}>Datos de identificación:</strong>{' '}
                nombre completo, razón social o nombre de la empresa.
              </li>
              <li>
                <strong style={{ color: 'rgba(255,255,255,.9)' }}>Datos de contacto:</strong>{' '}
                dirección de correo electrónico, número de teléfono o WhatsApp.
              </li>
              <li>
                <strong style={{ color: 'rgba(255,255,255,.9)' }}>Mensajes e interacciones:</strong>{' '}
                contenido de mensajes enviados a través de WhatsApp Business, formularios de
                contacto o correo electrónico.
              </li>
              <li>
                <strong style={{ color: 'rgba(255,255,255,.9)' }}>Datos del proyecto:</strong>{' '}
                información que usted comparte para la elaboración de propuestas, presupuestos y
                ejecución de servicios contratados.
              </li>
              <li>
                <strong style={{ color: 'rgba(255,255,255,.9)' }}>Datos de navegación:</strong>{' '}
                dirección IP, tipo de navegador, páginas visitadas y duración de la sesión,
                recopilados de forma anónima con fines estadísticos.
              </li>
            </ul>
            <p className="pp-text">
              No recopilamos datos de categorías especiales (salud, ideología, datos biométricos,
              etc.) ni datos de menores de 14 años. Si usted es menor de esa edad, le pedimos que
              no nos facilite datos personales sin el consentimiento de su tutor legal.
            </p>
          </section>

          {/* 3. Finalidad y base legal */}
          <section className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-number">3</span>
              Finalidad del tratamiento y base legal
            </h2>
            <p className="pp-text">
              Utilizamos sus datos personales exclusivamente para las siguientes finalidades:
            </p>
            <ul className="pp-list">
              <li>
                <strong style={{ color: 'rgba(255,255,255,.9)' }}>Atención al cliente:</strong>{' '}
                responder consultas, cotizaciones y solicitudes de soporte recibidas por cualquier
                canal de comunicación.
              </li>
              <li>
                <strong style={{ color: 'rgba(255,255,255,.9)' }}>Gestión de proyectos:</strong>{' '}
                planificar, ejecutar y hacer seguimiento de los servicios contratados.
              </li>
              <li>
                <strong style={{ color: 'rgba(255,255,255,.9)' }}>Comunicaciones transaccionales:</strong>{' '}
                envío de confirmaciones, actualizaciones de estado, facturas y notificaciones
                relacionadas con servicios activos.
              </li>
              <li>
                <strong style={{ color: 'rgba(255,255,255,.9)' }}>Comunicaciones de marketing (con consentimiento):</strong>{' '}
                envío de información sobre nuevos servicios, promociones o contenido educativo
                únicamente si usted ha dado su consentimiento expreso.
              </li>
              <li>
                <strong style={{ color: 'rgba(255,255,255,.9)' }}>Mejora de servicios:</strong>{' '}
                análisis estadísticos internos para optimizar nuestra oferta, sin identificar a
                personas individuales.
              </li>
            </ul>
            <p className="pp-text">
              La base legal del tratamiento es: (a) la ejecución de un contrato o gestión
              precontractual a solicitud del interesado, (b) el consentimiento explícito del
              titular para comunicaciones de marketing, y (c) el interés legítimo de Arte Creativo
              en la correcta prestación de sus servicios.
            </p>
          </section>

          {/* 4. WhatsApp y Meta */}
          <section className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-number">4</span>
              Uso de WhatsApp Business API (Meta)
            </h2>
            <p className="pp-text">
              Arte Creativo utiliza la <strong style={{ color: 'rgba(255,255,255,.9)' }}>API de
              WhatsApp Business de Meta</strong> para gestionar comunicaciones con clientes a través
              de la plataforma de mensajería WhatsApp. Esta integración implica el intercambio de
              datos con los servidores de Meta Platforms, Inc., de conformidad con sus propias
              políticas de privacidad.
            </p>
            <p className="pp-text">
              Al enviarnos un mensaje por WhatsApp, usted consiente que dicha comunicación sea
              procesada a través de la infraestructura de Meta y que su número de teléfono e
              identidad de WhatsApp sean utilizados para gestionar la conversación.
            </p>
            <p className="pp-text">
              No enviamos mensajes de marketing proactivo a través de WhatsApp sin opt-in previo
              y explícito. Toda comunicación iniciada por Arte Creativo cumple con la{' '}
              <strong style={{ color: 'rgba(255,255,255,.9)' }}>Política de Mensajes de
              WhatsApp Business</strong>.
            </p>

            <div className="pp-highlight-box">
              <p>
                <strong style={{ color: '#f3c13b' }}>Solicitud de eliminación de datos (requisito Meta):</strong>{' '}
                Si desea solicitar la eliminación de los datos recopilados a través de esta
                aplicación y sus integraciones con Meta, envíe un correo electrónico a{' '}
                <a href={`mailto:${CONTACT_EMAIL}?subject=Eliminación de datos personales`} className="pp-email-link">
                  {CONTACT_EMAIL}
                </a>{' '}
                con el asunto <em>"Eliminación de datos personales"</em>. Procesaremos su
                solicitud en un plazo máximo de 15 días hábiles.
              </p>
            </div>
          </section>

          {/* 5. Conservación */}
          <section className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-number">5</span>
              Conservación de los datos
            </h2>
            <p className="pp-text">
              Conservamos sus datos personales durante el tiempo estrictamente necesario para
              cumplir las finalidades descritas en esta política o durante el plazo exigido por
              la legislación aplicable en Ecuador.
            </p>
            <p className="pp-text">
              Como referencia general: los datos de clientes activos se mantienen durante la
              vigencia del contrato más un período de 5 años por obligaciones fiscales y legales;
              los datos de contactos que no se convierten en clientes se eliminan a los 24 meses
              de la última interacción.
            </p>
          </section>

          {/* 6. Compartir datos */}
          <section className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-number">6</span>
              Compartición de datos con terceros
            </h2>
            <p className="pp-text">
              Arte Creativo no vende ni alquila sus datos personales a terceros. Podemos compartir
              información exclusivamente en los siguientes casos:
            </p>
            <ul className="pp-list">
              <li>
                <strong style={{ color: 'rgba(255,255,255,.9)' }}>Proveedores de servicios tecnológicos:</strong>{' '}
                plataformas como Meta (WhatsApp Business API), Vercel (hosting), Sanity (CMS) y
                herramientas de automatización (n8n), que actúan como encargados del tratamiento
                bajo acuerdos de confidencialidad.
              </li>
              <li>
                <strong style={{ color: 'rgba(255,255,255,.9)' }}>Obligaciones legales:</strong>{' '}
                cuando sea requerido por autoridad competente ecuatoriana conforme a la Ley
                Orgánica de Protección de Datos Personales (LOPDP).
              </li>
              <li>
                <strong style={{ color: 'rgba(255,255,255,.9)' }}>Consentimiento del titular:</strong>{' '}
                cuando usted haya autorizado expresamente dicha comunicación.
              </li>
            </ul>
          </section>

          {/* 7. Seguridad */}
          <section className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-number">7</span>
              Seguridad de la información
            </h2>
            <p className="pp-text">
              Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos
              personales contra acceso no autorizado, pérdida, alteración o divulgación. Estas
              medidas incluyen cifrado en tránsito (HTTPS/TLS), control de acceso basado en roles,
              y revisiones periódicas de seguridad de nuestros sistemas.
            </p>
            <p className="pp-text">
              No obstante, ningún sistema de transmisión por internet es 100% seguro. En caso de
              un incidente de seguridad que afecte sus datos, le notificaremos conforme a lo
              dispuesto en la LOPDP.
            </p>
          </section>

          {/* 8. Derechos */}
          <section className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-number">8</span>
              Sus derechos como titular de los datos
            </h2>
            <p className="pp-text">
              De conformidad con la Ley Orgánica de Protección de Datos Personales del Ecuador,
              usted tiene derecho a:
            </p>
            <ul className="pp-list">
              <li><strong style={{ color: 'rgba(255,255,255,.9)' }}>Acceso:</strong> conocer qué datos tenemos sobre usted.</li>
              <li><strong style={{ color: 'rgba(255,255,255,.9)' }}>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
              <li><strong style={{ color: 'rgba(255,255,255,.9)' }}>Eliminación:</strong> solicitar la supresión de sus datos cuando no exista obligación legal de conservarlos.</li>
              <li><strong style={{ color: 'rgba(255,255,255,.9)' }}>Oposición:</strong> oponerse al tratamiento de sus datos para fines de marketing.</li>
              <li><strong style={{ color: 'rgba(255,255,255,.9)' }}>Portabilidad:</strong> recibir sus datos en formato estructurado y de uso común.</li>
              <li><strong style={{ color: 'rgba(255,255,255,.9)' }}>Revocación del consentimiento:</strong> retirar su consentimiento en cualquier momento sin que ello afecte el tratamiento previo.</li>
            </ul>
            <p className="pp-text">
              Para ejercer cualquiera de estos derechos, contacte a:{' '}
              <a href={`mailto:${CONTACT_EMAIL}?subject=Derechos LOPDP - Datos Personales`} className="pp-email-link">
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>

          {/* 9. Cookies */}
          <section className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-number">9</span>
              Cookies y tecnologías de seguimiento
            </h2>
            <p className="pp-text">
              Nuestro sitio web puede utilizar cookies técnicas esenciales para su correcto
              funcionamiento. No utilizamos cookies de seguimiento publicitario de terceros sin
              su consentimiento previo. Puede configurar su navegador para rechazar cookies,
              aunque esto podría afectar algunas funcionalidades del sitio.
            </p>
          </section>

          {/* 10. Cambios */}
          <section className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-number">10</span>
              Cambios en esta política
            </h2>
            <p className="pp-text">
              Arte Creativo se reserva el derecho de actualizar esta Política de Privacidad para
              reflejar cambios en nuestra práctica, nuevos servicios o modificaciones legales.
              Publicaremos la versión actualizada en esta misma página con la fecha de la última
              modificación. Le recomendamos revisarla periódicamente.
            </p>
          </section>

          {/* 11. Contacto */}
          <section className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-number">11</span>
              Contacto y responsable del tratamiento
            </h2>
            <p className="pp-text">
              Si tiene preguntas, comentarios o desea ejercer sus derechos sobre sus datos
              personales, puede contactarnos a través de:
            </p>
            <div className="pp-highlight-box">
              <p>
                <strong style={{ color: '#f3c13b' }}>Arte Creativo</strong><br />
                Quito, Ecuador<br />
                Correo:{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="pp-email-link">
                  {CONTACT_EMAIL}
                </a><br />
                WhatsApp: disponible a través de nuestro sitio web
              </p>
            </div>
          </section>

          <p className="pp-updated">Última actualización: {LAST_UPDATED}</p>
        </div>
      </main>
    </>
  )
}
