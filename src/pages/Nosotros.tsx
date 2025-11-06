import { AdPlaceholder } from "../components/ads/AdPlaceholder";
import { TeamMember } from "../components/team/TeamMember";

interface Member {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export const Nosotros = () => {
  const teamMembers: Member[] = [
    {
      id: 1,
      name: "Ricardo Ortega",
      role: "Fundador y Editor En Jefe",
      bio: "Apasionado por la hípica desde joven, periodista con un ojo crítico, Ricardo es el encargado de la edición de nuestros reportajes y noticias, garantizando la precisión y el estilo que caracterizan a Indice 1.",
      imageUrl:
        "https://placehold.co/150x150/33FF57/FFFFFF?text=Ricardo+Ortega",
    },
    {
      id: 2,
      name: "Daniela Muñoz Contreras",
      role: "Directora General",
      bio: "Periodista y Licenciada en Comunicación Social de la Universidad de Playa Ancha, specializada en seminarios de radio y deporte. Encargada de la cobertura en pista y el análisis de datos para los pronósticos.",
      imageUrl: "https://placehold.co/150x150/FF5733/FFFFFF?text=Daniela+Muñoz",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Encabezado de Nosotros */}
      <div className="mb-8 border-b-2 border-gray-200 pb-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#333333] leading-tight">
          Sobre Nosotros
        </h1>
        <div className="w-16 h-1 bg-[#D4AF37] mt-2 rounded-full"></div>
      </div>
      <p className="text-lg text-[#666666] mb-8">
        Somos un equipo de apasionados por la hípica chilena. Nuestra misión es
        informar, analizar y celebrar este fascinante deporte.
      </p>

      {/* AdSense */}
      <AdPlaceholder type="banner-horizontal" className="mb-8" />

      {/* Nuestra Misión y Visión*/}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-4 bg-[#F8F8F8] rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              Nuestra Misión
            </h2>
            <i className={`fas fa-rocket text-4xl text-[#D4AF37] mb-3`}></i>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Proporcionar información oportuna y de calidad sobre el mundo de
              las carreras de caballos en Chile. Buscamos ser la fuente de
              referencia para aficionados y profesionales, ofreciendo
              pronósticos, noticias y análisis en profundidad.
            </p>
          </div>
          <div className="p-4 bg-[#F8F8F8] rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              Nuestra Visión
            </h2>
            <i className={`fas fa-eye text-4xl text-[#D4AF37] mb-3`}></i>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Convertirnos en la plataforma líder de la hípica nacional,
              fomentando una comunidad activa y comprometida, y contribuyendo al
              crecimiento y la difusión de este hermoso deporte.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Conoce a Nuestro Equipo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* AdSense */}
      <AdPlaceholder type="banner-large" className="my-8" />

      {/* Contacto */}
      <section className="bg-white rounded-lg shadow-md p-8 mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contáctanos</h2>
        <p className="text-gray-700 text-lg mb-4">
          ¿Tienes alguna pregunta, sugerencia o quieres colaborar con nosotros?
          ¡Nos encantaría escucharte!
        </p>
        <div className="flex flex-col items-center space-y-4">
          <a
            href="mailto:indice1chile@gmail.com"
            className="inline-flex items-center bg-[#03022F] hover:bg-[#D4AF37] hover:text-[#03022F] text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-lg"
          >
            <i className="fas fa-envelope mr-3"></i> Envíanos un Email
          </a>
          <p className="text-gray-600 text-sm">
            o escríbenos directamente a:{" "}
            <span className="font-semibold text-[#004080]">
              indice1chile@gmail.com
            </span>
          </p>
        </div>
      </section>
    </main>
  );
};
