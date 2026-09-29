import { ArrowRight, Check } from "lucide-react";
import fotoConsulta from "@/assets/fotos/fernanda-consulta.jpg";
import { destaques, linkAgendamento, temWhatsapp, type Destaque } from "@/content/site";

function Beneficios({ itens }: { itens: string[] }) {
  return (
    <ul className="space-y-3">
      {itens.map((b) => (
        <li key={b} className="flex gap-3 leading-relaxed text-tinta/85">
          <Check size={18} strokeWidth={2.2} className="mt-1 shrink-0 text-folha" aria-hidden="true" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function Passos({ itens }: { itens: string[] }) {
  return (
    <ol className="space-y-5">
      {itens.map((p, i) => (
        <li key={p} className="grid grid-cols-[2.25rem_1fr] gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-folha/30 font-serif text-[0.95rem] text-folha">
            {i + 1}
          </span>
          <span className="pt-1 leading-relaxed text-tinta/85">{p}</span>
        </li>
      ))}
    </ol>
  );
}

function Chamada({ d }: { d: Destaque }) {
  const externo = temWhatsapp ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a href={linkAgendamento(d.mensagem)} {...externo} className="botao botao-cheio group mt-10">
      {d.cta}
      <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

export default function Destaques() {
  const [pos, diabetes] = destaques;

  return (
    <>
      <section id={pos.id} className="bg-papel py-20 md:py-28">
        <div className="envoltorio">
          <div className="revelar grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="rotulo mb-4 text-argila">{pos.rotulo}</p>
              <h2 className="text-[2rem] sm:text-4xl leading-tight text-tinta md:text-[2.75rem]">{pos.titulo}</h2>
            </div>
            <p className="text-lg leading-relaxed text-grafite">{pos.texto}</p>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <figure className="revelar">
              <img
                src={fotoConsulta}
                alt="Dra. Fernanda Furmankiewicz fazendo anotações durante o atendimento"
                width={1600}
                height={1200}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-[1.25rem] object-cover object-[35%_50%]"
              />
            </figure>

            <div className="revelar flex flex-col">
              <h3 className="mb-5 font-sans text-[0.95rem] font-semibold tracking-normal text-folha-escura">
                Benefícios do acompanhamento
              </h3>
              <Beneficios itens={pos.beneficios} />

              <h3 className="mb-5 mt-10 font-sans text-[0.95rem] font-semibold tracking-normal text-folha-escura">
                Como funciona
              </h3>
              <Passos itens={pos.passos} />

              <div>
                <Chamada d={pos} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id={diabetes.id} className="bg-salvia-clara py-20 md:py-28">
        <div className="envoltorio grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="revelar">
            <p className="rotulo mb-4 text-argila">{diabetes.rotulo}</p>
            <h2 className="text-[2rem] sm:text-4xl leading-tight text-tinta md:text-[2.75rem]">{diabetes.titulo}</h2>
            <p className="mt-6 text-lg leading-relaxed text-grafite">{diabetes.texto}</p>

            <h3 className="mb-5 mt-10 font-sans text-[0.95rem] font-semibold tracking-normal text-folha-escura">
              Benefícios do acompanhamento
            </h3>
            <Beneficios itens={diabetes.beneficios} />
          </div>

          <div className="revelar lg:pt-14">
            <div className="rounded-[1.25rem] bg-papel p-7 shadow-[0_20px_50px_-35px_rgba(40,54,31,0.5)] sm:p-10">
              <h3 className="mb-6 font-serif text-2xl text-tinta">Como funciona</h3>
              <Passos itens={diabetes.passos} />
              <Chamada d={diabetes} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
