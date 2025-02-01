import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Componente reutilizável para exibir blocos de texto
const TextBlock = ({ text }: { text: string }) => {
  return <p className="text-lg text-gray-700">{text}</p>;
};

const OurHistory = () => {
  const historyTexts = [
    "Fundada em 1995, a VitaCare Saúde nasceu com a missão de revolucionar o mercado de saúde suplementar no Brasil. Nossa jornada começou com um pequeno escritório e uma equipe dedicada de profissionais comprometidos com o bem-estar dos nossos beneficiários.",
    "Ao longo dos anos, expandimos nossa presença para todo o território nacional, sempre mantendo o compromisso com a qualidade e a humanização do atendimento. Hoje, somos reconhecidos como uma das operadoras mais inovadoras do mercado.",
    "Nossa trajetória é marcada por importantes conquistas e pelo desenvolvimento constante de soluções que facilitam o acesso à saúde de qualidade para milhares de famílias brasileiras.",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary text-center mb-8">
          Nossa História
        </h1>
        <Card className="transition-transform hover:scale-[1.02]">
          <CardContent className="p-6 space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Imagem */}
              <div>
                <img
                  src="https://media.istockphoto.com/id/1473559425/pt/foto/female-medical-practitioner-reassuring-a-patient.jpg?s=612x612&w=0&k=20&c=w-71weobkyo_Tc-CNNugxwuhZm_ZpVgqGmyg25DIkBc="
                  alt="VitaCare Saúde História"
                  className="rounded-lg w-full h-auto object-cover transition-transform hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Textos descritivos */}
              <div className="space-y-4">
                {historyTexts.map((text, index) => (
                  <TextBlock key={index} text={text} />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default OurHistory;
