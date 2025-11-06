import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya aceptó las cookies
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Mostrar el banner después de 1 segundo para mejor UX
      setTimeout(() => setShow(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setShow(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setShow(false);
    // Aquí podrías agregar lógica para deshabilitar cookies no esenciales
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#03022F] text-white p-4 shadow-2xl z-50 animate-slide-up">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start gap-3">
              <i className="fas fa-cookie-bite text-[#D4AF37] text-2xl mt-1"></i>
              <div>
                <h3 className="font-bold text-lg mb-2">🍪 Usamos Cookies</h3>
                <p className="text-sm text-[#F5F5F5] leading-relaxed">
                  Utilizamos cookies propias y de terceros (Google Analytics,
                  Google AdSense) para mejorar tu experiencia de navegación,
                  analizar el uso del sitio y mostrar anuncios personalizados.
                </p>
                <Link
                  to="/privacidad"
                  className="text-[#D4AF37] hover:text-white text-sm underline inline-block mt-2"
                >
                  Leer Política de Privacidad
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={rejectCookies}
              className="px-6 py-2 bg-transparent border-2 border-[#F5F5F5] text-[#F5F5F5] rounded-lg font-semibold hover:bg-[#F5F5F5] hover:text-[#03022F] transition-colors duration-200"
            >
              Rechazar
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 bg-[#D4AF37] text-[#03022F] rounded-lg font-bold hover:bg-[#F5F5F5] transition-colors duration-200 shadow-lg"
            >
              Aceptar Todas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
