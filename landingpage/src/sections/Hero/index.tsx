import Button from "../../components/UI/Button";
import barbeariaFoto from "../../assets/barbearia_foto.png";

export default function Hero() {
  return (
    <section className="min-h-screen bg-bg-dark text-paper flex items-center py-12">
      <div className="mx-auto max-w-[1160px] w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Coluna da Esquerda */}
        <div className="flex flex-col items-start">
          <h1 className="font-display text-5xl md:text-6xl text-paper leading-[1.05] tracking-tight">
            Tradição de <br />
            bairro, <br />
            acabamento de <br />
            <span className="italic text-brass-light">
              barbearia <br />
              clássica.
            </span>
          </h1>

          <p className="mt-6 max-w-[460px] text-base md:text-lg text-paper/80 leading-relaxed">
            Há 14 anos cuidando do visual dos homens do bairro. Agora numa casa
            nova, com o mesmo cuidado de sempre: navalha, tesoura e atenção a
            cada detalhe.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              text="Agendar Consulta"
              text_color="text-[#130e0b]"
              background_color="bg-brass hover:bg-brass-light"
              link="#agendar"
            />
            <Button
              text="Ver serviços e preços"
              text_color="text-paper"
              background_color="border border-white/20 hover:border-brass-light"
              link="#servicos"
            />
          </div>

          {/* Estatísticas movidas para dentro da coluna da esquerda */}
          <div className="flex flex-wrap gap-8 md:gap-12 mt-12 pt-6 border-t border-white/10 w-full">
            <div className="border-l border-brass pl-4">
              <p className="font-display text-2xl md:text-3xl text-paper leading-tight">
                14 anos
              </p>
              <p className="font-body text-sm text-paper/70 mt-1">de bairro</p>
            </div>

            <div className="border-l border-brass pl-4">
              <p className="font-display text-2xl md:text-3xl text-paper leading-tight">
                4
              </p>
              <p className="font-body text-sm text-paper/70 mt-1">barbeiros</p>
            </div>

            <div className="border-l border-brass pl-4">
              <p className="font-display text-2xl md:text-3xl text-paper leading-tight">
                4,9
              </p>
              <p className="font-body text-sm text-paper/70 mt-1">
                avaliação média
              </p>
            </div>
          </div>
        </div>

        {/* Coluna da Direita */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={barbeariaFoto}
            alt="Ilustração Barbearia Cordeiro"
            className="w-full max-w-[500px] aspect-square object-cover border border-white/10 rounded-sm"
          />
        </div>

      </div>
    </section>
  );
}