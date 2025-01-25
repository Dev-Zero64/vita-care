import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TissGuide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Guia TISS</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">O que é o TISS?</h2>
              <p className="text-gray-600">
                O TISS (Troca de Informações em Saúde Suplementar) é o padrão obrigatório para troca de informações entre operadoras de planos privados de assistência à saúde e prestadores de serviços de saúde.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Downloads</h2>
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-medium mb-2">Manual TISS</h3>
                  <button className="text-primary hover:text-primary-dark">
                    Download PDF
                  </button>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-medium mb-2">Tabela de Domínio</h3>
                  <button className="text-primary hover:text-primary-dark">
                    Download PDF
                  </button>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-medium mb-2">Guia de Preenchimento</h3>
                  <button className="text-primary hover:text-primary-dark">
                    Download PDF
                  </button>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Suporte TISS</h2>
              <p className="text-gray-600 mb-4">
                Precisa de ajuda com o TISS? Nossa equipe está disponível para auxiliar:
              </p>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <strong>E-mail:</strong> suporte.tiss@vitacare.com.br
                </p>
                <p className="text-gray-600">
                  <strong>Telefone:</strong> 0800 123 4567
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TissGuide;