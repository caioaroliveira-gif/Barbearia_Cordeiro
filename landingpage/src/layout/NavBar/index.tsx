import { CiCircleRemove } from "react-icons/ci";
import Button from "../../components/Button";

export default function NavBar() {
  return (
    <>
      <header className="flex justify-between gap-3 px-5 py-6 md:px-20 border-b border-b-[#444141] ">
        <div className="flex gap-2 items-start ">
          <CiCircleRemove size={30} color="#D9B876" />
          <p className="text-white">Barbearia</p>
          <p className="text-[#D9B876]">Cordeiro</p>
        </div>

        <nav>
          <ul className="flex justify-end items-center gap-5 md:gap-10 text-white">
            <li>
              <a href="">Serviços</a>
            </li>

            <li>
              <a href="">Equipe</a>
            </li>

            <li>
              <a href="">Galeria</a>
            </li>

            <li>
              <a href="">Depoimentos</a>
            </li>

            <li>
              <a href="">Localização</a>
            </li>
          </ul>
        </nav>
          <a>
            <Button
              text="Agendar Horário"
              text_color="text-white"
              background_color="bg-[#B4893F]"
              link="/"
            />
          </a>
      </header>
    </>
  );
}
