import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MissionValues = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Missão e Valores</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Nossa Missão</h2>
              <p className="text-lg">
                Proporcionar acesso à saúde de qualidade, promovendo o bem-estar e
                a qualidade de vida dos nossos beneficiários através de um
                atendimento humanizado e soluções inovadoras.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Nossa Visão</h2>
              <p className="text-lg">
                Ser reconhecida como a operadora de saúde mais inovadora e humana
                do Brasil, referência em qualidade de atendimento e satisfação dos
                beneficiários.
              </p>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Nossos Valores</h2>
            <ul className="grid md:grid-cols-2 gap-4 text-lg">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Ética e transparência em todas as relações</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Inovação constante em processos e serviços</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Compromisso com a qualidade</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Responsabilidade social e ambiental</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Valorização das pessoas</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Foco no beneficiário</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default MissionValues;