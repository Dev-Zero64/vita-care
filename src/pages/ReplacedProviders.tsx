import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Componente reutilizável para exibir uma linha da tabela
const TableRow = ({
  previousProvider,
  newProvider,
  specialty,
  replacementDate,
}: {
  previousProvider: string;
  newProvider: string;
  specialty: string;
  replacementDate: string;
}) => {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">{previousProvider}</td>
      <td className="px-6 py-4 whitespace-nowrap">{newProvider}</td>
      <td className="px-6 py-4 whitespace-nowrap">{specialty}</td>
      <td className="px-6 py-4 whitespace-nowrap">{replacementDate}</td>
    </tr>
  );
};

const ReplacedProviders = () => {
  const providers = [
    {
      previousProvider: "Hospital Santa Clara",
      newProvider: "Hospital São Lucas",
      specialty: "Hospital Geral",
      replacementDate: "01/03/2024",
    },
    {
      previousProvider: "Clínica Vida",
      newProvider: "Centro Médico Saúde",
      specialty: "Clínica Médica",
      replacementDate: "15/02/2024",
    },
    {
      previousProvider: "Laboratório Central",
      newProvider: "Lab Diagnósticos",
      specialty: "Laboratório",
      replacementDate: "28/02/2024",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary text-center mb-6">
          Prestadores Substituídos
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <p className="text-gray-600">
            Confira abaixo a lista de prestadores que foram substituídos em
            nossa rede credenciada:
          </p>

          {/* Tabela responsiva */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Prestador Anterior
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Novo Prestador
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Especialidade
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Data da Substituição
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {providers.map((provider, index) => (
                  <TableRow key={index} {...provider} />
                ))}
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
