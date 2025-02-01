import { FileText, Building2, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

// Componente reutilizável para cada botão de ação
const ActionButton = ({
  to,
  icon: Icon,
  title,
  description,
}: {
  to: string;
  icon: React.FC<any>;
  title: string;
  description: string;
}) => {
  return (
    <Link
      to={to}
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      aria-label={title}
    >
      <Icon className="h-12 w-12 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </Link>
  );
};

const ActionButtons = () => {
  const actions = [
    {
      to: "/segunda-via",
      icon: FileText,
      title: "Segunda Via do Boleto",
      description:
        "Acesse a segunda via do seu boleto de forma rápida e segura",
    },
    {
      to: "/rede-credenciada",
      icon: Building2,
      title: "Rede Credenciada",
      description: "Encontre hospitais, clínicas e médicos próximos a você",
    },
    {
      to: "/simular-plano",
      icon: Calculator,
      title: "Simule seu Plano",
      description: "Descubra o plano ideal para você e sua família",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {actions.map((action, index) => (
          <ActionButton key={index} {...action} />
        ))}
      </div>
    </div>
  );
};

export default ActionButtons;
