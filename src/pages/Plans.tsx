import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { plans } from "@/lib/plans";

// Componente reutilizável para um plano
const PlanCard = ({
  title,
  price,
  features,
  buttonText,
  isHighlighted = false,
}: {
  title: string;
  price: number;
  features: string[];
  buttonText: string;
  isHighlighted?: boolean;
}) => {
  return (
    <Card
      className={`${
        isHighlighted ? "border-primary shadow-lg" : ""
      } transition-transform hover:scale-105`}
    >
      <CardHeader>
        <CardTitle
          className={`text-2xl text-center ${
            isHighlighted ? "text-primary" : ""
          }`}
        >
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <span className="text-4xl font-bold">R$ {price}</span>
          <span className="text-gray-600">/mês</span>
        </div>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          className={`w-full mt-6 ${
            isHighlighted ? "bg-primary hover:bg-primary-dark" : ""
          }`}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

const Plans = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Nossos Planos</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Plans;
