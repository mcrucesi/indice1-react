import { usePosts } from "../hooks/useWordPress";
import { Hero } from "../components/sections/Hero";
import { PronosticosAccess } from "../components/sections/PronosticosAccess";
import { LatestNews } from "../components/sections/LatestNews";
import { ExploreMore } from "../components/sections/ExploreMore";
import { AdPlaceholder } from "../components/ads/AdPlaceholder";
import { Loading, ErrorMessage } from "../components/Loading";
import { SEO } from "../components/SEO";

export const Home = () => {
  // Obtener posts recientes (10 para tener suficiente contenido)
  const { data, isLoading, error } = usePosts(1, 10);

  if (isLoading) return <Loading />;
  if (error)
    return <ErrorMessage message="No se pudieron cargar las noticias" />;

  const featuredPost = data?.posts[0]; // Post destacado para Hero
  const latestPosts = data?.posts.slice(1) || []; // Resto de posts para grid

  return (
    <>
      <SEO
        title="Indice 1 - Hablemos de Hípica"
        description="Portal líder de noticias, pronósticos y galería fotográfica de hípica en Chile. Cobertura completa de carreras en Valparaíso Sporting, Club Hípico de Santiago, Hipódromo Chile y más."
        url="/"
      />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section - Noticia Destacada */}
        <Hero featuredPost={featuredPost} />

        {/* Espacio para Anuncio Banner Horizontal */}
        <AdPlaceholder type="banner-horizontal" className="mb-8" />

        {/* Acceso Rápido a Pronósticos */}
        <PronosticosAccess />

        {/* Últimas Noticias */}
        <LatestNews posts={latestPosts} />

        {/* Espacio para Anuncio Banner Grande */}
        <AdPlaceholder type="banner-large" className="my-8" />

        {/* Explora Más en Indice 1 */}
        <ExploreMore />
      </main>
    </>
  );
};
