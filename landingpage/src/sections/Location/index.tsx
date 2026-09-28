import { TbMapPin } from "react-icons/tb";

export default function Location() {
  const schedule = [
    { day: "Segunda a sexta", hours: "9h às 20h" },
    { day: "Sábado", hours: "8h às 18h" },
    { day: "Domingo", hours: "Fechado" },
  ];

  return (
    <section
      id="localizacao"
      className="bg-[#241812] py-24 px-6 border-t border-white/10"
    >
      <div className="max-w-[1160px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col">
          <h2 className="font-display text-4xl md:text-5xl text-paper mb-6">
            Onde estamos
          </h2>

          <p className="font-body text-paper/80 text-lg mb-12">
            Rua das Palmeiras, 214 — Vila das Flores
          </p>

          <div className="flex flex-col gap-5 w-full max-w-[400px]">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between font-body text-base"
              >
                <span className="text-paper/80">{item.day}</span>
                <span className="text-paper font-medium">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col items-end">
          <div className="w-full aspect-video md:aspect-[4/3] bg-[#1f1611] border border-white/5 rounded-sm flex items-center justify-center relative bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]">
            <TbMapPin size={40} className="text-[#8A3330] drop-shadow-lg" />

            <span className="absolute bottom-4 left-4 font-body text-xs text-paper/40">
              Mapa ilustrativo — trocar por embed real na implementação
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
