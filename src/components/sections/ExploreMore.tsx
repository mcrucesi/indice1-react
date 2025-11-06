import { Link } from 'react-router-dom';

interface ExploreItem {
  icon: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

export const ExploreMore = () => {
  const items: ExploreItem[] = [
    {
      icon: 'fa-camera-retro',
      title: 'Nuestra Galería Fotográfica',
      description: 'Capturamos los momentos más icónicos de las carreras.',
      link: '/galeria',
      linkText: 'Ver Fotos',
    },
    {
      icon: 'fa-users',
      title: 'Conoce a Nuestro Equipo',
      description: 'Detrás de cada noticia, hay un equipo de apasionados por la hípica.',
      link: '/nosotros',
      linkText: 'Sobre Nosotros',
    },
    {
      icon: 'fa-newspaper',
      title: 'Archivo de Noticias',
      description: 'Sumérgete en la historia y los eventos pasados de la hípica.',
      link: '/archivo',
      linkText: 'Ver Archivo',
    },
  ];

  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-[#333333] mb-4">
        Explora Más en Indice 1
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-[#F8F8F8] rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <i className={`fas ${item.icon} text-4xl text-[#D4AF37] mb-3`}></i>
            <h3 className="text-lg font-semibold mb-2 text-[#333333]">
              {item.title}
            </h3>
            <p className="text-[#666666] text-sm mb-4">
              {item.description}
            </p>
            <Link
              to={item.link}
              className="inline-block bg-[#03022F] text-[#F5F5F5] hover:bg-[#D4AF37] hover:text-[#03022F] font-bold py-2 px-4 rounded-lg text-sm transition-colors duration-200"
            >
              {item.linkText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};