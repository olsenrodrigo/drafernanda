import { ArrowRight } from "lucide-react";
import { sinais, linkAgendamento, temWhatsapp } from "@/content/site";
import Traco from "./Traco";

export default function QuandoProcurar() {
  const externo = temWhatsapp ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <section
      id="quando-procurar"
      className="relative overflow-hidden bg-folha-escura py-20 text-papel md:py-28"
    >
      <Traco className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] text-salvia/15" />

      <div className="envoltorio relative">
        <div className="revelar grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="rotulo mb-4 text-argila-clara">{sinais.rotulo}</p>
            <h2 className="text-[2rem] sm:text-4xl leading-tight md:text-[2.75rem]">{sinais.titulo}</h2>
          </div>
          <p className="max-w-[32rem] text-lg leading-relaxed text-papel/75 lg:justify-self-end">
            {sinais.intro}
          </p>
        </div>

        <div className="mt-14 grid border-t border-papel/15 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
          {sinais.itens.map((item, i) => (
            <article key={item.titulo} className="revelar border-b border-papel/15 py-8">
              <span className="font-serif text-sm italic text-salvia">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-[1.4rem] leading-snug text-papel">{item.titulo}</h3>
              <p className="mt-3 leading-relaxed text-papel/70">{item.texto}</p>
            </article>
          ))}
        </div>

        <div className="revelar mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[40rem] font-serif text-xl italic text-papel/85">{sinais.fechamento}</p>
          <a href={linkAgendamento()} {...externo} className="botao botao-claro group shrink-0">
            Agendar minha consulta
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
