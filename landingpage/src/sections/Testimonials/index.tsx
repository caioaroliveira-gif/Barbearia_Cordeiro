import { useState, useEffect } from "react";
import { TbStarFilled } from "react-icons/tb";

export default function Testimonials() {
  // 1. Nosso banco de dados (Array) de depoimentos
  const reviews = [
    {
      id: 1,
      quote: '"Troquei de barbearia três vezes até achar a Cordeiro. É a primeira vez que saio de um corte sem pedir pra ajeitar nada em casa."',
      author: "Fernando S. — cliente há 2 anos",
      rating: 5
    },
    {
      id: 2,
      quote: '"Ambiente impecável e o degradê do Jonas é o melhor da região. O café cortesia na recepção faz toda a diferença no atendimento."',
      author: "Marcelo T. — cliente há 6 meses",
      rating: 5
    },
    {
      id: 3,
      quote: '"A barboterapia é um ritual que todo homem deveria testar. Relaxante demais. Profissionais experientes e estrutura nota 10."',
      author: "Carlos E. — cliente há 4 anos",
      rating: 5
    }
  ];

  // 2. Controla qual índice do array estamos vendo no momento (começa no 0)
  const [activeIndex, setActiveIndex] = useState(0);

  // 3. Efeito colateral: Auto-play do carrossel
  useEffect(() => {
    const timer = setInterval(() => {
      // Se estiver no último, volta pro 0. Se não, vai para o próximo.
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 5000); // Troca a cada 5 segundos

    // Função de limpeza vital no React para não vazar memória
    return () => clearInterval(timer);
  }, [reviews.length]);

  // Facilita a leitura pegando o depoimento ativo atual
  const currentReview = reviews[activeIndex];

  return (
    <section id="depoimentos" className="bg-paper py-24 px-6 flex items-center justify-center">
      <div className="max-w-[800px] w-full flex flex-col items-center text-center">
        
        <div className="flex gap-1.5 mb-8 text-brass">
          {[...Array(currentReview.rating)].map((_, i) => (
            <TbStarFilled key={i} size={18} />
          ))}
        </div>

        {/* 
          Dica de Sênior: min-h-[160px] (ou um valor aproximado) evita que 
          a tela "pule" para cima e para baixo se um texto for maior que o outro.
        */}
        <div className="min-h-[160px] md:min-h-[140px] flex flex-col items-center justify-center">
          <h2 className="font-display italic text-3xl md:text-4xl text-ink leading-relaxed mb-6">
            {currentReview.quote}
          </h2>
          <p className="font-body text-ink/60 text-sm md:text-base transition-opacity duration-300">
            {currentReview.author}
          </p>
        </div>

        {/* Indicadores (Dots) Clicáveis */}
        <div className="mt-10 flex gap-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? "bg-brass w-6" // O ponto ativo fica mais largo (estilo pílula)
                  : "bg-brass/30 hover:bg-brass/60"
              }`}
              aria-label={`Ir para o depoimento ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}