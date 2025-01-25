import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Publications = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Publicações</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">Relatório Anual 2023</h2>
              <p className="text-gray-600 mb-4">
                Confira os resultados e conquistas da VitaCare Saúde no ano de 2023.
              </p>
              <button className="text-primary hover:text-primary-dark">
                Download PDF
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">Demonstrações Financeiras</h2>
              <p className="text-gray-600 mb-4">
                Acesse as demonstrações financeiras do último trimestre.
              </p>
              <button className="text-primary hover:text-primary-dark">
                Download PDF
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">Manual do Beneficiário</h2>
              <p className="text-gray-600 mb-4">
                Guia completo com informações sobre seu plano de saúde.
              </p>
              <button className="text-primary hover:text-primary-dark">
                Download PDF
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">Política de Privacidade</h2>
              <p className="text-gray-600 mb-4">
                Saiba como tratamos seus dados pessoais.
              </p>
              <button className="text-primary hover:text-primary-dark">
                Download PDF
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">Rede Credenciada</h2>
              <p className="text-gray-600 mb-4">
                Lista completa de hospitais, clínicas e laboratórios.
              </p>
              <button className="text-primary hover:text-primary-dark">
                Download PDF
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">Informativos ANS</h2>
              <p className="text-gray-600 mb-4">
                Comunicados e atualizações da Agência Nacional de Saúde.
              </p>
              <button className="text-primary hover:text-primary-dark">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Publications;