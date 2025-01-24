import { FileText, Building2, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const ActionButtons = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link
          to="/segunda-via"
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <FileText className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Segunda Via do Boleto</h3>
          <p className="text-gray-600 text-center">
            Acesse a segunda via do seu boleto de forma rápida e segura
          </p>
        </Link>

        <Link
          to="/rede-credenciada"
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <Building2 className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Rede Credenciada</h3>
          <p className="text-gray-600 text-center">
            Encontre hospitais, clínicas e médicos próximos a você
          </p>
        </Link>

        <Link
          to="/simule-seu-plano"
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <Calculator className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Simule seu Plano</h3>
          <p className="text-gray-600 text-center">
            Descubra o plano ideal para você e sua família
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ActionButtons;