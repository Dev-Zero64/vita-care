import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

// Componente reutilizável para listas de links
const FooterLinks = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string }[];
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map(({ label, to }, index) => (
          <li key={index}>
            <Link
              to={to}
              className="hover:text-accent transition-colors"
              aria-label={label}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Componente reutilizável para ícones de redes sociais
const SocialIcons = () => {
  const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ href, icon: Icon, label }, index) => (
        <a
          key={index}
          href={href}
          className="hover:text-accent transition-colors"
          aria-label={label}
        >
          <Icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
};

const Footer = () => {
  const navigationLinks = [
    { label: "Planos", to: "/planos" },
    { label: "Rede Credenciada", to: "/rede-credenciada" },
    { label: "Notícias", to: "/noticias" },
    { label: "Fale Conosco", to: "/fale-conosco" },
  ];

  const servicesLinks = [
    { label: "Reembolso", to: "/reembolso" },
    { label: "Cancelamento", to: "/cancelamento" },
    { label: "Ouvidoria", to: "/ouvidoria" },
    { label: "Imposto de Renda", to: "/imposto-de-renda" },
  ];

  const legalLinks = [
    { label: "Compliance", to: "/compliance" },
    { label: "Questionário ANS", to: "/questionario-ans" },
    { label: "Prestadores Substituídos", to: "/prestadores-substituidos" },
    { label: "Guia TISS", to: "/guia-tiss" },
    { label: "Publicações", to: "/publicacoes" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navegação */}
          <FooterLinks title="Navegação" links={navigationLinks} />

          {/* Serviços */}
          <FooterLinks title="Serviços" links={servicesLinks} />

          {/* Legal */}
          <FooterLinks title="Legal" links={legalLinks} />

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-xl font-bold mb-4">0800 123 4567</p>
            <SocialIcons />
          </div>
        </div>

        {/* Rodapé com direitos autorais */}
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
