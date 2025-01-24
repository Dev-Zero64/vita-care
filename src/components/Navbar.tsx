import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            VitaCare Saúde
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
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

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-600 hover:text-primary">
                <span>Institucional</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem>
                  <Link to="/nossa-historia" className="w-full">
                    Nossa História
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/missao-valores" className="w-full">
                    Missão / Valores
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/trabalhe-conosco" className="w-full">
                    Trabalhe Aqui
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/parceiros" className="w-full">
                    Parceiros
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/planos" className="text-gray-600 hover:text-primary">
              Planos
            </Link>
            <Link
              to="/rede-credenciada"
              className="text-gray-600 hover:text-primary"
            >
              Rede Credenciada
            </Link>
            <Link to="/noticias" className="text-gray-600 hover:text-primary">
              Notícias
            </Link>
            <Link
              to="/fale-conosco"
              className="text-gray-600 hover:text-primary"
            >
              Fale Conosco
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden py-4 space-y-4 animate-fade-in`}
        >
          <Link
            to="/institucional"
            className="block text-gray-600 hover:text-primary"
          >
            Institucional
          </Link>
          <Link to="/planos" className="block text-gray-600 hover:text-primary">
            Planos
          </Link>
          <Link
            to="/rede-credenciada"
            className="block text-gray-600 hover:text-primary"
          >
            Rede Credenciada
          </Link>
          <Link
            to="/noticias"
            className="block text-gray-600 hover:text-primary"
          >
            Notícias
          </Link>
          <Link
            to="/fale-conosco"
            className="block text-gray-600 hover:text-primary"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;