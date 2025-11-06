export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#03022F] text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4 text-[#F5F5F5] font-bold text-lg">
          &copy; Indice 1, {currentYear}. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors duration-200"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-3xl"></i>
          </a>
          <a
            href="#"
            className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors duration-200"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook text-3xl"></i>
          </a>
          <a
            href="#"
            className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors duration-200"
            aria-label="TikTok"
          >
            <i className="fab fa-tiktok text-3xl"></i>
          </a>
          <a
            href="#"
            className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors duration-200"
            aria-label="X"
          >
            <i className="fab fa-x text-3xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};