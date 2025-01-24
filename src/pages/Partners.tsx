import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Partners = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Parceiros</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <img
                src="/photo-1581092795360-fd1ca04f0952"
                alt="Hospital Parceiro"
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Rede Hospitalar</h3>
              <p className="text-gray-600">
                Parceria com os principais hospitais e clínicas do país
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <img
                src="/photo-1483058712412-4245e9b90334"
                alt="Laboratório Parceiro"
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">
                Laboratórios de Análises
              </h3>
              <p className="text-gray-600">
                Rede completa de laboratórios para exames
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <img
                src="/photo-1488590528505-98d2b5aba04b"
                alt="Clínica Parceira"
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Clínicas Especializadas</h3>
              <p className="text-gray-600">
                Atendimento especializado em diversas áreas
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;