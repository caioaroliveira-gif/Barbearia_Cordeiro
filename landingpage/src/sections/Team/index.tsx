export default function Team() {
  // 1. Array de dados da equipe
  const team = [
    {
      initials: "RC",
      name: "Roberto Cordeiro",
      role: "Fundador · especialista em navalha",
      quote: '"Cada corte é uma conversa antes de ser uma técnica."',
    },
    {
      initials: "JA",
      name: "Jonas Almeida",
      role: "Degradês e desenhos",
      quote: '"Gosto de trazer referência de fora pro corte clássico."',
    },
    {
      initials: "MT",
      name: "Marcos Teixeira",
      role: "Barboterapia",
      quote: '"Barba bem cuidada muda o rosto inteiro."',
    },
  ];

  return (
    <section id="equipe" className="bg-paper py-20 px-6">
      {/* Note que reduzi o max-w para 960px para o texto não esticar demais e ficar igual ao design */}
      <div className="mx-auto max-w-[960px] w-full">
        <h2 className="font-display text-4xl md:text-5xl text-ink mb-12">
          Quem vai te atender
        </h2>

        {/* Container da lista com borda inferior para fechar o bloco */}
        <div className="flex flex-col border-b border-ink/10">
          {team.map((member, index) => (
            <div
              key={index}
              // Borda superior em cada item. No mobile empilha (flex-col), no PC alinha lado a lado (md:flex-row)
              className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 border-t border-ink/10"
            >
              {/* Bloco da Esquerda: Avatar e Informações */}
              <div className="flex items-center gap-5">
                {/* Avatar em círculo com as iniciais */}
                <div className="w-14 h-14 rounded-full bg-brass-light flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-lg text-ink font-semibold tracking-wide">
                    {member.initials}
                  </span>
                </div>

                {/* Nome e Cargo */}
                <div className="flex flex-col">
                  <h3 className="font-display text-xl text-ink font-medium">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm text-ink/60 mt-1">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Bloco da Direita: Citação */}
              <div className="md:text-right pl-[76px] md:pl-0">
                <p className="font-body italic text-ink/70 text-sm md:text-base max-w-[320px] md:ml-auto">
                  {member.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
