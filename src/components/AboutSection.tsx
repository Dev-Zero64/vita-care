import { Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133"
              alt="Equipe médica VitaCare"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-4 rounded-lg shadow-lg hidden md:block">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Cuidando da sua saúde há mais de 20 anos
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              A VitaCare Saúde nasceu com o propósito de oferecer um atendimento
              humanizado e de qualidade. Nossa rede credenciada conta com os
              melhores profissionais e instituições de saúde, garantindo
              tranquilidade e bem-estar para você e sua família.
            </p>
            <p className="text-gray-600 text-lg">
              Com planos flexíveis e uma ampla cobertura, estamos sempre próximos
              quando você mais precisa. Nossa equipe está comprometida em
              proporcionar o melhor atendimento, com agilidade e eficiência.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;