import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const news = [
  {
    id: 1,
    title: "VitaCare amplia rede de atendimento",
    excerpt:
      "Nova parceria adiciona mais 50 clínicas especializadas à nossa rede credenciada.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
    date: "2024-03-15",
  },
  {
    id: 2,
    title: "Lançamento do Programa de Prevenção",
    excerpt:
      "Conheça nosso novo programa focado na prevenção de doenças e promoção da saúde.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    date: "2024-03-10",
  },
  {
    id: 3,
    title: "Telemedicina: atendimento 24h",
    excerpt:
      "Agora você pode realizar consultas médicas online a qualquer momento.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    date: "2024-03-05",
  },
];

const NewsSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Últimas Notícias
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(item.date).toLocaleDateString("pt-BR")}
                </p>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link
                  to={`/noticias/${item.id}`}
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                >
                  <span>Leia mais</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;