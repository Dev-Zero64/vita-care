import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cancellation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Cancelamento</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mb-6">
            Para solicitar o cancelamento do seu plano, preencha o formulário
            abaixo:
          </p>
          <div className="space-y-4 max-w-md">
            <input
              type="text"
              placeholder="Nome completo"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Número da carteirinha"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
              <option value="">Motivo do cancelamento</option>
              <option value="mudanca">Mudança de cidade</option>
              <option value="financeiro">Motivo financeiro</option>
              <option value="insatisfacao">Insatisfação com o serviço</option>
              <option value="outro">Outro motivo</option>
            </select>
            <textarea
              placeholder="Observações"
              className="w-full px-4 py-2 border border-gray-300 rounded-md h-32"
            ></textarea>
            <button className="w-full bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
              Solicitar Cancelamento
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cancellation;
