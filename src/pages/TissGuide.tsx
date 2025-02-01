import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download } from "lucide-react";

// Componente reutilizável para itens de download
const DownloadItem = ({
  title,
  fileUrl,
}: {
  title: string;
  fileUrl: string;
}) => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg transition-transform hover:scale-[1.02]">
      <h3 className="font-medium mb-2">{title}</h3>
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

const TissGuide = () => {
  const downloads = [
    { title: "Manual TISS", fileUrl: "/files/manual-tiss.pdf" },
    { title: "Tabela de Domínio", fileUrl: "/files/tabela-dominio.pdf" },
    {
      title: "Guia de Preenchimento",
      fileUrl: "/files/guia-preenchimento.pdf",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary text-center mb-6">
          Guia TISS
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          {/* Seção: O que é o TISS? */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              O que é o TISS?
            </h2>
            <p className="text-gray-600">
              O TISS (Troca de Informações em Saúde Suplementar) é o padrão
              obrigatório para troca de informações entre operadoras de planos
              privados de assistência à saúde e prestadores de serviços de
              saúde.
            </p>
          </section>

          {/* Seção: Downloads */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              Downloads
            </h2>
            <div className="space-y-4">
              {downloads.map(({ title, fileUrl }, index) => (
                <DownloadItem key={index} title={title} fileUrl={fileUrl} />
              ))}
            </div>
          </section>

          {/* Seção: Suporte TISS */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              Suporte TISS
            </h2>
            <p className="text-gray-600 mb-4">
              Precisa de ajuda com o TISS? Nossa equipe está disponível para
              auxiliar:
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>E-mail:</strong>{" "}
                <a
                  href="mailto:suporte.tiss@vitacare.com.br"
                  className="text-primary hover:text-primary-dark transition-colors"
                  aria-label="Enviar e-mail para suporte TISS"
                >
                  suporte.tiss@vitacare.com.br
                </a>
              </p>
              <p className="text-gray-600">
                <strong>Telefone:</strong>{" "}
                <a
                  href="tel:08001234567"
                  className="text-primary hover:text-primary-dark transition-colors"
                  aria-label="Ligar para suporte TISS"
                >
                  0800 123 4567
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TissGuide;
