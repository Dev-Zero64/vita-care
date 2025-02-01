import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { latestNews } from "@/lib/latestNews";

// Componente reutilizável para exibir uma notícia
const NewsCard = ({
  id,
  image,
  title,
  date,
  excerpt,
}: {
  id: number;
  image: string;
  title: string;
  date: string;
  excerpt: string;
}) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
      aria-labelledby={`news-title-${id}`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6 space-y-4">
        <p className="text-sm text-gray-500">
          {new Date(date).toLocaleDateString("pt-BR")}
        </p>
        <h3 id={`news-title-${id}`} className="text-xl font-semibold">
          {title}
        </h3>
        <p className="text-gray-600">{excerpt}</p>
        <Link
          to={`/noticias/${id}`}
          className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          aria-label={`Leia mais sobre ${title}`}
        >
          <span>Leia mais</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

const NewsSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Últimas Notícias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
