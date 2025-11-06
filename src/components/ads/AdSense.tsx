import { useEffect, useRef } from "react";

interface AdSenseProps {
  slot: string;
  format?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical";
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Componente AdSense para Indice1
 *
 * Uso:
 * <AdSense slot="1234567890" format="auto" />
 *
 * Tipos de formato:
 * - auto: Adaptativo (recomendado)
 * - fluid: Tamaño fluido
 * - rectangle: 300x250
 * - horizontal: 728x90, 970x90
 * - vertical: 120x600, 160x600
 */
export const AdSense = ({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  style = {},
}: AdSenseProps) => {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      // Solo cargar si el usuario aceptó cookies
      const cookieConsent = localStorage.getItem("cookieConsent");
      if (cookieConsent === "rejected") {
        console.log("AdSense bloqueado: Usuario rechazó cookies");
        return;
      }

      // Cargar anuncio
      if (typeof window !== "undefined") {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {}
        );
      }
    } catch (error) {
      console.error("Error al cargar AdSense:", error);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", ...style }}
        data-ad-client={
          import.meta.env.VITE_ADSENSE_CLIENT_ID || "ca-pub-XXXXXXXXXX"
        }
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
};

/**
 * Componente AdSense con estilos predefinidos para diferentes ubicaciones
 */

// Banner Horizontal (728x90 o responsive)
export const AdSenseHorizontal = ({ slot }: { slot: string }) => (
  <AdSense
    slot={slot}
    format="horizontal"
    className="w-full my-8"
    style={{ minHeight: "90px" }}
  />
);

// Banner Grande (970x250 o responsive)
export const AdSenseLarge = ({ slot }: { slot: string }) => (
  <AdSense
    slot={slot}
    format="auto"
    className="w-full my-8"
    style={{ minHeight: "250px" }}
  />
);

// In-feed Ad (para listados de noticias)
export const AdSenseInFeed = ({ slot }: { slot: string }) => (
  <AdSense slot={slot} format="fluid" className="w-full h-64" />
);

// Rectangle (300x250)
export const AdSenseRectangle = ({ slot }: { slot: string }) => (
  <AdSense
    slot={slot}
    format="rectangle"
    className="mx-auto my-4"
    style={{ width: "300px", height: "250px" }}
  />
);
