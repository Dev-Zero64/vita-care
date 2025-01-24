import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WorkWithUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Trabalhe Conosco</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Faça Parte do Nosso Time
              </h2>
              <p className="text-lg mb-4">
                Na VitaCare Saúde, acreditamos que nossos colaboradores são a chave
                para o sucesso. Buscamos profissionais apaixonados, inovadores e
                comprometidos com a excelência no atendimento à saúde.
              </p>
              <p className="text-lg mb-6">
                Oferecemos um ambiente de trabalho dinâmico, oportunidades de
                crescimento e benefícios competitivos.
              </p>
              <Button className="w-full md:w-auto">
                Cadastre seu currículo
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Benefícios</h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Plano de saúde</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Plano odontológico</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Vale refeição/alimentação</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Seguro de vida</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Auxílio creche</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Programa de desenvolvimento profissional</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkWithUs;