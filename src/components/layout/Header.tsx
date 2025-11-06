import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  console.log(location);
  const page = location.pathname.split("/")[1];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const hipodromos = [
    { name: "Valparaíso Sporting Club", slug: "pronostico-spoting" },
    { name: "Hípico de Concepción", slug: "club-hipico-ccp" },
    { name: "Club Hípico de Santiago", slug: "club-hipico-de-santiago" },
    { name: "Hipódromo Chile", slug: "hipodromo-chile" },
  ];

  return (
    <>
      <header className="bg-[#03022F] shadow-md py-4 relative z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 relative z-50">
            <div className="relative">
              {/* Círculo blanco de fondo */}
              <div className="absolute -top-3 left-0 w-20 h-20rounded-full shadow-xl flex items-center justify-center">
                <img src="/logo.png" alt="Indice 1 Logo" className="w-auto" />
              </div>
              {/* Espacio para que el logo no colapse */}
              <div className="w-20 h-10"></div>
            </div>
          </Link>

          {/* Menú Desktop */}
          <nav className="hidden md:flex flex-grow justify-end space-x-6 text-xl font-bold">
            <ul className="flex space-x-4 md:space-x-6">
              <li>
                <Link
                  to="/"
                  className={` font-bold transition-colors duration-200 rounded-md p-2 ${
                    page === ""
                      ? "text-[#D4AF37]"
                      : "text-[#F5F5F5] hover:text-[#D4AF37] "
                  }`}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/noticias"
                  className={`font-bold transition-colors duration-200 rounded-md p-2 ${
                    page === "noticias"
                      ? "text-[#D4AF37]"
                      : "text-[#F5F5F5] hover:text-[#D4AF37]"
                  }`}
                >
                  Noticias
                </Link>
              </li>
              <li className="relative group">
                <Link
                  to="/pronosticos"
                  className={`font-bold transition-colors duration-200 rounded-md flex items-center ${
                    page === "pronosticos"
                      ? "text-[#D4AF37]"
                      : "text-[#F5F5F5] hover:text-[#D4AF37]"
                  }`}
                >
                  Pronósticos
                  <i className="fas fa-chevron-down text-sm ml-1"></i>
                </Link>
                {/* Submenu */}
                <ul className="absolute hidden group-hover:block bg-[#13123F] shadow-lg rounded-md w-48 z-10">
                  {hipodromos.map((hipo) => (
                    <li key={hipo.slug}>
                      <Link
                        to={`/pronostico/${hipo.slug}`}
                        className="block px-4 py-2 text-[#F5F5F5] hover:text-[#D4AF37] transition-colors duration-200 rounded-md"
                      >
                        {hipo.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {/* <li>
                <Link
                  to="/galeria"
                  className={`font-bold transition-colors duration-200 rounded-md p-2 ${
                    page === "galeria"
                      ? "text-[#D4AF37]"
                      : "text-[#F5F5F5] hover:text-[#D4AF37]"
                  }`}
                >
                  Galería Fotográfica
                </Link>
              </li> */}
              <li>
                <Link
                  to="/nosotros"
                  className={`font-bold transition-colors duration-200 rounded-md p-2 ${
                    page === "nosotros"
                      ? "text-[#D4AF37]"
                      : "text-[#F5F5F5] hover:text-[#D4AF37]"
                  }`}
                >
                  Nosotros
                </Link>
              </li>
            </ul>
          </nav>

          {/* Redes Sociales Desktop */}
          <div className="hidden md:flex space-x-4 ml-8">
            <a
              href="#"
              className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors duration-200"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="#"
              className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors duration-200"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a
              href="#"
              className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors duration-200"
              aria-label="TikTok"
            >
              <i className="fab fa-tiktok text-xl"></i>
            </a>
            <a
              href="#"
              className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors duration-200"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>

          {/* Botón Menú Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white text-2xl focus:outline-none"
              aria-label="Abrir menú"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Menú Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#03022F] text-white font-bold shadow-xl flex flex-col p-6 overflow-y-auto z-20 transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="text-2xl font-bold text-[#D4AF37]">
            <div className="absolute top-1 left-0 w-20 h-20 rounded-full shadow-xl flex items-center justify-center">
              <img src="/logo.png" alt="Indice 1 Logo" className="w-auto" />
            </div>
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="text-white text-2xl focus:outline-none"
            aria-label="Cerrar menú"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <nav className="flex flex-col space-y-4 text-xl">
          <Link
            to="/"
            className={`font-semibold p-2 ${
              page === ""
                ? "text-[#D4AF37]"
                : "text-[#F5F5F5] hover:text-[#D4AF37]"
            }`}
          >
            Inicio
          </Link>
          <Link
            to="/noticias"
            className={`font-semibold p-2 ${
              page === "noticias"
                ? "text-[#D4AF37]"
                : "text-[#F5F5F5] hover:text-[#D4AF37]"
            }`}
          >
            Noticias
          </Link>

          <div className="relative">
            <button
              className={`p-2 flex justify-between items-center w-full ${
                page === "pronostico"
                  ? "text-[#D4AF37]"
                  : "text-[#F5F5F5] hover:text-[#D4AF37]"
              }`}
            >
              Pronósticos
              <i className="fas fa-chevron-down text-sm ml-1"></i>
            </button>
            <ul className="pl-4 mt-2 space-y-2 text-base">
              {hipodromos.map((hipo) => (
                <li key={hipo.slug}>
                  <Link
                    to={`/pronostico/${hipo.slug}`}
                    className={`text-[#F5F5F5] hover:text-[#D4AF37] block px-4 py-2 transition-colors duration-200 rounded-md`}
                  >
                    {hipo.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <Link to="/galeria" className="text-[#F5F5F5] hover:text-[#D4AF37] p-2">
            Galería Fotográfica
          </Link> */}
          <Link
            to="/nosotros"
            className={`p-2 ${
              page === "nosotros"
                ? "text-[#D4AF37]"
                : "text-[#F5F5F5] hover:text-[#D4AF37]"
            }`}
          >
            Nosotros
          </Link>
        </nav>

        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="#"
            className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors duration-200"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="#"
            className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors duration-200"
          >
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a
            href="#"
            className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors duration-200"
          >
            <i className="fab fa-tiktok text-2xl"></i>
          </a>
          <a
            href="#"
            className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors duration-200"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Overlay cuando el menú mobile está abierto */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
};
