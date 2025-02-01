import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Componente reutilizável para listas com ícones
const BenefitsList = ({ items }: { items: string[] }) => {
  return (
    <ul className="space-y-3 text-lg">
      {items.map((item, index) => (
        <li key={index} className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

const WorkWithUs = () => {
  const benefits = [
    "Plano de saúde",
    "Plano odontológico",
    "Vale refeição/alimentação",
    "Seguro de vida",
    "Auxílio creche",
    "Programa de desenvolvimento profissional",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Trabalhe Conosco
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Seção 1: Faça parte do nosso time */}
          <Card className="transition-transform hover:scale-105">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Faça Parte do Nosso Time
              </h2>
              <p className="text-lg mb-4">
                Na VitaCare Saúde, acreditamos que nossos colaboradores são a
                chave para o sucesso. Buscamos profissionais apaixonados,
                inovadores e comprometidos com a excelência no atendimento à
                saúde.
              </p>
              <p className="text-lg mb-6">
                Oferecemos um ambiente de trabalho dinâmico, oportunidades de
                crescimento e benefícios competitivos.
              </p>
              <Button
                className="w-full md:w-auto transition-all hover:bg-primary-dark"
                aria-label="Cadastre seu currículo"
              >
                Cadastre seu currículo
              </Button>
            </CardContent>
          </Card>

          {/* Seção 2: Benefícios */}
          <Card className="transition-transform hover:scale-105">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Benefícios
              </h2>
              <BenefitsList items={benefits} />
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkWithUs;
