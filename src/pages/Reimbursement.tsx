import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Reimbursement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Reembolso</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Solicitar Reembolso</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Número da carteirinha"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                  <option value="">Tipo de serviço</option>
                  <option value="consulta">Consulta</option>
                  <option value="exame">Exame</option>
                  <option value="terapia">Terapia</option>
                  <option value="outros">Outros</option>
                </select>
                <input
                  type="number"
                  placeholder="Valor (R$)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <div className="flex flex-col space-y-2">
                  <label className="text-sm text-gray-600">
                    Nota fiscal ou recibo (PDF)
                  </label>
                  <input type="file" accept=".pdf" className="w-full" />
                </div>
              </div>
            </div>
            <button className="w-full bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
              Enviar Solicitação
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reimbursement;