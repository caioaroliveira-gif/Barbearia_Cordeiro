import { TbRazor, TbArmchair } from "react-icons/tb";
import { TbScissors } from "react-icons/tb";

export default function Features() {
  return (
    <section className="bg-paper py-20 px-6">
      <div className="mx-auto max-w-[1160px] w-full">
        
        <h2 className="font-display text-4xl md:text-5xl text-ink max-w-[18ch] leading-tight mb-16">
          Por que o bairro confia na Cordeiro
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Card 1 */}
          <div className="flex flex-col items-start">
            <TbScissors size={32} className="text-[#8A3330] mb-6" />
            <h3 className="font-display text-xl text-ink font-semibold mb-3">
              Profissionais experientes
            </h3>
            <p className="font-body text-ink/70 text-base leading-relaxed">
              Time formado por barbeiros com mais de 8 anos de ofício, treinados em técnica clássica e tendências atuais.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start">
            <TbRazor size={32} className="text-[#8A3330] mb-6" />
            <h3 className="font-display text-xl text-ink font-semibold mb-3">
              Produtos premium
            </h3>
            <p className="font-body text-ink/70 text-base leading-relaxed">
              Linha própria de pomadas, óleos e loções pós-barba selecionados — nada de improviso no seu rosto.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start">
            <TbArmchair size={32} className="text-[#8A3330] mb-6" />
            <h3 className="font-display text-xl text-ink font-semibold mb-3">
              Ambiente exclusivo
            </h3>
            <p className="font-body text-ink/70 text-base leading-relaxed">
              Espaço pensado para relaxar: café, música na medida certa e nenhuma pressa no seu horário.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}