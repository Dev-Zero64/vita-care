import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const news = [
  {
    id: 1,
    title: "VitaCare amplia rede de atendimento",
    content: `Nossa rede credenciada acaba de crescer ainda mais! Em parceria com importantes grupos médicos, adicionamos mais 50 clínicas especializadas ao nosso network de atendimento.

Esta expansão representa um importante passo para garantir ainda mais qualidade e comodidade no atendimento aos nossos beneficiários. As novas clínicas estão estrategicamente localizadas em diferentes regiões, facilitando o acesso aos serviços de saúde.

Entre as especialidades contempladas estão: Cardiologia, Ortopedia, Pediatria, Ginecologia, entre outras. Todas as novas unidades passaram por um rigoroso processo de avaliação para garantir o alto padrão de qualidade VitaCare.`,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
    date: "2024-03-15",
  },
  {
    id: 2,
    title: "Lançamento do Programa de Prevenção",
    content: `A VitaCare Saúde tem o prazer de anunciar o lançamento do seu novo Programa de Prevenção, uma iniciativa inovadora focada na promoção da saúde e prevenção de doenças.

O programa inclui check-ups periódicos, orientação nutricional, programas de exercícios físicos e acompanhamento personalizado. Nossa equipe multidisciplinar está preparada para oferecer todo o suporte necessário.

Acreditamos que prevenir é sempre melhor que remediar, e por isso investimos em ações que contribuem para a qualidade de vida dos nossos beneficiários.`,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    date: "2024-03-10",
  },
  {
    id: 3,
    title: "Telemedicina: atendimento 24h",
    content: `Pensando no conforto e na praticidade dos nossos beneficiários, a VitaCare agora oferece atendimento médico online 24 horas por dia, 7 dias por semana.

Através da nossa plataforma de telemedicina, você pode realizar consultas com médicos especialistas sem sair de casa. O serviço é ideal para casos de baixa complexidade, dúvidas médicas e acompanhamento de tratamentos.

A plataforma é segura, intuitiva e está disponível para todos os nossos beneficiários, sem custo adicional.`,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    date: "2024-03-05",
  },
];

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = news.find((item) => item.id === Number(id));

  if (!newsItem) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold">Notícia não encontrada</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="relative h-[400px]">
          <div className="absolute inset-0 bg-black/40" />
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-white">
              <h1 className="text-4xl font-bold mb-4">{newsItem.title}</h1>
              <p className="text-lg">
                {new Date(newsItem.date).toLocaleDateString("pt-BR")}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              {newsItem.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsDetail;