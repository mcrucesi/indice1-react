import type { WPPost, WPTerm } from "../types/wordpress";

// Formatear fecha
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

// Extraer texto plano de HTML
export const stripHtml = (html: string): string => {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

// Truncar texto
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

// Obtener imagen destacada - Mejorado para soportar todos los formatos
export const getFeaturedImage = (post: WPPost): string | null => {
  // Intentar obtener la imagen desde _embedded
  const media = post._embedded?.["wp:featuredmedia"]?.[0];

  if (!media) return null;

  // Prioridad: full size > large > medium > thumbnail > source_url
  const sizes = media.media_details?.sizes;

  if (sizes) {
    // Para Hero, preferimos imágenes grandes
    if (sizes.full?.source_url) return sizes.full.source_url;
    if (sizes.large?.source_url) return sizes.large.source_url;
    if (sizes.medium_large?.source_url) return sizes.medium_large.source_url;
    if (sizes.medium?.source_url) return sizes.medium.source_url;
  }

  // Fallback al source_url original (soporta .avif, .webp, etc.)
  return media.source_url || null;
};

// NUEVO: Extraer todas las imágenes del contenido del post
export const extractImagesFromContent = (
  post: WPPost
): Array<{
  url: string;
  alt: string;
  title?: string;
}> => {
  const images: Array<{ url: string; alt: string; title?: string }> = [];

  if (!post.content?.rendered) return images;

  // Crear un DOM temporal para parsear el HTML
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = post.content.rendered;

  // Obtener todas las imágenes del contenido
  const imgElements = tempDiv.querySelectorAll("img");

  imgElements.forEach((img) => {
    const src = img.getAttribute("src");
    if (src && !src.includes("data:image")) {
      // Excluir imágenes base64
      images.push({
        url: src,
        alt: img.getAttribute("alt") || "",
        title: img.getAttribute("title") || undefined,
      });
    }
  });

  return images;
};

// NUEVO: Obtener TODAS las imágenes de un post (destacada + contenido)
export const getAllPostImages = (
  post: WPPost
): Array<{
  id: string;
  url: string;
  thumbnail: string;
  alt: string;
  title: string;
  isFeatured: boolean;
}> => {
  const allImages: Array<{
    id: string;
    url: string;
    thumbnail: string;
    alt: string;
    title: string;
    isFeatured: boolean;
  }> = [];

  const postTitle = stripHtml(post.title?.rendered || "Imagen");

  // 1. Agregar imagen destacada
  const featuredImage = getFeaturedImage(post);
  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];

  if (featuredImage) {
    allImages.push({
      id: `${post.id}-featured`,
      url: featuredImage,
      thumbnail:
        featuredMedia?.media_details?.sizes?.medium?.source_url ||
        featuredImage,
      alt: featuredMedia?.alt_text || postTitle,
      title: postTitle,
      isFeatured: true,
    });
  }

  // 2. Agregar imágenes del contenido
  const contentImages = extractImagesFromContent(post);
  contentImages.forEach((img, index) => {
    allImages.push({
      id: `${post.id}-content-${index}`,
      url: img.url,
      thumbnail: img.url, // WordPress no da thumbnail de imágenes en contenido
      alt: img.alt || `${postTitle} - Imagen ${index + 1}`,
      title: img.title || postTitle,
      isFeatured: false,
    });
  });

  return allImages;
};

// Obtener nombre del autor
export const getAuthorName = (post: WPPost): string => {
  return post._embedded?.author?.[0]?.name || "Autor Desconocido";
};

// Obtener categorías
export const getCategories = (post: WPPost): string[] => {
  const terms = post._embedded?.["wp:term"];
  if (!terms) return [];

  return terms
    .flat()
    .filter((term: WPTerm) => term.taxonomy === "category")
    .map((term: WPTerm) => term.name);
};

// Debug: Ver estructura completa de la imagen
export const debugFeaturedImage = (post: WPPost): void => {
  console.log("🖼️ Debug Featured Image:", {
    post_id: post.id,
    post_title: post.title?.rendered,
    embedded_media: post._embedded?.["wp:featuredmedia"],
    featured_media_id: post.featured_media,
  });
};
