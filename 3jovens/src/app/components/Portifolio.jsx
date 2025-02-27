"use client";

export default function Portfolio() {
  const projects = [
    {
      category: "PLATAFORMA DE CURSOS",
      title: "Construtora Hogrefe",
      image: "/cetma.png",
      link: "#",
    },
    {
      category: "SITE INSTITUCIONAL",
      title: "Lj Santos",
      image: "/gamboa.png",
      link: "#",
    },
    {
      category: "LANDING PAGE",
      title: "Dr. Victor Mauro",
      image: "/lorrane.png",
      link: "#",
    },
  ];

  return (
    <section className="relative bg-black text-claro py-16">
      {/* Linha decorativa de ponta a ponta */}
      <div className="absolute left-0 w-full z-10">
        <svg width="100%" height="50" viewBox="0 0 1920 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 25 L 600 25 L 800 0 L 1200 0 L 1400 25 L 1920 25" stroke="#7F4DFF" strokeWidth="3" fill="none" />
        </svg>
      </div>
         {/* Luzes animadas */}
  <div className="absolute top-[15%] right-[calc(50%-800px)] w-[500px] h-[600px] bg-principal rounded-full blur-[150px] opacity-[0.3] mix-blend-screen animate-luz pointer-events-none z-0" />
  <div className="absolute top-[60%] right-[calc(50%-400px)] w-[10000px] h-[300px] bg-[#7F4DFF] rounded-full blur-[150px] opacity-[0.3] mix-blend-screen animate-luzDelay pointer-events-none z-0" />
  <div className="absolute top-[15%] left-[calc(50%-800px)] w-[500px] h-[600px] bg-principal rounded-full blur-[150px] opacity-[0.3] mix-blend-screen animate-luz pointer-events-none z-0" />
      <div className="max-w-6xl mx-auto px-4 text-center relative z-20">
        <h3 className="text-principal font-semibold text-2xl mt-20 tracking-widest">PROJETOS</h3>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">Conheça nosso portfólio</h2>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto relative z-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-transparent rounded-lg overflow-hidden flex flex-col items-center pb-8 min-h-[500px] 
              border border-gray-600 transition duration-300 
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
                className="btn w-[90%] bg-blue-500 mt-6 px-6 py-3 rounded-md transition duration-300 ease-in-out font-semibold 
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
        <button className="btn w-full max-w-xs bg-blue-500 mt-6 px-6 py-3 rounded-md transition duration-300 ease-in-out font-medium hover:bg-principal focus:outline-none focus:ring-2 focus:ring-principal focus:ring-offset-2">
          ENTRE EM CONTATO
        </button>
      </div>
    </section>
  );
}
