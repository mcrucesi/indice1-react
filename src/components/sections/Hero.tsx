import { Link } from 'react-router-dom';
import type { WPPost } from '../../types/wordpress';
import { stripHtml, getFeaturedImage } from '../../utils/helpers';

interface HeroSectionProps {
  featuredPost?: WPPost;
}

export const Hero = ({ featuredPost }: HeroSectionProps) => {
  if (!featuredPost) {
    return null;
  }

  const featuredImage = getFeaturedImage(featuredPost);
  const excerpt = stripHtml(featuredPost.excerpt.rendered);
  const title = stripHtml(featuredPost.title.rendered);

  return (
    <section className="relative bg-[#2A3F4A] text-white rounded-lg shadow-lg mb-8 overflow-hidden min-h-[300px] md:min-h-[540px]">
      {/* Imagen de fondo */}
      {featuredImage && (
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${featuredImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay oscuro para mejorar legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
        </div>
      )}

      {/* Contenido */}
      <div className="relative z-10 p-6 md:p-12 flex flex-col justify-end h-full min-h-[300px] md:min-h-[500px]">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight text-[#F5F5F5] drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl text-[#F5F5F5] drop-shadow-md">
          {excerpt.slice(0, 200)}...
        </p>
        <Link
          to={`/post/${featuredPost.slug}`}
          className="inline-block bg-[#03022F] text-[#F5F5F5] hover:bg-[#D4AF37] hover:text-[#03022F] font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 w-fit"
        >
          Ver Noticia Completa <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>

      {/* Fallback si no hay imagen */}
      {!featuredImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#03022F] to-[#2A3F4A]"></div>
      )}
    </section>
  );
};