
export default function HeroSection() {
  return (
    <section className="relative flex flex-col xl:flex-row items-center justify-between bg-black min-h-screen text-claro xl:px-40 px-10 py-10 overflow-hidden">
      {/* Luzes animadas */}
      <div className="absolute top-[15%] right-[calc(50%-800px)] w-[500px] h-[600px] bg-principal rounded-full blur-[150px] opacity-[0.3] mix-blend-screen animate-luz pointer-events-none z-0" />
      <div className="absolute top-[60%] right-[calc(50%-400px)] w-[10000px] h-[300px] bg-[#7F4DFF] rounded-full blur-[150px] opacity-[0.3] mix-blend-screen animate-luzDelay pointer-events-none z-0" />

      {/* Conteúdo */}
      <div className="max-w-lg z-10 space-y-6 xl:w-1/2">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Soluções <span className="text-principal">Digitais</span> que <span className="text-principal">Impulsionam</span> Seu Negócio
        </h1>
        <p className="text-gray-400 leading-relaxed">
            Seja para criar uma landing page, lançar sua plataforma de cursos ou um e-commerce, temos a expertise para transformar suas ideias em soluções digitais sob medida.
        </p>
        <button className="btn mt-6 px-6 py-3 rounded-md transition duration-300 ease-in-out font-semibold hover:bg-principal focus:outline-none focus:ring-2 focus:ring-principal focus:ring-offset-2">
            Fale Conosco e Saiba Mais!
        </button>
      </div>

      {/* Imagem */}
      <div className="xl:w-1/2 xl:block mt-8 xl:mt-0 z-10">
        <img 
          src="teste.png" 
          alt="Sua Foto" 
          className="w-full h-full object-cover" 
        />
      </div>
    </section>
  );
}
