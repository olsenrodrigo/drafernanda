import { atendimentos } from "@/content/site";

export default function Atendimentos() {
  return (
    <section id="atendimentos" className="py-20 md:py-28">
      <div className="envoltorio grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="revelar lg:sticky lg:top-28 lg:self-start">
          <p className="rotulo mb-4 text-argila">Especialidades</p>
          <h2 className="text-[2rem] sm:text-4xl leading-tight text-tinta md:text-[2.75rem]">
            {atendimentos.titulo}
          </h2>
          <p className="mt-5 max-w-[26rem] text-lg leading-relaxed text-grafite">
            {atendimentos.intro}
          </p>

          <div className="mt-10 rounded-2xl bg-salvia-clara p-6">
            <h3 className="font-sans text-[0.95rem] font-semibold tracking-normal text-folha-escura">
              {atendimentos.condicoesTitulo}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {atendimentos.condicoes.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-folha/20 bg-papel/70 px-3.5 py-1.5 text-[0.88rem] text-folha-escura"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="border-t border-tinta/10">
          {atendimentos.servicos.map((s) => (
            <li
              key={s.titulo}
              className="revelar group grid gap-2 border-b border-tinta/10 py-7 sm:grid-cols-[1fr_1.15fr] sm:gap-8"
            >
              <h3 className="text-[1.45rem] leading-snug text-tinta transition-colors group-hover:text-folha">
                {s.titulo}
              </h3>
              <p className="leading-relaxed text-grafite">{s.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
