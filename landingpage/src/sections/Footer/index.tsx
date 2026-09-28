import { TbBrandInstagram, TbMessageCircle, TbX } from "react-icons/tb";

export default function Footer() {
  const currentYear = new Date().getFullYear(); //  ano dinâmico

  const navLinks = [
    { name: "Serviços", href: "#servicos" },
    { name: "Equipe", href: "#equipe" },
    { name: "Galeria", href: "#ambiente" },
    { name: "Localização", href: "#localizacao" },
  ];

  const contactLinks = [
    { name: "(47) 3000-0000", href: "tel:+554730000000" },
    { name: "WhatsApp", href: "https://wa.me/5547000000000" },
    {
      name: "contato@barbeariacordeiro.com.br",
      href: "mailto:contato@barbeariacordeiro.com.br",
    },
  ];

  return (
    <footer className="bg-bg-dark pt-20 pb-8 px-6 border-t border-white/10">
      <div className="max-w-[1160px] mx-auto w-full">
        {/* Marca e Colunas */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 mb-16">
          {/* Marca e Descrição */}
          <div className="flex flex-col max-w-[320px]">
            <div className="flex items-center gap-3 mb-6">
              {/* Ícone imitando o logo do Figma */}
              <div className="w-10 h-10 rounded-full border border-brass text-brass flex items-center justify-center">
                <TbX size={20} strokeWidth={1.5} />
              </div>
              <h2 className="font-display text-2xl text-paper">
                Barbearia <span className="text-brass italic">Cordeiro</span>
              </h2>
            </div>
            <p className="font-body text-paper/60 text-sm leading-relaxed">
              Tradição de bairro desde 2012, agora na Vila das Flores.
            </p>
          </div>

          {/* Colunas de Links */}
          <div className="flex gap-16 md:gap-24">
            {/* Coluna Navegação */}
            <div className="flex flex-col gap-4">
              <h3 className="font-body text-paper/40 text-sm mb-2">
                Navegação
              </h3>
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-body text-paper/80 hover:text-brass text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Coluna Contato */}
            <div className="flex flex-col gap-4">
              <h3 className="font-body text-paper/40 text-sm mb-2">Contato</h3>
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-body text-paper/80 hover:text-brass text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bloco Inferior: Copyright e Redes Sociais */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <p className="font-body text-paper/40 text-xs text-center md:text-left">
            © {currentYear} Barbearia Cordeiro. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4 text-paper/60">
            <a
              href="#"
              className="hover:text-brass transition-colors"
              aria-label="Instagram"
            >
              <TbBrandInstagram size={20} />
            </a>
            <a
              href="#"
              className="hover:text-brass transition-colors"
              aria-label="Chat"
            >
              <TbMessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
