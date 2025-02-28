import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 to-black text-white py-16 overflow-hidden">
      {/* Luzes animadas */}
      <div className="absolute top-[10%] left-[20%] w-[250px] h-[350px] bg-principal rounded-full blur-[100px] opacity-20 animate-pulseSlow pointer-events-none z-0 sm:w-[400px] sm:h-[500px]" />
      <div className="absolute top-[50%] right-[10%] w-[300px] h-[300px] bg-[#7F4DFF] rounded-full blur-[120px] opacity-20 animate-pulseMedium pointer-events-none z-0 sm:w-[500px] sm:h-[500px]" />
      <div className="absolute bottom-[10%] left-[50%] -translate-x-1/2 w-[350px] h-[250px] bg-principal rounded-full blur-[100px] opacity-20 animate-pulseFast pointer-events-none z-0 sm:w-[500px] sm:h-[400px]" />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left relative z-10">
        {/* Seção de Logo e Descrição */}
        <div className="border-b border-gray-700 pb-6 md:border-none md:pb-0 "
              style={{
                borderImage: 'linear-gradient(to left, #7F4DFF, #6121ff)',
                borderImageSlice: 1,
              }}>
          <div className="pb-6 md:pb-0 md:pr-6">
          <img
                src="/jovens.png"  // Caminho da imagem
                alt="Logo"
                className="mx-auto md:mx-0 w-auto h-auto max-w-[200px] sm:max-w-[200px] lg:max-w-[200px]" // Classes do Tailwind para controle de tamanho
                />
          </div>
        </div>

        {/* Seção de Links */}
        <div className="border-b border-gray-700 pb-6 md:border-none md:pb-0" 
              style={{
                borderImage: 'linear-gradient(to left, #7F4DFF, #6121ff)',
                borderImageSlice: 1,
              }}>
          <h2 className="text-2xl text-claro font-semibold mb-6">Navegação</h2>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#" className="hover:text-principal transition duration-300">Home</a></li>
            <li><a href="#" className="hover:text-principal transition duration-300">Serviços</a></li>
            <li><a href="#" className="hover:text-principal transition duration-300">Sobre</a></li>
            <li><a href="#" className="hover:text-principal transition duration-300">Contato</a></li>
          </ul>
        </div>

        {/* Seção de Redes Sociais */}
        <div>
          <h2 className="text-2xl font-semibold text-claro mb-6">Conecte-se Conosco</h2>
          <div className="flex justify-center md:justify-start gap-6">
            <a href="#" className="text-2xl text-pink-500 hover:text-white transition duration-300 transform hover:scale-110">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl text-blue-600 hover:text-white transition duration-300 transform hover:scale-110">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl text-blue-500 hover:text-white transition duration-300 transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="#" className="text-2xl text-green-500 hover:text-white transition duration-300 transform hover:scale-110">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Linha Divisória Iluminada */}
      <div
      id="formulario"
      className="relative  border-t border-transparent mt-12 mx-6 pt-6 text-center text-gray-500 text-sm z-10 "
      style={{
        borderImage: 'linear-gradient(to left, #7F4DFF, #6121ff)',
        borderImageSlice: 1,
      }}
    >
        &copy; 2025 Seu Site. Todos os direitos reservados.
      </div>
    </footer>
  );
}
