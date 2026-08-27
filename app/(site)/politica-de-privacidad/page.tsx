import type { Metadata } from 'next'
import styles from './page.module.css'

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
      {/* Hero */}
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Legal</span>
        <h1 className={styles.title}>Política de Privacidad</h1>
        <p className={styles.subtitle}>
          Arte Creativo — Agencia de Diseño Web &amp; Marketing Digital · Quito, Ecuador
        </p>
      </section>

      {/* Body */}
      <main className={styles.body}>
        <div className={styles.container}>

          {/* 1 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNumber}>1</span>
              Quiénes somos y alcance de esta política
            </h2>
            <p className={styles.text}>
              <strong className={styles.strong}>Arte Creativo</strong> es una agencia de diseño web y
              marketing digital con sede en Quito, Ecuador. Brindamos servicios de desarrollo de
              sitios web, branding, estrategia digital y automatización de comunicaciones para
              empresas y emprendedores.
            </p>
            <p className={styles.text}>
              Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y
              protegemos los datos personales de quienes interactúan con nuestro sitio web
              (<strong className={styles.strong}>arte-creativo.vercel.app</strong>),
              nuestras plataformas de mensajería y nuestros sistemas de automatización,
              incluyendo el uso de la API de WhatsApp Business de Meta.
            </p>
            <p className={styles.text}>
              Al contactarnos o utilizar cualquiera de nuestros servicios, usted acepta las
              prácticas descritas en este documento.
            </p>
          </section>

          {/* 2 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNumber}>2</span>
              Datos personales que recopilamos
            </h2>
            <p className={styles.text}>Podemos recopilar las siguientes categorías de datos:</p>
            <ul className={styles.list}>
              <li><strong className={styles.strong}>Datos de identificación:</strong> nombre completo, razón social o nombre de la empresa.</li>
              <li><strong className={styles.strong}>Datos de contacto:</strong> dirección de correo electrónico, número de teléfono o WhatsApp.</li>
              <li><strong className={styles.strong}>Mensajes e interacciones:</strong> contenido de mensajes enviados a través de WhatsApp Business, formularios de contacto o correo electrónico.</li>
              <li><strong className={styles.strong}>Datos del proyecto:</strong> información que usted comparte para la elaboración de propuestas, presupuestos y ejecución de servicios contratados.</li>
              <li><strong className={styles.strong}>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas y duración de la sesión, recopilados de forma anónima con fines estadísticos.</li>
            </ul>
            <p className={styles.text}>
              No recopilamos datos de categorías especiales (salud, ideología, datos biométricos,
              etc.) ni datos de menores de 14 años.
            </p>
          </section>

          {/* 3 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNumber}>3</span>
              Finalidad del tratamiento y base legal
            </h2>
            <p className={styles.text}>Utilizamos sus datos personales exclusivamente para las siguientes finalidades:</p>
            <ul className={styles.list}>
              <li><strong className={styles.strong}>Atención al cliente:</strong> responder consultas, cotizaciones y solicitudes de soporte recibidas por cualquier canal.</li>
              <li><strong className={styles.strong}>Gestión de proyectos:</strong> planificar, ejecutar y hacer seguimiento de los servicios contratados.</li>
              <li><strong className={styles.strong}>Comunicaciones transaccionales:</strong> envío de confirmaciones, actualizaciones de estado, facturas y notificaciones de servicios activos.</li>
              <li><strong className={styles.strong}>Comunicaciones de marketing (con consentimiento):</strong> envío de información sobre nuevos servicios o promociones únicamente si usted ha dado su consentimiento expreso.</li>
              <li><strong className={styles.strong}>Mejora de servicios:</strong> análisis estadísticos internos para optimizar nuestra oferta, sin identificar personas individuales.</li>
            </ul>
            <p className={styles.text}>
              La base legal del tratamiento es: (a) la ejecución de un contrato o gestión
              precontractual a solicitud del interesado, (b) el consentimiento explícito para
              comunicaciones de marketing, y (c) el interés legítimo de Arte Creativo en la
              correcta prestación de sus servicios.
            </p>
          </section>

          {/* 4 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNumber}>4</span>
              Uso de WhatsApp Business API (Meta)
            </h2>
            <p className={styles.text}>
              Arte Creativo utiliza la <strong className={styles.strong}>API de WhatsApp Business
              de Meta</strong> para gestionar comunicaciones con clientes a través de WhatsApp.
              Esta integración implica el intercambio de datos con los servidores de Meta
              Platforms, Inc., conforme a sus propias políticas de privacidad.
            </p>
            <p className={styles.text}>
              Al enviarnos un mensaje por WhatsApp, usted consiente que dicha comunicación sea
              procesada a través de la infraestructura de Meta y que su número de teléfono e
              identidad de WhatsApp sean utilizados para gestionar la conversación.
            </p>
            <p className={styles.text}>
              No enviamos mensajes de marketing proactivo a través de WhatsApp sin opt-in previo
              y explícito. Toda comunicación cumple con la Política de Mensajes de WhatsApp Business.
            </p>
            <div className={styles.highlightBox}>
              <p>
                <strong className={styles.strongGold}>Solicitud de eliminación de datos (requisito Meta):</strong>{' '}
                Si desea solicitar la eliminación de los datos recopilados a través de esta
                aplicación y sus integraciones con Meta, envíe un correo electrónico a{' '}
                <a href={`mailto:${CONTACT_EMAIL}?subject=Eliminación de datos personales`} className={styles.emailLink}>
                  {CONTACT_EMAIL}
                </a>{' '}
                con el asunto <em>&quot;Eliminación de datos personales&quot;</em>. Procesaremos
                su solicitud en un plazo máximo de 15 días hábiles.
              </p>
            </div>
          </section>

          {/* 5 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNumber}>5</span>
              Conservación de los datos
            </h2>
            <p className={styles.text}>
              Conservamos sus datos personales durante el tiempo necesario para cumplir las
              finalidades descritas o durante el plazo exigido por la legislación ecuatoriana.
            </p>
            <p className={styles.text}>
              Como referencia: los datos de clientes activos se mantienen durante la vigencia del
              contrato más 5 años por obligaciones fiscales; los datos de contactos no convertidos
              se eliminan a los 24 meses de la última interacción.
            </p>
          </section>

          {/* 6 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNumber}>6</span>
              Compartición de datos con terceros
            </h2>
            <p className={styles.text}>Arte Creativo no vende ni alquila sus datos a terceros. Podemos compartir información exclusivamente en los siguientes casos:</p>
            <ul className={styles.list}>
              <li><strong className={styles.strong}>Proveedores tecnológicos:</strong> Meta (WhatsApp Business API), Vercel (hosting), Sanity (CMS) y herramientas de automatización (n8n), que actúan como encargados del tratamiento bajo acuerdos de confidencialidad.</li>
              <li><strong className={styles.strong}>Obligaciones legales:</strong> cuando sea requerido por autoridad competente ecuatoriana conforme a la Ley Orgánica de Protección de Datos Personales (LOPDP).</li>
              <li><strong className={styles.strong}>Consentimiento del titular:</strong> cuando usted haya autorizado expresamente dicha comunicación.</li>
            </ul>
          </section>

          {/* 7 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNumber}>7</span>
              Seguridad de la información
            </h2>
            <p className={styles.text}>
              Implementamos medidas técnicas y organizativas para proteger sus datos contra acceso
              no autorizado, pérdida o alteración. Estas medidas incluyen cifrado en tránsito
              (HTTPS/TLS), control de acceso basado en roles y revisiones periódicas de seguridad.
            </p>
            <p className={styles.text}>
              En caso de un incidente de seguridad que afecte sus datos, le notificaremos conforme
              a lo dispuesto en la LOPDP.
            </p>
          </section>

          {/* 8 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNumber}>8</span>
              Sus derechos como titular de los datos
            </h2>
            <p className={styles.text}>De conformidad con la LOPDP del Ecuador, usted tiene derecho a:</p>
            <ul className={styles.list}>
              <li><strong className={styles.strong}>Acceso:</strong> conocer qué datos tenemos sobre usted.</li>
              <li><strong className={styles.strong}>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
              <li><strong className={styles.strong}>Eliminación:</strong> solicitar la supresión de sus datos cuando no exista obligación legal de conservarlos.</li>
              <li><strong className={styles.strong}>Oposición:</strong> oponerse al tratamiento para fines de marketing.</li>
              <li><strong className={styles.strong}>Portabilidad:</strong> recibir sus datos en formato estructurado y de uso común.</li>
              <li><strong className={styles.strong}>Revocación del consentimiento:</strong> retirar su consentimiento en cualquier momento sin afectar el tratamiento previo.</li>
            </ul>
            <p className={styles.text}>
              Para ejercer estos derechos contacte a:{' '}
              <a href={`mailto:${CONTACT_EMAIL}?subject=Derechos LOPDP - Datos Personales`} className={styles.emailLink}>
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>

          {/* 9 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNumber}>9</span>
              Cookies y tecnologías de seguimiento
            </h2>
            <p className={styles.text}>
              Nuestro sitio puede utilizar cookies técnicas esenciales para su correcto
              funcionamiento. No utilizamos cookies de seguimiento publicitario de terceros sin
              su consentimiento previo. Puede configurar su navegador para rechazarlas, aunque
              esto podría afectar algunas funcionalidades.
            </p>
          </section>

          {/* 10 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNumber}>10</span>
              Cambios en esta política
            </h2>
            <p className={styles.text}>
              Arte Creativo se reserva el derecho de actualizar esta política para reflejar cambios
              en nuestra práctica o modificaciones legales. Publicaremos la versión actualizada
              en esta página con la fecha de la última modificación.
            </p>
          </section>

          {/* 11 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionNumber}>11</span>
              Contacto y responsable del tratamiento
            </h2>
            <p className={styles.text}>Para cualquier consulta sobre esta política o para ejercer sus derechos:</p>
            <div className={styles.highlightBox}>
              <p>
                <strong className={styles.strongGold}>Arte Creativo</strong><br />
                Quito, Ecuador<br />
                Correo:{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className={styles.emailLink}>
                  {CONTACT_EMAIL}
                </a><br />
                WhatsApp: disponible a través de nuestro sitio web
              </p>
            </div>
          </section>

          <p className={styles.updated}>Última actualización: {LAST_UPDATED}</p>
        </div>
      </main>
    </>
  )
}
