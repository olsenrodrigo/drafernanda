import { useEffect } from "react";
import Topo from "@/components/Topo";
import Abertura from "@/components/Abertura";
import Sobre from "@/components/Sobre";
import QuandoProcurar from "@/components/QuandoProcurar";
import Atendimentos from "@/components/Atendimentos";
import Destaques from "@/components/Destaques";
import Consulta from "@/components/Consulta";
import Duvidas from "@/components/Duvidas";
import Agendar from "@/components/Agendar";
import Rodape from "@/components/Rodape";
import BarraAgendar from "@/components/BarraAgendar";

/** Marca cada `.revelar` como visível quando entra na tela (ver index.css). */
function useRevelar() {
  useEffect(() => {
    const alvos = document.querySelectorAll<HTMLElement>(".revelar");
    if (!("IntersectionObserver" in window)) {
      alvos.forEach((el) => el.classList.add("visivel"));
      return;
    }
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            e.target.classList.add("visivel");
            observador.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    alvos.forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, []);
}

export default function Home() {
  useRevelar();

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-papel focus:px-4 focus:py-2"
      >
        Pular para o conteúdo
      </a>
      <Topo />
      <main id="conteudo">
        <Abertura />
        <Sobre />
        <QuandoProcurar />
        <Atendimentos />
        <Destaques />
        <Consulta />
        <Duvidas />
        <Agendar />
      </main>
      <Rodape />
      <BarraAgendar />
    </>
  );
}
