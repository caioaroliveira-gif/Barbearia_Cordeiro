import Button from "../../components/UI/Button/index";

export default function Booking() {
  return (
    <section id="agendamento" className="bg-[#6A2C29] py-24 px-6 text-center">
      <div className="max-w-[700px] mx-auto flex flex-col items-center">
        <h2 className="font-display text-4xl md:text-5xl text-paper mb-4 leading-tight">
          Seu horário te espera
        </h2>

        <p className="font-body text-paper/80 text-base md:text-lg mb-10 max-w-[500px]">
          Agende pelo WhatsApp ou pelo app — resposta em minutos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Button
            text="Agendar pelo WhatsApp"
            text_color="text-ink"
            background_color="bg-brass hover:bg-brass-light rounded-sm cursor-pointer"
            link="#"
          />
          <Button
            text="Ligar agora"
            text_color="text-paper"
            background_color="bg-transparent border border-paper/30 hover:border-paper hover:bg-paper/5 rounded-sm cursor-pointer"
            link="#"
          />
        </div>
      </div>
    </section>
  );
}
