import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Componente reutilizável para exibir um parceiro
const PartnerCard = ({
  imageSrc,
  altText,
  title,
  description,
}: {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}) => {
  return (
    <Card className="transition-transform hover:scale-[1.02]">
      <CardContent className="p-6 text-center space-y-4">
        <img
          src={imageSrc}
          alt={altText}
          className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-primary"
        />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const Partners = () => {
  const partners = [
    {
      imageSrc:
        "https://media.istockphoto.com/id/1312706413/pt/foto/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=QtiuwaHxGTvb2Z7AqNo3YA--gkxojDXTzKvb87CzSFY=",
      altText: "Hospital Parceiro",
      title: "Rede Hospitalar",
      description: "Parceria com os principais hospitais e clínicas do país",
    },
    {
      imageSrc:
        "https://media.istockphoto.com/id/1354172647/pt/foto/medical-research-laboratory-portrait-of-a-beautiful-female-scientist-in-goggles-using-micro.jpg?s=612x612&w=0&k=20&c=pzNSkwIWkG7XNMsqyJ_COswfwxbz70CGa9fdwK79l-A=",
      altText: "Laboratório Parceiro",
      title: "Laboratórios de Análises",
      description: "Rede completa de laboratórios para exames",
    },
    {
      imageSrc:
        "https://media.istockphoto.com/id/1319031310/pt/foto/doctor-writing-a-medical-prescription.jpg?s=612x612&w=0&k=20&c=_Eh9iQY19uLOaksMSlc-alskCFWpP5A-1Cce9P0PIwA=",
      altText: "Clínica Parceira",
      title: "Clínicas Especializadas",
      description: "Atendimento especializado em diversas áreas",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-primary mb-8">
          Nossos Parceiros
        </h1>

        {/* Lista de parceiros */}
        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
