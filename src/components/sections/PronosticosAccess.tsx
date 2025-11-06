import { Link } from 'react-router-dom';

interface Hipodromo {
  name: string;
  slug: string;
  icon: string;
}

export const PronosticosAccess = () => {
  const hipodromos: Hipodromo[] = [
    { name: 'Valparaíso Sporting', slug: 'valparaiso', icon: 'fa-horse' },
    { name: 'Club Hípico Concepción', slug: 'concepcion', icon: 'fa-horse-head' },
    { name: 'Club Hípico Santiago', slug: 'santiago', icon: 'fa-flag-checkered' },
    { name: 'Hipódromo Chile', slug: 'chile', icon: 'fa-trophy' },
  ];

  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-[#333333] mb-4">
        Pronósticos del Día
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {hipodromos.map((hipo) => (
          <Link
            key={hipo.slug}
            to={`/pronosticos/${hipo.slug}`}
            className="bg-[#03022F] text-[#F5F5F5] hover:bg-[#D4AF37] hover:text-[#03022F] font-semibold py-3 px-4 rounded-lg text-center transition-colors duration-200 shadow-md transform hover:scale-105"
          >
            {hipo.name} <i className={`fas ${hipo.icon} ml-2`}></i>
          </Link>
        ))}
      </div>
    </section>
  );
};