import type { WPPost } from "../../types/wordpress";
import { NewsCard } from "./NewsCard";
import { AdPlaceholder } from "../ads/AdPlaceholder";

interface LatestNewsProps {
  posts: WPPost[];
  isHome?: boolean;
}

export const LatestNews = ({ posts, isHome }: LatestNewsProps) => {
  return (
    <section className="mb-8">
      {isHome && (
        <h2 className="text-3xl font-bold text-[#333333] mb-6">
          Últimas Noticias
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(0, 3).map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}

        {/* Espacio para anuncio in-feed después de 3 posts */}
        <AdPlaceholder
          type="in-feed"
          className="col-span-1 md:col-span-2 lg:col-span-1"
        />

        {posts.slice(3, 6).map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};
