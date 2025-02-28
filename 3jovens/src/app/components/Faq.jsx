"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  { question: "Quais tipos de sites a 3Jovens desenvolve?", answer: "Desenvolvo landing pages, sites institucionais, plataformas de cursos, e-commerces e outras soluções personalizadas." },
  { question: "A 3Jovens oferece suporte após a entrega do site?", answer: "Sim, ofereço suporte contínuo para garantir que seu site funcione corretamente e possa ser atualizado conforme necessário." },
  { question: "Como funciona o processo de desenvolvimento?", answer: "Realizo reuniões quinzenais com os clientes para alinhar expectativas, apresentar avanços e garantir que o projeto atenda às necessidades." },
  { question: "Quais tecnologias a 3Jovens utiliza?", answer: "Trabalho com tecnologias modernas como React, Next.js, Tailwind CSS, Node.js, MySQL e outras, dependendo da necessidade do projeto." },
  { question: "Quais são as formas de pagamento aceitas?", answer: "Aceitamos pagamentos via Pix, transferência bancária e boleto. Para projetos maiores, oferec parcelamento conforme negociação." },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="relative py-16 sm:py-24 lg:py-48 flex items-center justify-center border-t-2 border-transparent h-screen px-6 sm:px-12 lg:px-24 mx-auto"
      style={{
        borderImage: 'linear-gradient(to left, #000000, #6121ff)',
        borderImageSlice: 1,
      }}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-gray-950"></div>
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-[3px]">
        {[...Array(144)].map((_, i) => (
          <div key={i} className="bg-black opacity-30 w-full h-full"></div>
        ))}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      {/* Content */}
      <div className="relative max-w-7xl w-full flex flex-col lg:flex-row items-start gap-8">
        {/* Título e Descrição (Esquerda em telas grandes) */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-principal mb-4">
            FAQ
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-claro font-bold mb-4">
            Perguntas <br /> Frequentes
          </h2>
          <div className="w-2/3 sm:w-1/2 lg:w-2/3 border-b-2 border-principal mx-auto lg:mx-0"></div>
        </div>
        
        {/* Perguntas e Respostas */}
        <div className="w-full lg:w-2/3 space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b text-lg border-principal rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex justify-between items-center p-4 text-left transition-colors rounded-lg ${openIndex === index ? "text-principal" : "text-gray-400"}`}
              >
                <span className="font-semibold">{item.question}</span>
                <FiChevronDown
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180 text-principal" : "rotate-0 text-gray-400"}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 text-gray-300">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
