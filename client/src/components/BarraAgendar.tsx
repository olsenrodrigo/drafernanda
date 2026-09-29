import { useEffect, useState } from "react";
import { linkAgendamento, temWhatsapp } from "@/content/site";

/**
 * Botão fixo no rodapé da tela, só no celular: aparece depois da abertura e
 * some quando a seção de agendamento já está visível.
 */
export default function BarraAgendar() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const agendar = document.getElementById("agendar");
    const aoRolar = () => {
      const passouAbertura = window.scrollY > window.innerHeight * 0.8;
      const topoAgendar = agendar?.getBoundingClientRect().top ?? Infinity;
      setVisivel(passouAbertura && topoAgendar > window.innerHeight * 0.9);
    };
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar);
    return () => {
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
    };
  }, []);

  const externo = temWhatsapp ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300 md:hidden ${
        visivel ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visivel}
    >
      <a
        href={linkAgendamento()}
        {...externo}
        tabIndex={visivel ? 0 : -1}
        className="botao botao-cheio w-full shadow-[0_12px_30px_-10px_rgba(40,54,31,0.6)]"
      >
        Agendar minha consulta
      </a>
    </div>
  );
}
