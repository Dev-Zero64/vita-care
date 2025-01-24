import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
  {
    id: 4,
    title: "Novo aplicativo VitaCare",
    excerpt:
      "Lançamos nosso novo aplicativo para facilitar ainda mais o acesso aos nossos serviços.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    date: "2024-03-01",
  },
  {
    id: 5,
    title: "Campanha de Vacinação 2024",
    excerpt:
      "Confira os pontos de vacinação e o calendário completo da nossa campanha.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    date: "2024-02-28",
  },
  {
    id: 6,
    title: "Parceria com novo hospital",
    excerpt:
      "Hospital São Lucas passa a integrar nossa rede de atendimento premium.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
    date: "2024-02-25",
  },
];

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Notícias</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(item.date).toLocaleDateString("pt-BR")}
                  </p>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Link
                    to={`/noticias/${item.id}`}
                    className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                  >
                    <span>Leia mais</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;