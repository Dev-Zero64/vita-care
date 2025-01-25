import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ReplacedProviders = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Prestadores Substituídos</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mb-6">
            Confira abaixo a lista de prestadores que foram substituídos em nossa rede credenciada:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prestador Anterior
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Novo Prestador
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Especialidade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Data da Substituição
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Hospital Santa Clara</td>
                  <td className="px-6 py-4 whitespace-nowrap">Hospital São Lucas</td>
                  <td className="px-6 py-4 whitespace-nowrap">Hospital Geral</td>
                  <td className="px-6 py-4 whitespace-nowrap">01/03/2024</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Clínica Vida</td>
                  <td className="px-6 py-4 whitespace-nowrap">Centro Médico Saúde</td>
                  <td className="px-6 py-4 whitespace-nowrap">Clínica Médica</td>
                  <td className="px-6 py-4 whitespace-nowrap">15/02/2024</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Laboratório Central</td>
                  <td className="px-6 py-4 whitespace-nowrap">Lab Diagnósticos</td>
                  <td className="px-6 py-4 whitespace-nowrap">Laboratório</td>
                  <td className="px-6 py-4 whitespace-nowrap">28/02/2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReplacedProviders;