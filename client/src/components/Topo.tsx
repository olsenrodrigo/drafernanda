import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navegacao, profissional, linkAgendamento, temWhatsapp } from "@/content/site";
import Traco from "./Traco";

export default function Topo() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 12);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  const externo = temWhatsapp ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-300 ${
        rolou || aberto
          ? "bg-linho/95 shadow-[0_1px_0_rgba(34,37,31,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="envoltorio flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#inicio" className="group flex items-center gap-3" onClick={() => setAberto(false)}>
          <span className="relative grid h-10 w-10 place-items-center text-folha">
            <Traco className="absolute inset-0 h-full w-full" />
            <span className="font-serif text-[0.95rem] font-medium italic text-tinta">F</span>
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-[1.05rem] font-medium text-tinta">
              {profissional.nomeCurto}
            </span>
            <span className="block text-[0.72rem] font-medium tracking-[0.08em] text-grafite uppercase">
              {profissional.profissao} · {profissional.crn}
            </span>
          </span>
        </a>

        <nav aria-label="Seções" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[0.92rem] text-grafite">
            {navegacao.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition-colors hover:text-folha">
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={linkAgendamento()}
            {...externo}
            className="botao botao-cheio hidden !min-h-[2.6rem] !px-5 !py-2 text-[0.9rem] sm:inline-flex"
          >
            Agendar consulta
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-tinta lg:hidden"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
            aria-controls="menu-movel"
            onClick={() => setAberto((v) => !v)}
          >
            {aberto ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        id="menu-movel"
        hidden={!aberto}
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-tinta/10 bg-linho lg:hidden"
      >
        <nav aria-label="Seções" className="envoltorio py-6">
          <ul className="flex flex-col">
            {navegacao.map((item) => (
              <li key={item.id} className="border-b border-tinta/10">
                <a
                  href={`#${item.id}`}
                  onClick={() => setAberto(false)}
                  className="block py-4 font-serif text-2xl text-tinta"
                >
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={linkAgendamento()}
            {...externo}
            onClick={() => setAberto(false)}
            className="botao botao-cheio mt-8 w-full"
          >
            Agendar minha consulta
          </a>
        </nav>
      </div>
    </header>
  );
}
