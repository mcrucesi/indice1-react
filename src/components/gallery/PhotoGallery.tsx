import { useState } from "react";
import { Link } from "react-router-dom";

interface Photo {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  caption: string;
  postId: number;
  postSlug: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!lightboxOpen) return;

    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "Escape") closeLightbox();
  };

  // Event listener para teclado
  useState(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  if (!photos || photos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">
          No hay fotos disponibles en esta categoría.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Grid de fotos */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <div className="relative">
              <img
                src={photo.thumbnail}
                alt={photo.title}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white w-full">
                  <h3
                    className="text-lg font-semibold mb-1 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: photo.title }}
                  />
                  <p className="text-sm text-gray-200">{photo.caption}</p>
                  {/* <Link
                    to={`/post/${photo.postSlug}`}
                    className="text-[#D4AF37] hover:text-white text-sm mt-2 inline-block"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Ver galería completa →
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Botón cerrar */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl hover:text-[#D4AF37] transition-colors z-50"
            aria-label="Cerrar"
          >
            <i className="fas fa-times"></i>
          </button>

          {/* Botón anterior */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-white text-5xl hover:text-[#D4AF37] transition-colors z-50"
            aria-label="Anterior"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          {/* Imagen principal */}
          <div
            className="max-w-7xl max-h-screen p-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[currentImageIndex].url}
              alt={photos[currentImageIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Info de la imagen */}
            <div className="text-white text-center mt-4 max-w-2xl">
              <h3
                className="text-2xl font-bold mb-2"
                dangerouslySetInnerHTML={{
                  __html: photos[currentImageIndex].title,
                }}
              />
              <p className="text-gray-300 mb-4">
                {photos[currentImageIndex].caption}
              </p>
              <Link
                to={`/post/${photos[currentImageIndex].postSlug}`}
                className="inline-block bg-[#D4AF37] text-[#03022F] font-semibold py-2 px-6 rounded-lg hover:bg-white transition-colors"
              >
                Ver galería completa
              </Link>
            </div>

            {/* Contador */}
            <p className="text-white text-sm mt-4">
              {currentImageIndex + 1} / {photos.length}
            </p>
          </div>

          {/* Botón siguiente */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white text-5xl hover:text-[#D4AF37] transition-colors z-50"
            aria-label="Siguiente"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </>
  );
};
