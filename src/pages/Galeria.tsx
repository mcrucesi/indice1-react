import { useState } from "react";
import { AdPlaceholder } from "../components/ads/AdPlaceholder";
import { PhotoGallery } from "../components/gallery/PhotoGallery";
import { Loading, ErrorMessage } from "../components/Loading";
import { useCategories, usePosts } from "../hooks/useWordPress";

export const Galeria = () => {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(
    undefined
  );
  const perPage = parseInt(import.meta.env.VITE_POSTS_PER_PAGE || "10");

  const { data, isLoading, error } = usePosts(page, perPage, selectedCategory);
  const { data: categories } = useCategories();

  if (isLoading) return <Loading />;
  if (error)
    return <ErrorMessage message="No se pudieron cargar las galerías" />;

  // Extraer todas las imágenes de los posts
  const allPhotos =
    data?.posts.flatMap((post) => {
      const photos = [];

      // Imagen destacada
      const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
      if (featuredImage) {
        photos.push({
          id: `${post.id}-featured`,
          url: featuredImage.source_url,
          thumbnail:
            featuredImage.media_details?.sizes?.medium?.source_url ||
            featuredImage.source_url,
          title: post.title.rendered,
          caption: `Publicado el ${new Date(post.date).toLocaleDateString(
            "es-ES"
          )}`,
          postId: post.id,
          postSlug: post.slug,
        });
      }

      // Aquí puedes extraer más imágenes del contenido si las hay
      // Por ahora solo usamos la imagen destacada

      return photos;
    }) || [];

  const totalPages = data?.totalPages || 1;

  const handleCategoryChange = (categoryId: number | undefined) => {
    setSelectedCategory(categoryId);
    setPage(1); // Reset a página 1 al cambiar categoría
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Encabezado de pronóstico */}
      <div className="mb-8 border-b-2 border-gray-200 pb-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#333333] leading-tight">
          Nuestra Galería Fotográfica
        </h1>
        <div className="w-16 h-1 bg-[#D4AF37] mt-2 rounded-full"></div>
      </div>
      <p className="text-lg text-[#666666] mb-8">
        Explora los momentos más emocionantes y las imágenes más impactantes del
        mundo de la hípica chilena e internacional.
      </p>

      {/* Filtros por Categoría */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Filtrar Galería</h2>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <button
            onClick={() => {
              handleCategoryChange(undefined);
              setPage(1);
            }}
            className={`px-5 py-2 rounded-full font-semibold transition-colors duration-200 shadow-md ${
              selectedCategory === undefined
                ? 'bg-[#03022F] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-[#D4AF37] hover:text-[#03022F]'
            }`}
          >
            Todas las Fotos
          </button>
          {categories?.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                handleCategoryChange(category.id);
                setPage(1);
              }}
              className={`px-5 py-2 rounded-full font-semibold transition-colors duration-200 shadow-md ${
                selectedCategory === category.id
                  ? 'bg-[#03022F] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-[#D4AF37] hover:text-[#03022F]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* AdSense */}
      <AdPlaceholder type="banner-horizontal" className="mb-8" />

      {/* Galería con Lightbox */}
      <PhotoGallery photos={allPhotos} />

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-[#03022F] text-[#F5F5F5] rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-[#D4AF37] hover:text-[#03022F] transition-colors font-semibold"
          >
            <i className="fas fa-chevron-left mr-2"></i>
            Anterior
          </button>

          <span className="text-[#333333] font-medium">
            Página {page} de {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-[#03022F] text-[#F5F5F5] rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-[#D4AF37] hover:text-[#03022F] transition-colors font-semibold"
          >
            Siguiente
            <i className="fas fa-chevron-right ml-2"></i>
          </button>
        </div>
      )}

      {/* AdSense final */}
      <AdPlaceholder type="banner-large" className="my-8" />
    </main>
  );
};
