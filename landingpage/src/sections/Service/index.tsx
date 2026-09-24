export default function Service() {
  // 1. Nossos dados separados da interface
  const menuEsquerda = [
    {
      categoria: "Cortes",
      itens: [
        { nome: "Corte tradicional", desc: "Máquina e tesoura, acabamento na navalha", preco: "45" },
        { nome: "Corte + desenho", desc: "Degradê com risco personalizado", preco: "60" },
        { nome: "Corte infantil", desc: "Até 10 anos", preco: "35" },
      ],
    },
    {
      categoria: "Barba",
      itens: [
        { nome: "Barba na navalha", desc: "Toalha quente e óleo", preco: "40" },
        { nome: "Barboterapia", desc: "Hidratação e modelagem completa", preco: "55" },
      ],
    },
  ];

  const menuDireita = [
    {
      categoria: "Combos",
      itens: [
        { nome: "Corte + barba", desc: "O clássico da casa", preco: "75" },
        { nome: "Dia do noivo", desc: "Corte, barba, sobrancelha e limpeza", preco: "140" },
      ],
    },
    {
      categoria: "Tratamentos",
      itens: [
        { nome: "Sobrancelha", desc: "Na navalha", preco: "20" },
        { nome: "Limpeza de pele", desc: "Facial masculina", preco: "65" },
      ],
    },
  ];

  // 2. Componente interno reutilizável apenas para esta seção
  const CategoryBlock = ({ data }: { data: any }) => (
    <div className="mb-12">
      <h3 className="font-display italic text-2xl text-brass border-b border-white/10 pb-3 mb-6">
        {data.categoria}
      </h3>
      <div className="flex flex-col gap-6">
        {data.itens.map((item: any, index: number) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-baseline justify-between gap-4 w-full">
              <h4 className="text-paper font-body font-medium text-lg whitespace-nowrap">
                {item.nome}
              </h4>
              {/* Esta div vazia com border-dotted cria a linha guia que se estende automaticamente */}
              <div className="flex-1 border-b border-dotted border-white/20 mx-2 relative top-[-6px]"></div>
              <span className="text-brass font-bold whitespace-nowrap">
                R$ {item.preco}
              </span>
            </div>
            {item.desc && (
              <p className="text-paper/60 font-body text-sm mt-1">
                {item.desc}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  // 3. A renderização principal
  return (
    <section id="servicos" className="bg-bg-dark py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-[1160px] w-full">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-paper mb-4">
            Serviços
          </h2>
          <p className="text-paper/70 font-body text-base max-w-[500px] leading-relaxed">
            Preços da unidade Vila das Flores. Combos com desconto para quem fecha o pacote completo.
          </p>
        </div>

        {/* Grid de 2 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24">
          
          {/* Coluna da Esquerda */}
          <div>
            {menuEsquerda.map((categoria, idx) => (
              <CategoryBlock key={`esq-${idx}`} data={categoria} />
            ))}
          </div>

          {/* Coluna da Direita */}
          <div>
            {menuDireita.map((categoria, idx) => (
              <CategoryBlock key={`dir-${idx}`} data={categoria} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}