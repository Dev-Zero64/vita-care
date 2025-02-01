import { Shield } from "lucide-react";

// Componente reutilizável para exibir texto com estilo consistente
const TextBlock = ({
  title,
  description,
}: {
  title: string;
  description: string | JSX.Element;
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Imagem com ícone flutuante */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133"
              alt="Equipe médica VitaCare"
              className="rounded-lg shadow-lg w-full h-auto object-cover transition-transform hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-4 rounded-lg shadow-lg hidden md:block">
              <Shield className="h-12 w-12 text-white" aria-hidden="true" />
            </div>
          </div>

          {/* Texto descritivo */}
          <div className="space-y-6">
            <TextBlock
              title="Cuidando da sua saúde há mais de 20 anos"
              description={
                <>
                  A VitaCare Saúde nasceu com o propósito de oferecer um
                  atendimento humanizado e de qualidade. Nossa rede credenciada
                  conta com os melhores profissionais e instituições de saúde,
                  garantindo tranquilidade e bem-estar para você e sua família.
                </>
              }
            />
            <TextBlock
              title="Planos flexíveis e ampla cobertura"
              description={
                <>
                  Com planos flexíveis e uma ampla cobertura, estamos sempre
                  próximos quando você mais precisa. Nossa equipe está
                  comprometida em proporcionar o melhor atendimento, com
                  agilidade e eficiência.
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
