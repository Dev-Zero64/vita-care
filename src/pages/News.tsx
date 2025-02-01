import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { news } from "@/lib/news";

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
    <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardHeader className="p-6 space-y-2">
        <p className="text-sm text-gray-500">
          {new Date(date).toLocaleDateString("pt-BR")}
        </p>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link
          to={`/noticias/${id}`}
          className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          aria-label={`Leia mais sobre ${title}`}
        >
          <span>Leia mais</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
};

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          Notícias
        </h1>

        {/* Lista de notícias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
