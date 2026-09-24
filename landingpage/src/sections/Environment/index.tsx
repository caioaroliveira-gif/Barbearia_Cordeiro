import {
  TbArmchair,
  TbScissors,
  TbSquare,
  TbCut,
  TbCoffee,
} from "react-icons/tb";
import { GiComb } from "react-icons/gi";

export default function Environment() {
  // 1. Matriz de placeholders.
  // Já deixamos as classes do Grid preparadas aqui para facilitar a manutenção.
  const galleryPlaceholders = [
    {
      id: "cadeiras",
      title: "Cadeiras",
      icon: <TbArmchair size={20} />,
      gridClass: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto",
      bgClass: "bg-[#251A13]", // Tom castanho escuro texturizado
    },
    {
      id: "tesouras",
      title: "Tesouras",
      icon: <TbScissors size={20} />,
      gridClass: "col-span-1 aspect-[4/3] md:aspect-auto",
      bgClass: "bg-[#6A2C29]", // Tom bordô
    },
    {
      id: "espelhos",
      title: "Espelhos",
      icon: <TbSquare size={20} />,
      gridClass: "col-span-1 aspect-[4/3] md:aspect-auto",
      bgClass: "bg-[#1E1510]", // Tom quase preto
    },
    {
      id: "navalhas",
      title: "Navalhas",
      icon: <TbCut size={20} />,
      // Adicionado md:aspect-auto aqui
      gridClass: "col-span-1 aspect-square md:aspect-auto",
      bgClass: "bg-brass",
    },
    {
      id: "pentes",
      title: "Pentes",
      icon: <GiComb size={20} />,
      // Adicionado md:aspect-auto aqui
      gridClass: "col-span-1 aspect-square md:aspect-auto",
      bgClass: "bg-[#2A1E16]",
    },
    {
      id: "rececao",
      title: "Recepção",
      icon: <TbCoffee size={20} />,
      // Adicionado md:aspect-auto aqui
      gridClass: "col-span-1 aspect-square md:aspect-auto",
      bgClass: "bg-[#201611]",
    },
  ];

  return (
    <section
      id="ambiente"
      className="bg-bg-dark py-20 px-6 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1160px] w-full">
        {/* Cabeçalho */}
        <div className="mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-paper mb-4">
            O ambiente
          </h2>
          <p className="font-body text-paper/60 text-sm md:text-base">
            Prévia do espaço — as fotos reais da unidade entram aqui após o
            ensaio fotográfico.
          </p>
        </div>

        {/* 
          A magia acontece aqui:
          grid-cols-1 no telemóvel (tudo empilhado) e grid-cols-3 a partir de tablets (md).
          auto-rows-[240px] define que cada linha do grid terá exatamente 240px de altura no desktop.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:auto-rows-[240px]">
          {galleryPlaceholders.map((item) => (
            <div
              key={item.id}
              // Adicione h-full w-full na linha abaixo
              className={`relative h-full w-full flex items-end p-5 overflow-hidden rounded-sm transition-all hover:opacity-90 ${item.gridClass} ${item.bgClass}`}
            >
              <div className="flex items-center gap-2 text-paper/80">
                {item.icon}
                <span className="font-body text-sm font-medium tracking-wide">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
