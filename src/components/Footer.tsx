import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/planos" className="hover:text-accent">
                  Planos
                </Link>
              </li>
              <li>
                <Link to="/rede-credenciada" className="hover:text-accent">
                  Rede Credenciada
                </Link>
              </li>
              <li>
                <Link to="/noticias" className="hover:text-accent">
                  Notícias
                </Link>
              </li>
              <li>
                <Link to="/fale-conosco" className="hover:text-accent">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/reembolso" className="hover:text-accent">
                  Reembolso
                </Link>
              </li>
              <li>
                <Link to="/cancelamento" className="hover:text-accent">
                  Cancelamento
                </Link>
              </li>
              <li>
                <Link to="/ouvidoria" className="hover:text-accent">
                  Ouvidoria
                </Link>
              </li>
              <li>
                <Link to="/imposto-renda" className="hover:text-accent">
                  Imposto de Renda
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/compliance" className="hover:text-accent">
                  Compliance
                </Link>
              </li>
              <li>
                <Link to="/questionario-ans" className="hover:text-accent">
                  Questionário ANS
                </Link>
              </li>
              <li>
                <Link to="/prestadores-substituidos" className="hover:text-accent">
                  Prestadores Substituídos
                </Link>
              </li>
              <li>
                <Link to="/guia-tiss" className="hover:text-accent">
                  Guia TISS
                </Link>
              </li>
              <li>
                <Link to="/publicacoes" className="hover:text-accent">
                  Publicações
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-xl font-bold mb-4">0800 123 4567</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} VitaCare Saúde. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;