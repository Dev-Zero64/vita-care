import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { detailedNews } from "@/lib/detailedNews";

// Componente reutilizável para exibir o cabeçalho da notícia
const NewsHeader = ({
  title,
  date,
  image,
}: {
  title: string;
  date: string;
  image: string;
}) => {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="container mx-auto px-4 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg">
            {new Date(date).toLocaleDateString("pt-BR")}
          </p>
        </div>
      </div>
    </div>
  );
};

// Componente principal
const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const newsItem = detailedNews.find((item) => item.id === Number(id));

  if (!newsItem) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold text-center text-gray-700">
            Notícia não encontrada
          </h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Cabeçalho da notícia */}
        <NewsHeader
          title={newsItem.title}
          date={newsItem.date}
          image={newsItem.image}
        />

        {/* Conteúdo da notícia */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto prose prose-lg prose-primary">
            {newsItem.content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsDetail;
