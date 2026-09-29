import { Plus } from "lucide-react";
import { duvidas, contato, instagramUrl } from "@/content/site";

export default function Duvidas() {
  return (
    <section id="duvidas" className="bg-papel py-20 md:py-28">
      <div className="envoltorio grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="revelar">
          <p className="rotulo mb-4 text-argila">Dúvidas</p>
          <h2 className="text-[2rem] sm:text-4xl leading-tight text-tinta md:text-[2.75rem]">Perguntas frequentes</h2>
          <p className="mt-5 max-w-[24rem] leading-relaxed text-grafite">
            Ficou alguma pergunta? Escreva para{" "}
            <a href={`mailto:${contato.email}`} className="link-sublinhado text-folha">
              {contato.email}
            </a>{" "}
            ou fale pelo{" "}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sublinhado text-folha"
            >
              Instagram
            </a>
            .
          </p>
        </div>

        <div className="revelar border-t border-tinta/10">
          {duvidas.map((d, i) => (
            <details key={d.pergunta} className="duvida border-b border-tinta/10" open={i === 0}>
              <summary className="flex items-start justify-between gap-6 py-6">
                <h3 className="text-[1.25rem] leading-snug text-tinta">{d.pergunta}</h3>
                <span className="sinal mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-tinta/15 text-folha">
                  <Plus size={16} aria-hidden="true" />
                </span>
              </summary>
              <p className="-mt-1 pb-7 pr-12 leading-relaxed text-grafite">{d.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
