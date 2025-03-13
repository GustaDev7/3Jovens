"use client";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Impede a rolagem quando o menu estiver aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#010101]/80 backdrop-blur-md shadow-lg py- z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-principal">3 Jovens</h1>

        {/* Ícone do Menu */}
        <button
          className="lg:hidden text-claro"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex gap-6 text-base">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                className="text-principal hover:text-[#7F4DFF] cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu Mobile */}
      <div
        className={`fixed top-0 right-0 w-full h-auto bg-[#010101]/80 backdrop-blur-md shadow-md flex flex-col items-center p-6 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Botão de Fechar dentro do menu */}
        <button
          className="absolute top-4 right-4 text-claro"
          onClick={() => setMenuOpen(false)}
        >
          <AiOutlineClose size={28} />
        </button>

        <ul className="flex flex-col items-center gap-6 mt-10">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                className="text-lg text-principal hover:text-[#7F4DFF] cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

const menuItems = [
  { name: "Início", href: "hero" },
  { name: "Recursos", href: "features" },
  { name: "Portfólio", href: "portifolio" },
  { name: "Público-Alvo", href: "publico-alvo" },
  { name: "Contato", href: "formulario" },
];
