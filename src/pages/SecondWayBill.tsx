import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SecondWayBill = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Segunda Via do Boleto</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mb-6">
            Para acessar a segunda via do seu boleto, por favor insira seu número de cadastro:
          </p>
          <div className="max-w-md">
            <input
              type="text"
              placeholder="Número de cadastro"
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
            />
            <button className="w-full bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
              Gerar Boleto
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SecondWayBill;