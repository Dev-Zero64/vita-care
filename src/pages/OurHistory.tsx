import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OurHistory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Nossa História</h1>
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/photo-1527576539890-dfa815648363"
                  alt="VitaCare Saúde História"
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="space-y-4">
                <p className="text-lg">
                  Fundada em 1995, a VitaCare Saúde nasceu com a missão de
                  revolucionar o mercado de saúde suplementar no Brasil. Nossa
                  jornada começou com um pequeno escritório e uma equipe dedicada
                  de profissionais comprometidos com o bem-estar dos nossos
                  beneficiários.
                </p>
                <p className="text-lg">
                  Ao longo dos anos, expandimos nossa presença para todo o
                  território nacional, sempre mantendo o compromisso com a
                  qualidade e a humanização do atendimento. Hoje, somos
                  reconhecidos como uma das operadoras mais inovadoras do mercado.
                </p>
                <p className="text-lg">
                  Nossa trajetória é marcada por importantes conquistas e pelo
                  desenvolvimento constante de soluções que facilitam o acesso à
                  saúde de qualidade para milhares de famílias brasileiras.
                </p>
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