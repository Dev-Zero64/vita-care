import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Fale Conosco</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Envie sua mensagem</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nome completo
                  </label>
                  <Input type="text" placeholder="Digite seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    E-mail
                  </label>
                  <Input type="email" placeholder="Digite seu e-mail" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Telefone
                  </label>
                  <Input type="tel" placeholder="Digite seu telefone" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea placeholder="Digite sua mensagem" rows={4} />
                </div>
                <Button className="w-full">Enviar mensagem</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">
                  Outras formas de contato
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Central de Atendimento</p>
                      <p className="text-gray-600">0800 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">E-mail</p>
                      <p className="text-gray-600">contato@vitacare.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Endereço</p>
                      <p className="text-gray-600">
                        Av. Paulista, 1000 - Bela Vista
                        <br />
                        São Paulo - SP, 01310-100
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Horário de Atendimento</h2>
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