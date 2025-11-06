import { Link } from "react-router-dom";
import type { WPPost } from "../../types/wordpress";
import { stripHtml, getFeaturedImage } from "../../utils/helpers";

interface NewsCardProps {
  post: WPPost;
}

export const NewsCard = ({ post }: NewsCardProps) => {
  const featuredImage =
    getFeaturedImage(post) ||
    "https://placehold.co/600x400/03022F/D4AF37?text=Indice+1";
  const excerpt = stripHtml(post.excerpt.rendered);
  const title = stripHtml(post.title.rendered);

  return (
    <div className="bg-[#F8F8F8] rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <Link to={`/post/${post.slug}`}>
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${featuredImage})` }}
        />
      </Link>
      <div className="p-6">
        <Link to={`/post/${post.slug}`}>
          <h3 className="text-xl font-semibold text-[#333333] mb-2 hover:text-[#D4AF37] transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-[#666666] text-sm mb-4 line-clamp-3">
          {truncateText(excerpt, 120)}
        </p>
        <Link
          to={`/post/${post.slug}`}
          className="text-[#004080] hover:text-[#D4AF37] font-medium transition-colors"
        >
          Leer más <i className="fas fa-chevron-right text-xs ml-1"></i>
        </Link>
      </div>
    </div>
  );
};

// Helper function local
function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}
