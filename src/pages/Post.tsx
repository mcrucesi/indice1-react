import { useParams } from "react-router-dom";
import * as useWordPress from "../hooks/useWordPress";
import { Loading, ErrorMessage } from "../components/Loading";
import {
  formatDate,
  getFeaturedImage,
  getAuthorName,
  stripHtml,
} from "../utils/helpers";
import { AdPlaceholder } from "../components/ads/AdPlaceholder";
import { NewsCard } from "../components/sections/NewsCard";
import { SEO } from "../components/SEO";

export const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  const {
    data: post,
    isLoading,
    error,
  } = useWordPress.usePostBySlug(slug || "");
  const { data: relatedPosts } = useWordPress.usePosts(1, 3); // Posts relacionados

  if (isLoading) return <Loading />;
  if (error || !post) return <ErrorMessage message="Post no encontrado" />;

  const featuredImage = getFeaturedImage(post);
  const authorName = getAuthorName(post);
  const excerpt = stripHtml(post.excerpt.rendered);
  const title = stripHtml(post.title.rendered);

  return (
    <>
      <SEO
        title={title}
        description={excerpt.slice(0, 160)}
        image={featuredImage || undefined}
        url={`/post/${post.slug}`}
        type="article"
        article={{
          publishedTime: post.date,
          author: authorName,
        }}
      />

      <main className="container mx-auto px-4 py-8">
        {/* Artículo Principal */}
        <article className="bg-[#F8F8F8] rounded-lg shadow-md overflow-hidden p-6 lg:p-12 mb-8">
          {/* Título y metadatos */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#333333] leading-tight mb-2">
              {title}
            </h1>
            <div className="w-16 h-1 bg-[#D4AF37] mt-2 rounded-full"></div>
            <p className="text-sm text-[#666666] mt-4">
              Por <span className="font-semibold">{authorName}</span> |
              Publicado el {formatDate(post.date)}
            </p>
          </div>

          {/* Imagen destacada */}
          {featuredImage && (
            <div
              className="w-full h-64 md:h-96 bg-cover bg-center rounded-lg mb-8"
              style={{ backgroundImage: `url(${featuredImage})` }}
            />
          )}

          {/* AdSense */}
          <AdPlaceholder type="banner-large" className="my-8" />

          {/* Contenido del artículo */}
          <div className="prose prose-lg max-w-none text-base text-[#333333] leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>

          {/* Compartir en redes sociales */}
          <div className="mt-8 pt-6 border-t border-gray-300 flex flex-wrap items-center gap-4">
            <span className="text-lg font-semibold text-[#333333]">
              Comparte en:
            </span>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#03022F] hover:text-[#D4AF37] transition-colors duration-200"
            >
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a
              href={`https://x.com/intent/tweet?url=${window.location.href}&text=${title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#03022F] hover:text-[#D4AF37] transition-colors duration-200"
            >
              <i className="fab fa-x text-2xl"></i>
            </a>
            <a
              href={`https://wa.me/?text=${title} ${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#03022F] hover:text-[#D4AF37] transition-colors duration-200"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
          </div>
        </article>

        {/* Artículos Relacionados */}
        {relatedPosts && relatedPosts.posts.length > 0 && (
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-[#333333] mb-6">
              Artículos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.posts.map((relatedPost) => (
                <NewsCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </section>
        )}

        {/* AdSense final */}
        <AdPlaceholder type="banner-large" className="my-8" />
      </main>
    </>
  );
};
