import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Ombudsman = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Ouvidoria</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mb-6">
            A Ouvidoria é um canal de comunicação entre você e a VitaCare Saúde.
            Estamos aqui para ouvir suas sugestões, reclamações ou elogios.
          </p>
          <div className="space-y-4 max-w-md">
            <input
              type="text"
              placeholder="Nome completo"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
              <option value="">Tipo de manifestação</option>
              <option value="reclamacao">Reclamação</option>
              <option value="sugestao">Sugestão</option>
              <option value="elogio">Elogio</option>
              <option value="denuncia">Denúncia</option>
            </select>
            <textarea
              placeholder="Mensagem"
              className="w-full px-4 py-2 border border-gray-300 rounded-md h-32"
            ></textarea>
            <button className="w-full bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
              Enviar Mensagem
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Ombudsman;
