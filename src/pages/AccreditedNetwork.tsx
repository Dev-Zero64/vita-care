import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AccreditedNetwork = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Rede Credenciada</h1>
        
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
                <label className="block text-sm font-medium mb-2">
                  Cidade
                </label>
                <Input type="text" placeholder="Digite a cidade" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Bairro
                </label>
                <Input type="text" placeholder="Digite o bairro" />
              </div>
            </div>
            <Button className="mt-4 w-full md:w-auto">
              <Search className="mr-2 h-4 w-4" /> Buscar
            </Button>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Hospital São Lucas</h3>
              <p className="text-gray-600 mb-2">
                Rua das Flores, 123 - Centro
              </p>
              <p className="text-gray-600 mb-2">São Paulo - SP</p>
              <p className="text-gray-600">Tel: (11) 3333-4444</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Clínica Santa Maria</h3>
              <p className="text-gray-600 mb-2">
                Av. Paulista, 1000 - Bela Vista
              </p>
              <p className="text-gray-600 mb-2">São Paulo - SP</p>
              <p className="text-gray-600">Tel: (11) 4444-5555</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Centro Médico Esperança
              </h3>
              <p className="text-gray-600 mb-2">
                Rua Augusta, 500 - Consolação
              </p>
              <p className="text-gray-600 mb-2">São Paulo - SP</p>
              <p className="text-gray-600">Tel: (11) 5555-6666</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Hospital Vida</h3>
              <p className="text-gray-600 mb-2">
                Av. Brasil, 789 - Jardins
              </p>
              <p className="text-gray-600 mb-2">São Paulo - SP</p>
              <p className="text-gray-600">Tel: (11) 6666-7777</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccreditedNetwork;