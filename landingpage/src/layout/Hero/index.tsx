export default function Hero() {
  return (
    <section className="min-h-screen bg-[#130e0b] text-white">
      <div className="mx-auto grid min-h-screen max-w-[1160px] grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-0">
        <div className="flex flex-col items-start">
          <p className="mb-4 text-sm text-[#b4893f]">
            Nova Unidade-Vila das Flores
          </p>

          <h1 className="max-w-[600px] font-serif text-5xl leading-[0.98] tracking-tight text-[#f5f0e8] md:text-6xl">
            Tradição de bairro,
            <br />
            acabamento de
            <br />
            <span className="italic text-[#d8b56a]">barbearia clássica.</span>
          </h1>

          <p className="mt-7 max-w-[500px] text-sm leading-6 text-[#ddd5ca]">
            Há 14 anos cuidando do visual dos homens do bairro. Agora numa casa
            nova, com o mesmo cuidado de sempre: navalha, tesoura e atenção a
            cada detalhe.
          </p>
        </div>
      </div>
    </section>
  );
}
