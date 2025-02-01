import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Componente reutilizável para campos de entrada
const FormField = ({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder: string;
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {type === "textarea" ? (
        <Textarea placeholder={placeholder} rows={4} />
      ) : (
        <Input type={type} placeholder={placeholder} />
      )}
    </div>
  );
};

// Componente reutilizável para informações de contato
const ContactInfoItem = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.FC<any>;
  title: string;
  description: string | JSX.Element;
}) => {
  return (
    <div className="flex items-center space-x-3">
      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary text-center mb-8">Fale Conosco</h1>

        {/* Formulário e Informações de Contato */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulário de contato */}
          <Card className="transition-transform hover:scale-[1.02]">
            <CardContent className="p-6 space-y-6">
              <h2 className="text-2xl font-semibold text-primary">Envie sua mensagem</h2>
              <form className="space-y-4">
                <FormField label="Nome completo" placeholder="Digite seu nome" />
                <FormField label="E-mail" type="email" placeholder="Digite seu e-mail" />
                <FormField label="Telefone" type="tel" placeholder="Digite seu telefone" />
                <FormField label="Mensagem" type="textarea" placeholder="Digite sua mensagem" />
                <Button
                  className="w-full bg-primary hover:bg-primary-dark transition-colors"
                  aria-label="Enviar mensagem"
                >
                  Enviar mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de contato e horários */}
          <div className="space-y-6">
            {/* Outras formas de contato */}
            <Card className="transition-transform hover:scale-[1.02]">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-2xl font-semibold text-primary">Outras formas de contato</h2>
                <div className="space-y-4">
                  <ContactInfoItem
                    icon={Phone}
                    title="Central de Atendimento"
                    description="0800 123 4567"
                  />
                  <ContactInfoItem
                    icon={Mail}
                    title="E-mail"
                    description="contato@vitacare.com.br"
                  />
                  <ContactInfoItem
                    icon={MapPin}
                    title="Endereço"
                    description={
                      <>
                        Av. Paulista, 1000 - Bela Vista
                        <br />
                        São Paulo - SP, 01310-100
                      </>
                    }
                  />
                </div>
              </CardContent>
            </Card>

            {/* Horário de atendimento */}
            <Card className="transition-transform hover:scale-[1.02]">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-primary">Horário de Atendimento</h2>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Segunda a Sexta:</span>
                    <br />
                    08h às 18h
                  </p>
                  <p>
                    <span className="font-medium">Sábado:</span>
                    <br />
                    09h às 13h
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;