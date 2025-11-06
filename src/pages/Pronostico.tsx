import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { usePronosticoBySlug } from "../hooks/useWordPress";
import { stripHtml } from "../utils/helpers";
import { AdPlaceholder } from "../components/ads/AdPlaceholder";
import { Loading, ErrorMessage } from "../components/Loading";

export const PronosticoDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const {
    data: pronostico,
    isLoading,
    error,
  } = usePronosticoBySlug(slug || "");

  if (isLoading) return <Loading />;
  if (error || !pronostico)
    return <ErrorMessage message="Pronóstico no encontrado" />;

  const title = stripHtml(pronostico.title.rendered);
  const hipodromo = pronostico.acf?.hipodromo || "Hipódromo";
  console.log(pronostico);

  const fecha =
    pronostico.acf?.date &&
    new Date(pronostico.acf?.date).toLocaleDateString("cl-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  const imagenPronostico = pronostico.acf?.pronostico;
  const pdfPrograma = pronostico.acf?.programa;

  return (
    <>
      <Helmet>
        <title>{title} | Pronósticos Indice 1</title>
        <meta
          name="description"
          content={`Pronóstico para ${hipodromo} - ${fecha}`}
        />
      </Helmet>

      <main className="container mx-auto px-4 py-8">
        {/* Encabezado de pronóstico */}
        <div className="mb-8 border-b-2 border-gray-200 pb-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#333333] leading-tight">
            {title}
          </h1>
          <div className="w-16 h-1 bg-[#D4AF37] mt-2 rounded-full"></div>
        </div>
        <p className="text-lg text-[#666666] mb-8">Jornada del {fecha}</p>

        {/* CTA: Descargar Programa */}
        {pdfPrograma && (
          <section className="bg-[#D4AF37] text-[#03022F] rounded-lg shadow-lg p-6 text-center mb-8 transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold mb-3">
              Descarga el Programa Oficial de Carreras
            </h2>
            <p className="text-lg mb-4">
              Obtén toda la información detallada de la jornada en {hipodromo}.
            </p>
            <a
              href={pdfPrograma}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#03022F] text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-[#F5F5F5] hover:text-[#03022F] transition-colors duration-200"
            >
              <i className="fas fa-download mr-2"></i> Descargar Programa
            </a>
          </section>
        )}

        {/* AdSense */}
        <AdPlaceholder type="banner-horizontal" className="mb-8" />

        {/* Contenido del Post */}
        {pronostico.content?.rendered && (
          <section className="bg-white rounded-xl shadow-md p-6 lg:p-12 mb-8">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: pronostico.content.rendered }}
            />
          </section>
        )}

        {/* Imagen del Pronóstico */}
        {imagenPronostico && (
          <section className="bg-white rounded-xl shadow-md p-6 mb-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pronóstico Oficial de la Jornada
            </h2>
            <p className="text-gray-700 mb-6 text-center">
              Aquí encontrarás nuestra imagen con el análisis y selecciones para
              todas las carreras.
            </p>
            <a
              href={imagenPronostico}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={imagenPronostico}
                alt={`Pronóstico completo de ${hipodromo}`}
                className="max-w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/800x600/CCCCCC/666666?text=Error+al+cargar+pronóstico";
                }}
              />
            </a>
            <p className="text-sm text-gray-600 mt-4">
              Haz clic en la imagen para verla en tamaño completo.
            </p>
          </section>
        )}

        {/* AdSense */}
        <AdPlaceholder type="banner-large" className="my-8" />

        {/* Disclaimer */}
        <section
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md mb-8"
          role="alert"
        >
          <p className="font-bold mb-2">
            Nota Importante sobre los Pronósticos:
          </p>
          <p className="text-sm">
            Los pronósticos de Indice 1 son una guía basada en el análisis de
            expertos y la información disponible. La hípica es un deporte
            impredecible y los resultados pueden variar. Juega con
            responsabilidad.
          </p>
        </section>
      </main>
    </>
  );
};
