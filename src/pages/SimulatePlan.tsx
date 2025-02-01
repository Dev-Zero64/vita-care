import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SimulatePlan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">
          Simule seu Plano
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Dados Pessoais</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Idade"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                  <option value="">Selecione o tipo de plano</option>
                  <option value="individual">Individual</option>
                  <option value="familiar">Familiar</option>
                  <option value="empresarial">Empresarial</option>
                </select>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Dependentes</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    placeholder="Quantidade"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="mt-6 w-full bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
            Simular Plano
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SimulatePlan;
