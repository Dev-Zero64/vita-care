import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IncomeTax = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">
          Imposto de Renda
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mb-6">
            Aqui você pode gerar seu demonstrativo anual para declaração de
            Imposto de Renda.
          </p>
          <div className="space-y-4 max-w-md">
            <input
              type="text"
              placeholder="CPF"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
              <option value="">Ano de referência</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
            <button className="w-full bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
              Gerar Demonstrativo
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IncomeTax;
