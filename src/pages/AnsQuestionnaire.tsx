import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AnsQuestionnaire = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">
          Questionário ANS
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mb-6">
            Este questionário é uma exigência da Agência Nacional de Saúde
            Suplementar (ANS) para avaliar a qualidade dos serviços prestados.
          </p>
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">1. Satisfação Geral</h2>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                <option value="">Selecione uma opção</option>
                <option value="5">Muito satisfeito</option>
                <option value="4">Satisfeito</option>
                <option value="3">Regular</option>
                <option value="2">Insatisfeito</option>
                <option value="1">Muito insatisfeito</option>
              </select>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">2. Rede Credenciada</h2>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                <option value="">Selecione uma opção</option>
                <option value="5">Muito satisfeito</option>
                <option value="4">Satisfeito</option>
                <option value="3">Regular</option>
                <option value="2">Insatisfeito</option>
                <option value="1">Muito insatisfeito</option>
              </select>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">3. Atendimento</h2>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                <option value="">Selecione uma opção</option>
                <option value="5">Muito satisfeito</option>
                <option value="4">Satisfeito</option>
                <option value="3">Regular</option>
                <option value="2">Insatisfeito</option>
                <option value="1">Muito insatisfeito</option>
              </select>
            </div>

            <button className="w-full bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
              Enviar Questionário
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnsQuestionnaire;
