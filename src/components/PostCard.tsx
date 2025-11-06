import { Link } from "react-router-dom";
import type { WPPost } from "../types/wordpress";
import {
  formatDate,
  stripHtml,
  truncateText,
  getFeaturedImage,
  getAuthorName,
} from "../utils/helpers";

interface PostCardProps {
  post: WPPost;
}

export const PostCard = ({ post }: PostCardProps) => {
  const featuredImage = getFeaturedImage(post);
  const authorName = getAuthorName(post);
  const excerpt = stripHtml(post.excerpt.rendered);

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {featuredImage && (
        <Link to={`/post/${post.slug}`}>
          <img
            src={featuredImage}
            alt={post.title.rendered}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </Link>
      )}

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{authorName}</span>
        </div>

        <Link to={`/post/${post.slug}`}>
          <h2
            className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {truncateText(excerpt, 150)}
        </p>

        <Link
          to={`/post/${post.slug}`}
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
        >
          Leer más
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};
