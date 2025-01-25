import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Compliance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Compliance</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">Programa de Compliance</h2>
              <p className="text-gray-600">
                O Programa de Compliance da VitaCare Saúde tem como objetivo garantir a conformidade com as leis e regulamentos do setor de saúde suplementar, promovendo a ética e a transparência em todas as nossas operações.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Canal de Denúncias</h2>
              <p className="text-gray-600 mb-4">
                Caso queira reportar alguma irregularidade ou violação do nosso código de ética, utilize nosso canal de denúncias:
              </p>
              <div className="space-y-4 max-w-md">
                <input
                  type="text"
                  placeholder="Assunto"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <textarea
                  placeholder="Descrição da denúncia"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md h-32"
                ></textarea>
                <button className="w-full bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
                  Enviar Denúncia
                </button>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Documentos</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Código de Ética e Conduta</li>
                <li>Política Anticorrupção</li>
                <li>Política de Conflito de Interesses</li>
                <li>Manual de Compliance</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Compliance;