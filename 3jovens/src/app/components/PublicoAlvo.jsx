import { BiBriefcase, BiBook, BiBuilding, BiCapsule } from "react-icons/bi";

const features = [
  { 
    icon: <BiBriefcase className="text-principal text-5xl drop-shadow-[0_0_10px_]" />, 
    title: "Autônomos", 
    description: "Se você é advogado, designer, médico, dentista, nutricionista ou atua de forma independente, uma plataforma profissional pode ampliar sua presença digital, atrair mais clientes e fortalecer sua autoridade no mercado." 
  },
  { 
    icon: <BiBook className="text-lime-400 text-5xl drop-shadow-[0_0_10px_#5CF559]" />, 
    title: "Infoprodutores", 
    description: "Para quem busca páginas de alta performance com design estratégico para impulsionar vendas e captar leads, seja para lançamentos ou estratégias de venda perpétua." 
  },
  { 
    icon: <BiBuilding className="text-[#7F4DFF] text-5xl drop-shadow-[0_0_10px_#7F4DFF]" />, 
    title: "Empresas e Negócios", 
    description: "Transforme sua empresa com uma plataforma digital robusta, otimizada para gerar mais visibilidade, fortalecer a marca e impulsionar as vendas no ambiente online." 
  },
  { 
    icon: <BiCapsule className="text-claro text-5xl drop-shadow-[0_0_10px_#9e9e9e]" />, 
    title: "E-commerce", 
    description: "Soluções personalizadas para quem vende produtos físicos ou digitais, garantindo uma experiência de compra otimizada e conversões elevadas." 
  },
];

export default function FeaturesSection() {
  return (
    <section id="publico-alvo" className="bg-black py-16 flex flex-col items-center justify-center">

      
      {/* Container principal */}
      <div className="container bg-gradient-to-t from-black via-slate-950 to-black py-20 card mx-auto px-6 flex flex-col items-center">
              {/* Título da Seção */}
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center leading-tight drop-shadow-lg">
        Para quem são nossas <span className="text-principal">soluções?</span>
      </h2>
        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-white w-full">
          {features.map((feature, index) => (
            <div key={index} className="card flex flex-col items-center text-left p-6 rounded-xl shadow-lg relative">
              <div className="selector flex items-center justify-center w-16 h-16 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400 text-center text-md">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Botão Centralizado */}
        <div className="mt-12">
          <button className="btn mt-6 px-6 py-3 rounded-md transition duration-300 ease-in-out font-semibold hover:bg-principal focus:outline-none focus:ring-2 focus:ring-principal focus:ring-offset-2">
            Solicite um orçamento!
          </button>
        </div>

      </div>
    </section>
  );
}
