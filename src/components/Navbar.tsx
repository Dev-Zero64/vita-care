import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

// Componente reutilizável para links de navegação
const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      to={to}
      className="text-gray-600 hover:text-primary transition-colors"
      aria-label={typeof children === "string" ? children : undefined}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Dados do menu institucional
  const institutionalMenu = [
    { label: "Nossa História", to: "/nossa-historia" },
    { label: "Missão / Valores", to: "/missao-valores" },
    { label: "Trabalhe Aqui", to: "/trabalhe-conosco" },
    { label: "Parceiros", to: "/parceiros" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Barra de navegação principal */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            VitaCare Saúde
          </Link>

          {/* Botão de menu mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label={`${isOpen ? "Fechar menu" : "Abrir menu"}`}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Dropdown Institucional */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors">
                <span>Institucional</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg">
                {institutionalMenu.map(({ label, to }, index) => (
                  <DropdownMenuItem key={index}>
                    <NavLink to={to}>{label}</NavLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Links principais */}
            <NavLink to="/planos">Planos</NavLink>
            <NavLink to="/rede-credenciada">Rede Credenciada</NavLink>
            <NavLink to="/noticias">Notícias</NavLink>
            <NavLink to="/fale-conosco">Fale Conosco</NavLink>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden py-4 space-y-4 animate-fade-in`}
        >
          <NavLink to="/institucional">Institucional</NavLink>
          <NavLink to="/planos">Planos</NavLink>
          <NavLink to="/rede-credenciada">Rede Credenciada</NavLink>
          <NavLink to="/noticias">Notícias</NavLink>
          <NavLink to="/fale-conosco">Fale Conosco</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
