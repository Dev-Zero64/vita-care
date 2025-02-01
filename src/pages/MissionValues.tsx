import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Componente reutilizável para exibir valores
const ValueItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-center space-x-2 transition-transform hover:translate-x-2">
      <span className="w-2 h-2 bg-primary rounded-full"></span>
      <span>{text}</span>
    </li>
  );
};

const MissionValues = () => {
  const values = [
    "Ética e transparência em todas as relações",
    "Inovação constante em processos e serviços",
    "Compromisso com a qualidade",
    "Responsabilidade social e ambiental",
    "Valorização das pessoas",
    "Foco no beneficiário",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary text-center mb-8">
          Missão e Valores
        </h1>

        {/* Missão e Visão */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="transition-transform hover:scale-[1.02]">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                Nossa Missão
              </h2>
              <p className="text-lg text-gray-700">
                Proporcionar acesso à saúde de qualidade, promovendo o bem-estar
                e a qualidade de vida dos nossos beneficiários através de um
                atendimento humanizado e soluções inovadoras.
              </p>
            </CardContent>
          </Card>
          <Card className="transition-transform hover:scale-[1.02]">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                Nossa Visão
              </h2>
              <p className="text-lg text-gray-700">
                Ser reconhecida como a operadora de saúde mais inovadora e
                humana do Brasil, referência em qualidade de atendimento e
                satisfação dos beneficiários.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Valores */}
        <Card className="mt-8 transition-transform hover:scale-[1.02]">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-primary">
              Nossos Valores
            </h2>
            <ul className="grid md:grid-cols-2 gap-4 text-lg">
              {values.map((value, index) => (
                <ValueItem key={index} text={value} />
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default MissionValues;
