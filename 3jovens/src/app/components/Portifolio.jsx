"use client";
import { Link } from "react-scroll";

export default function Portfolio() {
  const projects = [
    {
      category: "PLATAFORMA DE CURSOS",
      title: "Cetma Educacional",
      image: "/cetma.png",
      link: "https://cetmaeducacional.com.br",
    },
    {
      category: "SITE INSTITUCIONAL",
      title: "Gamboa Ação",
      image: "/gamboa.png",
      link: "https://www.gamboaacao.org.br",
    },
    {
      category: "LANDING PAGE",
      title: "Dr. Lorrane Azevedo",
      image: "/lorrane.png",
      link: "https://lorraneazevedo.com",
    },
  ];

  return (
    <section id="portifolio" className="relative bg-black text-claro py-16 min-h-screen  overflow-hidden">
      {/* Linha decorativa de ponta a ponta */}
      <div className="absolute left-0 w-full z-10">
        <svg width="100%" height="50" viewBox="0 0 1920 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 25 L 600 25 L 800 0 L 1200 0 L 1400 25 L 1920 25" stroke="#7F4DFF" strokeWidth="3" fill="none" />
        </svg>
      </div>

      {/* Luzes animadas */}
      <div className="absolute top-[10%] left-[20%] w-[250px] h-[350px] bg-principal rounded-full blur-[100px] opacity-20 animate-pulseSlow pointer-events-none z-0 sm:w-[400px] sm:h-[500px]" />
      <div className="absolute top-[50%] right-[10%] w-[300px] h-[300px] bg-[#7F4DFF] rounded-full blur-[120px] opacity-20 animate-pulseMedium pointer-events-none z-0 sm:w-[500px] sm:h-[500px]" />
      <div className="absolute bottom-[10%] left-[50%] -translate-x-1/2 w-[350px] h-[250px] bg-principal rounded-full blur-[100px] opacity-20 animate-pulseFast pointer-events-none z-0 sm:w-[500px] sm:h-[400px]" />

      <div className="max-w-6xl mx-auto px-4 text-center relative z-20">
        <h3 className="text-principal font-semibold text-2xl mt-20 tracking-widest">PROJETOS</h3>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">Conheça nosso portfólio</h2>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-10 max-w-7xl mx-auto relative z-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-transparent rounded-lg overflow-hidden flex flex-col items-center pb-8 min-h-[500px] 
              border border-[#7F4DFF] transition duration-300 
              hover:border-principal hover:shadow-[0_0_50px_var(--tw-shadow-color)] 
              hover:shadow-principal"
          >
            {/* Texto */}
            <div className="w-full px-6 py-4 mb-4">
              <p className="text-principal text-md mb-2 uppercase font-semibold">
                {project.category}
              </p>
              <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>

            {/* Imagem com efeito escuro e revelação no hover */}
            <div className="relative w-full overflow-hidden flex-grow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition duration-500 ease-in-out brightness-50 hover:brightness-100"
              />
            </div>

            {/* Botão */}
            <div className="w-full flex justify-center mt-auto">
              <button
                onClick={() => window.open(project.link, "_blank")}
                className="btn w-[90%] mt-6 px-6 py-3 rounded-md transition duration-300 ease-in-out font-semibold 
                  hover:bg-principal focus:outline-none focus:ring-2 focus:ring-principal focus:ring-offset-2"
              >
                Visitar site
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Botão "Veja mais!" */}
      <div className="mt-10 flex justify-center">
        <Link
          to="formulario"
          smooth={true}
          duration={500}
          className="btn w-full max-w-xs bg-blue-500 mt-6 px-6 py-3 rounded-md transition duration-300 ease-in-out font-medium hover:bg-principal focus:outline-none focus:ring-2 focus:ring-principal focus:ring-offset-2">
          ENTRE EM CONTATO
        </Link>
      </div>
    </section>
  );
}
