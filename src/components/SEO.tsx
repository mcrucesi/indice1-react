import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  article?: {
    publishedTime?: string;
    author?: string;
  };
}

export const SEO = ({
  title = "Indice 1 - Hablemos de Hípica",
  description = "Portal de noticias, pronósticos y galería fotográfica de hípica en Chile. Cobertura de Valparaíso Sporting, Club Hípico de Santiago, Hipódromo Chile y más.",
  image = "/logo.png",
  url = "https://indice1.cl",
  type = "website",
  article,
}: SEOProps) => {
  const siteName = import.meta.env.VITE_SITE_NAME || "Indice 1";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullUrl = url.startsWith("http") ? url : `https://indice1.cl${url}`;
  const fullImage = image.startsWith("http")
    ? image
    : `https://indice1.cl${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="es_CL" />

      {/* Article specific */}
      {type === "article" && article && (
        <>
          {article.publishedTime && (
            <meta
              property="article:published_time"
              content={article.publishedTime}
            />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="geo.region" content="CL" />
      <meta name="geo.placename" content="Chile" />
    </Helmet>
  );
};
