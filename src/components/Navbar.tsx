import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const NavLink = ({
  to,
  children,
  onClick,
  className = "",
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <Link
      to={to}
      className={`block text-gray-600 hover:text-primary transition-colors whitespace-nowrap ${className}`}
      onClick={onClick}
      aria-label={typeof children === "string" ? children : undefined}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInstitutionalOpen, setIsInstitutionalOpen] = useState(false);

  const institutionalMenu = [
    { label: "Nossa História", to: "/nossa-historia" },
    { label: "Missão / Valores", to: "/missao-valores" },
    { label: "Trabalhe Aqui", to: "/trabalhe-conosco" },
    { label: "Parceiros", to: "/parceiros" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
    setIsInstitutionalOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-bold text-primary whitespace-nowrap"
          >
            VitaCare Saúde
          </Link>

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

          <div className="hidden md:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors whitespace-nowrap">
                <span>Institucional</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg">
                {institutionalMenu.map(({ label, to }, index) => (
                  <DropdownMenuItem key={index} className="w-full">
                    <NavLink to={to} className="px-4 py-2 w-full">
                      {label}
                    </NavLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <NavLink to="/planos">Planos</NavLink>
            <NavLink to="/rede-credenciada">Rede Credenciada</NavLink>
            <NavLink to="/noticias">Notícias</NavLink>
            <NavLink to="/fale-conosco">Fale Conosco</NavLink>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="py-2 space-y-1">
            <button
              onClick={() => setIsInstitutionalOpen(!isInstitutionalOpen)}
              className="flex items-center justify-between w-full px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
            >
              <span>Institucional</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isInstitutionalOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`${
                isInstitutionalOpen
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden transition-all duration-300 ease-in-out bg-gray-50`}
            >
              {institutionalMenu.map(({ label, to }, index) => (
                <NavLink
                  key={index}
                  to={to}
                  onClick={closeMenu}
                  className="px-4 py-2"
                >
                  {label}
                </NavLink>
              ))}
            </div>

            <NavLink to="/planos" onClick={closeMenu} className="px-4 py-2">
              Planos
            </NavLink>
            <NavLink
              to="/rede-credenciada"
              onClick={closeMenu}
              className="px-4 py-2"
            >
              Rede Credenciada
            </NavLink>
            <NavLink to="/noticias" onClick={closeMenu} className="px-4 py-2">
              Notícias
            </NavLink>
            <NavLink
              to="/fale-conosco"
              onClick={closeMenu}
              className="px-4 py-2"
            >
              Fale Conosco
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
