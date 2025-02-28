import { FaLaptopCode, FaCartPlus, FaUsers, FaHeadset, FaCalendarCheck, FaCheckCircle, FaSlidersH, FaImage } from "react-icons/fa";

const features = [
  { icon: <FaLaptopCode className="text-principal text-5xl drop-shadow-[0_0_10px_]" />, title: "Sites Responsivos", description: "Desenvolvemos sites que se adaptam perfeitamente a qualquer dispositivo, garantindo uma experiência incrível para os usuários." },
  { icon: <FaCartPlus className="text-lime-400 text-5xl drop-shadow-[0_0_10px_#5CF559]" />, title: "Sites Personalizado", description: "Criamos lojas virtuais com design atrativo, funcionalidades avançadas e integração com plataformas de pagamento." },
  { icon: <FaUsers className="text-[#7F4DFF] text-5xl drop-shadow-[0_0_10px_#7F4DFF]" />, title: "Suporte ao Cliente", description: "Nosso time está sempre disponível para oferecer suporte contínuo e solucionar qualquer dúvida ou problema." },
  { icon: <FaHeadset className="text-claro text-5xl drop-shadow-[0_0_10px_#7F4DFF]" />, title: "Reuniões Semanais", description: "Realizamos reuniões semanais para garantir o progresso do projeto, entender suas necessidades e alinhar expectativas." },
  { icon: <FaCalendarCheck className="text-principal text-5xl drop-shadow-[0_0_10px_]" />, title: "Alta Qualidade", description: "Cada página é projetada com foco em performance, usabilidade e design moderno para garantir uma navegação impecável." },
  { icon: <FaCheckCircle className="text-lime-400 text-5xl drop-shadow-[0_0_10px_#5CF559]" />, title: "Layout Exclusivo", description: "Criamos layouts únicos e personalizados para cada cliente, garantindo uma identidade visual autêntica e marcante." },
  { icon: <FaSlidersH className="text-[#6121ff] text-5xl drop-shadow-[0_0_10px_#7F4DFF]" />, title: "Customização Completa", description: "Oferecemos total liberdade para personalizar todas as funcionalidades e design do seu site, de acordo com suas preferências." },
  { icon: <FaImage className="text-claro text-5xl drop-shadow-[0_0_10px_#7F4DFF]" />, title: "Imagens Personalizadas", description: "Criamos imagens exclusivas para o seu site, proporcionando uma identidade visual única e impactante para sua marca." },
];

export default function FeaturesSection() {
  return (
    <section className="bg-black py-16 flex flex-col items-center justify-center">
      {/* Título da Seção */}
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center leading-tight drop-shadow-lg">
        Por Que Escolher Nossos <span className="text-principal">Serviços?</span>
      </h2>
      
      <div className="container mx-auto px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
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
    </section>
  );
}
