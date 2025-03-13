"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { FaStar } from "react-icons/fa";

const testimonials = [
    {
      name: "Adam Elias", // Cliente que teve uma experiência positiva com a 3 Jovens
      image: "./Logotipo.png", // Imagem do cliente, mostrando que ele confiou na empresa
      text: "A 3 Jovens transformou nossa comunicação digital! Desde o redesign do nosso site até o aumento da nossa presença nas redes sociais, tivemos um crescimento significativo. Eles são extremamente profissionais e criativos, superando nossas expectativas.", // Depoimento real sobre o impacto da 3 Jovens
      rating: 5, // Avaliação excelente, reforçando o impacto da 3 Jovens na satisfação do cliente
    },
    {
      name: "Lorrane Azevedo", // Outra cliente satisfeita com os serviços da 3 Jovens
      image: "./lorranee.png", // Imagem da cliente, indicando confiança na empresa
      text: "O trabalho da 3 Jovens foi fundamental para nossa estratégia digital. Eles entenderam exatamente o que precisávamos e entregaram resultados excepcionais. Graças a eles, conseguimos aumentar nosso engajamento nas redes sociais em mais de 40%!", // Depoimento enfatizando como a 3 Jovens ajudou a melhorar a presença digital dela
      rating: 5, // Avaliação máxima, o que indica um alto nível de satisfação
    },
    {
      name: "Tâmara Lustosa", // Cliente feliz com os resultados fornecidos pela 3 Jovens
      image: "./Logotipo.png", // Imagem da cliente, representando confiança nos serviços da empresa
      text: "Com a 3 Jovens, conseguimos alcançar mais pessoas e crescer nossa marca! O trabalho deles com o design e a criação de conteúdo realmente nos ajudou a nos destacar no mercado. Estamos muito satisfeitos com os resultados e continuaremos a parceria!", // Comentário positivo sobre o crescimento da marca com a ajuda da 3 Jovens
      rating: 5, // A avaliação máxima demonstra a qualidade do serviço prestado
    },
    {
      name: "Gamboa Ação", // Cliente que ficou satisfeito com o atendimento da 3 Jovens
      image: "./gmbe.png", // Imagem do cliente, reforçando a satisfação com a 3 Jovens
      text: "A 3 Jovens trouxe soluções inovadoras para nosso negócio, sempre atentos às nossas necessidades. A equipe é muito dedicada e criativa, e conseguimos ver uma grande diferença na qualidade do nosso site e nas conversões de vendas. Super recomendo!", // Depoimento sobre como a empresa atendeu bem suas necessidades com soluções inovadoras
      rating: 5, // Avaliação excelente, destacando a qualidade e inovação da 3 Jovens
    },
    {
      name: "Cetma Educacional", // Outro depoimento de um cliente satisfeito com a 3 Jovens
      image: "./Logotipo.png", // Imagem do cliente, evidenciando a credibilidade da empresa
      text: "A parceria com a 3 Jovens foi crucial para expandirmos nossas operações online. Eles nos ajudaram a criar uma plataforma robusta e fácil de usar, além de melhorar nosso marketing digital. O suporte que recebemos foi sempre ágil e eficiente.", // Depoimento ressaltando a importância da 3 Jovens na expansão dos negócios
      rating: 5, // Avaliação máxima, confirmando a qualidade do trabalho feito
    },
  ];
  
export default function TestimonialCarousel() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-black via-slate-950 to-black border-t-2 border-transparent py-12  text-white"
    style={{
        borderImage: 'linear-gradient(to right, #000000, #6121ff)',
        borderImageSlice: 1,
      }}>
      <span className="text-principal border border-principal rounded-full px-4 py-1 font-semibold text-2xl mt-4 tracking-widest">
        DEPOIMENTOS
      </span>
      <h2 className="text-3xl font-bold mt-6 text-center -mb-8">Veja o que estão falando da 3Jovens</h2>
      <div className="mt-8 w-full max-w-6xl p-8">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 2500, // Troca automática a cada 4 segundos (ajustado para milissegundos)
            disableOnInteraction: false, // Permite que o autoplay continue após interação do usuário
          }}
          loop={true} // Ativa o loop para que o carrossel rode em loop infinito
          pagination={{
            clickable: true,
            bulletClass: 'custom-pagination-bullet', // Classe personalizada para as bolinhas
            bulletActiveClass: 'custom-pagination-bullet-active', // Classe personalizada para as bolinhas ativas
          }}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col rounded-2xl shadow-xl py-10 w-full card mt-20">
                <div className="flex items-center px-10 gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-principal object-cover"
                  />
                  <div>
                    <p className="font-bold text-xl">{testimonial.name}</p>
                    <div className="flex text-principal mt-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <FaStar key={i} size={20} />
                      ))}
                    </div>
                  </div>
                </div>
                <hr className="my-4 border-principal w-full" />
                <p className="text-gray-400 text-base text-left px-10">{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        /* Estilo para as bolinhas */
        .custom-pagination-bullet {
          background-color: #6121ff; /* Cor das bolinhas */
        }

        /* Estilo para a bolinha ativa */
        .custom-pagination-bullet-active {
          background-color: #6121ff; /* Cor da bolinha ativa (substitua pela sua cor principal) */
        }
      `}</style>
    </div>
  );
}
