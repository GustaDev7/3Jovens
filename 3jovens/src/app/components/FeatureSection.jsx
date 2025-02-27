import { FaLaptopCode, FaPaintBrush, FaThLarge, FaBolt, FaCommentDots, FaCheckCircle, FaSlidersH, FaCogs } from "react-icons/fa";

const features = [
  { icon: <FaLaptopCode className="text-principal text-5xl drop-shadow-[0_0_10px_]" />, title: "Sites Responsivos", description: "Sites que se adaptam perfeitamente ao tamanho da tela do computador, celular ou tablet." },
  { icon: <FaPaintBrush className="text-lime-400 text-5xl drop-shadow-[0_0_10px_#5CF559]" />, title: "User Experience", description: "Estratégias de UX/UI Design focadas em otimizar a experiência do usuário, melhorar a usabilidade, navegação e conversão." },
  { icon: <FaThLarge className="text-[#7F4DFF] text-5xl drop-shadow-[0_0_10px_#7F4DFF]" />, title: "Layout Personalizado", description: "O layout é exclusivo e desenvolvido por especialistas. Formas, cores, imagens, ícones. Tudo isso é pensado nos mínimos detalhes, especialmente para você." },
  { icon: <FaBolt className="text-claro text-5xl drop-shadow-[0_0_10px_#9e9e9e]" />, title: "Páginas Rápidas", description: "Carregamento das páginas de forma rápida para aumentar o número de conversões, através de otimização e servidor cloud de alta performance." },
  { icon: <FaCommentDots className="text-principal text-5xl drop-shadow-[0_0_10px_]" />, title: "Suporte Contínuo", description: "Conte com um time de especialistas para dar suporte às suas necessidades. Tudo isso feito sob-demanda, quando precisar." },
  { icon: <FaCheckCircle className="text-lime-400 text-5xl drop-shadow-[0_0_10px_#5CF559]" />, title: "Pronto para o Google", description: "Ao desenvolver o site, seguimos todas as diretrizes e critérios impostos pelo Google para que sua empresa apareça na maior rede de pesquisa." },
  { icon: <FaSlidersH className="text-[#6121ff] text-5xl drop-shadow-[0_0_10px_#7F4DFF]" />, title: "Personalização Total", description: "Desenvolvemos todos os sites de forma personalizada, layouts 100% exclusivos para a sua marca. Uma aparência moderna e profissional, para transmitir confiança a seus visitantes." },
  { icon: <FaCogs className="text-claro text-5xl drop-shadow-[0_0_10px_#9e9e9e]" />, title: "Integração", description: "Integramos com os principais CRM’s, ERP’s, sistemas e plataformas de pagamentos digitais, para automatizar seus processos e economizar tempo no fluxo de trabalho." }
];

export default function FeaturesSection() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
        {features.map((feature, index) => (
          <div key={index} className="card flex flex-col items-center text-left p-6 rounded-xl shadow-lg relative">
            <div className="selector flex items-center justify-center w-16 h-16 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-400 text-center text-md">{feature.description}</p>
            {/* Adicionando a borda com gradiente */}
            <div className=""></div>
          </div>
        ))}
      </div>
    </section>
  );
}
