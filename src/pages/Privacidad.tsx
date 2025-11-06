import { SEO } from "../components/SEO";

export const Privacidad = () => {
  return (
    <>
      <SEO
        title="Política de Privacidad"
        description="Política de privacidad y protección de datos de Indice 1"
        url="/privacidad"
      />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 lg:p-12">
          <h1 className="text-4xl font-extrabold text-[#333333] mb-4">
            Política de Privacidad
          </h1>
          <div className="w-16 h-1 bg-[#D4AF37] rounded-full mb-8"></div>

          <p className="text-gray-600 mb-8">
            Última actualización:{" "}
            {new Date().toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-[#03022F] mt-8 mb-4">
              1. Introducción
            </h2>
            <p className="text-gray-700 mb-4">
              En Indice 1 ("nosotros", "nuestro" o "nos"), nos comprometemos a
              proteger su privacidad. Esta Política de Privacidad explica cómo
              recopilamos, usamos, divulgamos y protegemos su información cuando
              visita nuestro sitio web <strong>indice1.cl</strong>.
            </p>

            <h2 className="text-2xl font-bold text-[#03022F] mt-8 mb-4">
              2. Información que Recopilamos
            </h2>

            <h3 className="text-xl font-semibold text-[#333333] mt-6 mb-3">
              2.1 Información Proporcionada por Usted
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                Información de contacto (nombre, email) cuando nos contacta
                voluntariamente
              </li>
              <li>
                Comentarios o mensajes que envía a través de formularios de
                contacto
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#333333] mt-6 mb-3">
              2.2 Información Recopilada Automáticamente
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                <strong>Cookies:</strong> Utilizamos cookies para mejorar su
                experiencia de navegación
              </li>
              <li>
                <strong>Datos de navegación:</strong> Dirección IP, tipo de
                navegador, páginas visitadas, tiempo de visita
              </li>
              <li>
                <strong>Google Analytics:</strong> Recopilamos estadísticas de
                uso del sitio de forma anónima
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#03022F] mt-8 mb-4">
              3. Cómo Usamos su Información
            </h2>
            <p className="text-gray-700 mb-4">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Proporcionar y mantener nuestro servicio</li>
              <li>Mejorar, personalizar y expandir nuestro sitio web</li>
              <li>Entender y analizar cómo utiliza nuestro sitio web</li>
              <li>Desarrollar nuevos productos, servicios y funcionalidades</li>
              <li>
                Comunicarnos con usted para atención al cliente o
                actualizaciones
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#03022F] mt-8 mb-4">
              4. Cookies y Tecnologías de Seguimiento
            </h2>
            <p className="text-gray-700 mb-4">
              Utilizamos cookies y tecnologías de seguimiento similares para
              rastrear la actividad en nuestro sitio web y mantener cierta
              información.
            </p>

            <h3 className="text-xl font-semibold text-[#333333] mt-6 mb-3">
              Tipos de Cookies que Utilizamos:
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                <strong>Cookies Esenciales:</strong> Necesarias para el
                funcionamiento del sitio
              </li>
              <li>
                <strong>Cookies de Rendimiento:</strong> Nos ayudan a entender
                cómo los visitantes interactúan con el sitio
              </li>
              <li>
                <strong>Cookies de Publicidad:</strong> Utilizadas por Google
                AdSense para mostrar anuncios relevantes
              </li>
            </ul>

            <p className="text-gray-700 mb-4">
              Puede configurar su navegador para rechazar todas las cookies o
              para que le avise cuando se envía una cookie. Sin embargo, si no
              acepta las cookies, es posible que no pueda utilizar algunas
              partes de nuestro sitio.
            </p>

            <h2 className="text-2xl font-bold text-[#03022F] mt-8 mb-4">
              5. Google AdSense
            </h2>
            <p className="text-gray-700 mb-4">
              Utilizamos Google AdSense para mostrar anuncios en nuestro sitio
              web. Google utiliza cookies para mostrar anuncios basados en
              visitas anteriores de un usuario a nuestro sitio web u otros
              sitios web.
            </p>
            <p className="text-gray-700 mb-4">
              Los usuarios pueden inhabilitar la publicidad personalizada
              visitando la página de
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#004080] hover:text-[#D4AF37] underline"
              >
                {" "}
                Configuración de anuncios de Google
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold text-[#03022F] mt-8 mb-4">
              6. Divulgación de su Información
            </h2>
            <p className="text-gray-700 mb-4">
              No vendemos, intercambiamos ni transferimos su información
              personal identificable a terceros, excepto en los siguientes
              casos:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                Proveedores de servicios de confianza que nos ayudan a operar
                nuestro sitio web (Google Analytics, Google AdSense)
              </li>
              <li>
                Cuando sea requerido por ley o para proteger nuestros derechos
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#03022F] mt-8 mb-4">
              7. Seguridad de los Datos
            </h2>
            <p className="text-gray-700 mb-4">
              La seguridad de su información personal es importante para
              nosotros. Implementamos medidas de seguridad diseñadas para
              proteger su información. Sin embargo, ningún método de transmisión
              por Internet o método de almacenamiento electrónico es 100%
              seguro.
            </p>

            <h2 className="text-2xl font-bold text-[#03022F] mt-8 mb-4">
              8. Sus Derechos
            </h2>
            <p className="text-gray-700 mb-4">Usted tiene derecho a:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Acceder a la información personal que tenemos sobre usted</li>
              <li>Solicitar la corrección de información inexacta</li>
              <li>Solicitar la eliminación de su información personal</li>
              <li>Oponerse al procesamiento de su información personal</li>
              <li>Retirar su consentimiento en cualquier momento</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#03022F] mt-8 mb-4">
              9. Enlaces a Otros Sitios
            </h2>
            <p className="text-gray-700 mb-4">
              Nuestro sitio puede contener enlaces a otros sitios que no son
              operados por nosotros. No tenemos control sobre el contenido y las
              políticas de privacidad de esos sitios y no aceptamos ninguna
              responsabilidad por ellos.
            </p>

            <h2 className="text-2xl font-bold text-[#03022F] mt-8 mb-4">
              10. Privacidad de los Niños
            </h2>
            <p className="text-gray-700 mb-4">
              Nuestro sitio no está dirigido a personas menores de 13 años. No
              recopilamos intencionalmente información personal identificable de
              niños menores de 13 años.
            </p>

            <h2 className="text-2xl font-bold text-[#03022F] mt-8 mb-4">
              11. Cambios a esta Política de Privacidad
            </h2>
            <p className="text-gray-700 mb-4">
              Podemos actualizar nuestra Política de Privacidad de vez en
              cuando. Le notificaremos cualquier cambio publicando la nueva
              Política de Privacidad en esta página y actualizando la fecha de
              "última actualización".
            </p>

            <h2 className="text-2xl font-bold text-[#03022F] mt-8 mb-4">
              12. Contacto
            </h2>
            <p className="text-gray-700 mb-4">
              Si tiene preguntas sobre esta Política de Privacidad, puede
              contactarnos:
            </p>
            <ul className="list-none text-gray-700 mb-4">
              <li className="mb-2">
                <i className="fas fa-envelope text-[#D4AF37] mr-2"></i>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:indice1chile@gmail.com"
                  className="text-[#004080] hover:text-[#D4AF37]"
                >
                  indice1chile@gmail.com
                </a>
              </li>
              <li>
                <i className="fas fa-globe text-[#D4AF37] mr-2"></i>
                <strong>Sitio web:</strong>{" "}
                <a
                  href="https://indice1.cl"
                  className="text-[#004080] hover:text-[#D4AF37]"
                >
                  https://indice1.cl
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};
