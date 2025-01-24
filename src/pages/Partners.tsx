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
                src="https://media.istockphoto.com/id/1312706413/pt/foto/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=QtiuwaHxGTvb2Z7AqNo3YA--gkxojDXTzKvb87CzSFY="
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
                src="https://media.istockphoto.com/id/1354172647/pt/foto/medical-research-laboratory-portrait-of-a-beautiful-female-scientist-in-goggles-using-micro.jpg?s=612x612&w=0&k=20&c=pzNSkwIWkG7XNMsqyJ_COswfwxbz70CGa9fdwK79l-A="
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
                src="https://media.istockphoto.com/id/1319031310/pt/foto/doctor-writing-a-medical-prescription.jpg?s=612x612&w=0&k=20&c=_Eh9iQY19uLOaksMSlc-alskCFWpP5A-1Cce9P0PIwA="
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