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
  {
    id: 4,
    title: "Novo aplicativo VitaCare",
    content: `Estamos muito empolgados em anunciar o lançamento do novo aplicativo VitaCare! Desenvolvido com as mais modernas tecnologias, nosso app traz uma experiência completamente renovada para facilitar o acesso aos nossos serviços.

Com o novo aplicativo, você pode:
- Agendar consultas com apenas alguns cliques
- Acessar sua carteirinha digital
- Localizar médicos e clínicas próximas
- Visualizar histórico de atendimentos
- Solicitar reembolsos de forma digital
- Receber notificações sobre agendamentos e novidades

O aplicativo está disponível gratuitamente para iOS e Android. Faça o download agora e tenha a VitaCare na palma da sua mão!`,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    date: "2024-03-01",
  },
  {
    id: 5,
    title: "Campanha de Vacinação 2024",
    content: `A VitaCare Saúde dá início à sua Campanha de Vacinação 2024, uma iniciativa fundamental para a prevenção de doenças e proteção da saúde de nossos beneficiários.

Nossa campanha oferece:
- Vacinas contra gripe (Influenza)
- Todas as vacinas do calendário nacional
- Equipe especializada em vacinação
- Pontos de vacinação em diversas regiões
- Agendamento online para evitar filas

Os pontos de vacinação funcionarão de segunda a sábado, das 8h às 18h. Beneficiários VitaCare têm desconto especial em todas as vacinas particulares.

Proteja-se e proteja quem você ama. Vacinar é um ato de amor e responsabilidade social.`,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    date: "2024-02-28",
  },
  {
    id: 6,
    title: "Parceria com novo hospital",
    content: `É com grande satisfação que anunciamos nossa mais nova parceria com o Hospital São Lucas, uma das instituições mais respeitadas do país na área da saúde.

O Hospital São Lucas passa a integrar nossa rede premium de atendimento, oferecendo:
- Centro cirúrgico de última geração
- UTI adulto e pediátrica
- Pronto-socorro 24 horas
- Centro de diagnóstico completo
- Equipe médica altamente qualificada
- Atendimento humanizado

Esta parceria representa mais um passo importante no compromisso da VitaCare em oferecer serviços de saúde da mais alta qualidade aos nossos beneficiários.

O Hospital São Lucas está localizado em área privilegiada e conta com amplo estacionamento e fácil acesso por transporte público.`,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
    date: "2024-02-25",
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