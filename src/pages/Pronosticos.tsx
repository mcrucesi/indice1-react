import { Link } from "react-router-dom";
import { usePronosticos } from "../hooks/useWordPress";
import { stripHtml, getFeaturedImage } from "../utils/helpers";
import { AdPlaceholder } from "../components/ads/AdPlaceholder";
import { Loading, ErrorMessage } from "../components/Loading";

export const PronosticosList = () => {
  const { data, isLoading, error } = usePronosticos(1, 20);

  if (isLoading) return <Loading />;
  if (error)
    return <ErrorMessage message="No se pudieron cargar los pronósticos" />;

  // Agrupar pronósticos por hipódromo
  const pronosticosPorHipodromo = data?.pronosticos.reduce(
    (acc, pronostico) => {
      const hipodromo = pronostico.acf?.hipodromo || "Otro";
      if (!acc[hipodromo]) {
        acc[hipodromo] = [];
      }
      acc[hipodromo].push(pronostico);
      return acc;
    },
    {} as Record<string, typeof data.pronosticos>
  );

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Encabezado de pronósticos */}
      <div className="mb-8 border-b-2 border-gray-200 pb-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#333333] leading-tight">
          Pronósticos Hípicos
        </h1>
        <div className="w-16 h-1 bg-[#D4AF37] mt-2 rounded-full"></div>
      </div>
      <p className="text-lg text-[#666666] mb-8">
        Encuentra los pronósticos de nuestros expertos para las próximas
        jornadas en los principales hipódromos del país.
      </p>

      {/* AdSense */}
      <AdPlaceholder type="banner-large" className="my-8" />

      {/* Grid de Pronósticos - 2 por fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Grid de Pronósticos - Agrupados por Hipódromo */}
        {pronosticosPorHipodromo &&
        Object.keys(pronosticosPorHipodromo).length > 0 ? (
          Object.entries(pronosticosPorHipodromo).map(
            ([hipodromo, pronosticos]) => (
              <div key={hipodromo} className="mb-12">
                {/* <h2 className="text-2xl font-bold text-[#03022F] mb-6">
                  {hipodromo}
                </h2> */}
                <div className="p-6">
                  {pronosticos.map((pronostico) => {
                    const featuredImage =
                      getFeaturedImage(pronostico) ||
                      pronostico.acf?.pronostico;
                    const title = stripHtml(pronostico.title.rendered);
                    const date =
                      pronostico.acf?.date ||
                      new Date(pronostico.date).toLocaleDateString("es-ES");

                    return (
                      <Link
                        key={pronostico.id}
                        to={`/pronostico/${pronostico.slug}`}
                        className="block bg-[#F8F8F8] rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
                      >
                        {featuredImage && (
                          <div
                            className="h-48 bg-cover bg-center"
                            style={{ backgroundImage: `url(${featuredImage})` }}
                          />
                        )}
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-[#333333] mb-2">
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            {title}
                          </h3>
                          <p className="text-[#666666] text-s mb-2">
                            <i className="far fa-calendar-alt mr-2"></i>
                            {date}
                          </p>
                          <span className="inline-block bg-[#004080] text-white text-xs font-semibold px-3 py-1 rounded-full">
                            Ver pronóstico{" "}
                            <i className="fas fa-arrow-right ml-1"></i>
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )
          )
        ) : (
          <p className="text-center text-gray-600 py-12">
            No hay pronósticos disponibles en este momento.
          </p>
        )}
        {/* {pronosticosPorHipodromo.map((hipo) => (
          <Link
            key={hipo.slug}
            to={`/pronosticos/${hipo.slug}`}
            className="block bg-[#F8F8F8] rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${hipo.imageUrl})` }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#333333] mb-2">
                Pronóstico - {hipo.name}
              </h3>
              <p className="text-[#666666] text-sm mb-4">{hipo.description}</p>
              <span className="inline-block bg-[#004080] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Ver pronóstico <i className="fas fa-arrow-right ml-1"></i>
              </span>
            </div>
          </Link>
        ))} */}
      </div>
    </main>
  );
};
