import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { providers } from "@/lib/providers";

// Componente reutilizável para exibir um prestador da rede credenciada
const ProviderCard = ({
  name,
  specialties,
  address,
  city,
  phone,
}: {
  name: string;
  specialties: string[];
  address: string;
  city: string;
  phone: string;
}) => {
  return (
    <Card className="transition-transform hover:scale-[1.02]">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <div>
          <h4 className="text-sm font-medium text-gray-600 mb-2">
            Especialidades:
          </h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary text-sm px-2 py-1 rounded"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-gray-600">{address}</p>
          <p className="text-gray-600">{city}</p>
          <p className="text-gray-600">Tel: {phone}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const AccreditedNetwork = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-primary mb-8">
          Rede Credenciada
        </h1>

        {/* Seção de busca */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Especialidade
                </label>
                <Input type="text" placeholder="Digite a especialidade" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Cidade</label>
                <Input type="text" placeholder="Digite a cidade" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Bairro</label>
                <Input type="text" placeholder="Digite o bairro" />
              </div>
            </div>
            <Button className="mt-4 w-full md:w-auto transition-all hover:bg-primary-dark">
              <Search className="mr-2 h-4 w-4" /> Buscar
            </Button>
          </CardContent>
        </Card>

        {/* Lista de prestadores */}
        <div className="grid md:grid-cols-2 gap-6">
          {providers.map((provider, index) => (
            <ProviderCard key={index} {...provider} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccreditedNetwork;
