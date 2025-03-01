export default function HeroSection() {
  return (
    <section id="hero" className="relative flex flex-col items-center text-center bg-black min-h-screen text-claro px-6 py-16 overflow-hidden">
      
      {/* Luzes animadas */}
      <div className="absolute top-[10%] left-[50%] transform -translate-x-1/2 w-[500px] h-[600px] bg-principal rounded-full blur-[150px] opacity-[0.3] mix-blend-screen animate-luz pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[50%] transform -translate-x-1/2 w-[400px] h-[300px] bg-[#7F4DFF] rounded-full blur-[150px] opacity-[0.3] mix-blend-screen animate-luzDelay pointer-events-none z-0" />
      <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 w-[300px] h-[200px] bg-[#7F4DFF] rounded-full blur-[150px] opacity-[0.3] mix-blend-screen animate-luz pointer-events-none z-0" />
      <div className="absolute bottom-[5%] left-[50%] transform -translate-x-1/2 w-[400px] h-[300px] bg-[#7F4DFF] rounded-full blur-[150px] opacity-[0.3] mix-blend-screen animate-luzDelay pointer-events-none z-0" />

      {/* Imagem */}
      <div className="w-full max-w-lg z-10">
        <img 
          src="jovens.png" 
          alt="Jovens trabalhando" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Conteúdo */}
      <div className="max-w-2xl mt-10 z-10 space-y-6">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Soluções <span className="text-principal">Digitais</span> que <span className="text-principal">Impulsionam</span> Seu Negócio
        </h1>
        <p className="text-gray-400 leading-relaxed">
          Seja para criar uma landing page, lançar sua plataforma de cursos ou um e-commerce, temos a expertise para transformar suas ideias em soluções digitais sob medida.
        </p>
        <button className="btn mt-6 px-6 py-3 rounded-md w-full transition duration-300 ease-in-out font-semibold hover:bg-principal focus:outline-none focus:ring-2 focus:ring-principal focus:ring-offset-2">
            Fale Conosco e Saiba Mais!
        </button>
      </div>

    </section>
  );
}
