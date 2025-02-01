import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download } from "lucide-react";

// Componente reutilizável para exibir uma publicação
const PublicationCard = ({
  title,
  description,
  fileUrl,
}: {
  title: string;
  description: string;
  fileUrl: string;
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 transition-transform hover:scale-[1.02]">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={fileUrl}
        download
        className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
        aria-label={`Download ${title}`}
      >
        <Download className="h-5 w-5" />
        <span>Download PDF</span>
      </a>
    </div>
  );
};

const Publications = () => {
  const publications = [
    {
      title: "Relatório Anual 2023",
      description:
        "Confira os resultados e conquistas da VitaCare Saúde no ano de 2023.",
      fileUrl: "/files/relatorio-anual-2023.pdf",
    },
    {
      title: "Demonstrações Financeiras",
      description:
        "Acesse as demonstrações financeiras do último trimestre.",
      fileUrl: "/files/demonstracoes-financeiras.pdf",
    },
    {
      title: "Manual do Beneficiário",
      description:
        "Guia completo com informações sobre seu plano de saúde.",
      fileUrl: "/files/manual-beneficiario.pdf",
    },
    {
      title: "Política de Privacidade",
      description: "Saiba como tratamos seus dados pessoais.",
      fileUrl: "/files/politica-privacidade.pdf",
    },
    {
      title: "Rede Credenciada",
      description:
        "Lista completa de hospitais, clínicas e laboratórios.",
      fileUrl: "/files/rede-credenciada.pdf",
    },
    {
      title: "Informativos ANS",
      description:
        "Comunicados e atualizações da Agência Nacional de Saúde.",
      fileUrl: "/files/informativos-ans.pdf",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary text-center mb-6">
          Publicações
        </h1>

        {/* Lista de publicações */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((publication, index) => (
              <PublicationCard key={index} {...publication} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Publications;