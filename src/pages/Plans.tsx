import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Plans = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Nossos Planos</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Essencial</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">R$ 199</span>
                <span className="text-gray-600">/mês</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Consultas em clínicas básicas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Exames laboratoriais básicos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Urgência e emergência</span>
                </li>
              </ul>
              <Button className="w-full mt-6">Contratar</Button>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Plus</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">R$ 399</span>
                <span className="text-gray-600">/mês</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Todas as coberturas do Essencial</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Especialidades médicas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Exames de imagem</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Fisioterapia</span>
                </li>
              </ul>
              <Button className="w-full mt-6">Contratar</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Premium</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">R$ 699</span>
                <span className="text-gray-600">/mês</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Todas as coberturas do Plus</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Rede hospitalar premium</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Sem coparticipação</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Reembolso ampliado</span>
                </li>
              </ul>
              <Button className="w-full mt-6">Contratar</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Plans;