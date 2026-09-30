import { ArrowRight } from "lucide-react";
import retrato from "@/assets/fotos/fernanda-retrato.jpg";
import { abertura, profissional, linkAgendamento, temWhatsapp } from "@/content/site";
import Traco from "./Traco";

export default function Abertura() {
  const externo = temWhatsapp ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <section id="inicio" className="relative overflow-hidden pt-[4.5rem]">
      <div className="envoltorio grid items-center gap-12 pb-16 pt-10 md:pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pb-24">
        <div className="revelar">
          <p className="rotulo mb-6 flex items-center gap-3 text-folha">
            <span className="inline-block h-px w-8 bg-argila" aria-hidden="true" />
            {profissional.profissao} em São Paulo
          </p>

          <h1 className="text-[2.35rem] leading-[1.08] text-tinta sm:text-5xl lg:text-[3.6rem]">
            {abertura.titulo}{" "}
            <em className="font-normal text-argila">{abertura.destaque}</em>
          </h1>

          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-grafite">
            {abertura.subtitulo}
          </p>
          <p className="mt-4 max-w-[34rem] leading-relaxed text-grafite/90">{abertura.apoio}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={linkAgendamento()} {...externo} className="botao botao-cheio group">
              {abertura.ctaPrincipal}
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#sobre" className="botao botao-linha">
              {abertura.ctaSecundario}
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-tinta/10 pt-6 text-[0.9rem] font-medium text-grafite">
            {abertura.selos.map((selo, i) => (
              <li key={selo} className="flex items-center gap-6">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-salvia" aria-hidden="true" />}
                {selo}
              </li>
            ))}
          </ul>
        </div>

        <div className="revelar relative mx-auto w-full max-w-[26rem] lg:max-w-none">
          <div
            className="absolute -bottom-5 -left-5 top-10 right-10 rounded-[1.75rem] bg-salvia-clara"
            aria-hidden="true"
          />
          <Traco className="absolute -right-8 -top-10 z-10 h-36 w-36 text-tinta/80 sm:h-44 sm:w-44" />
          <figure className="relative overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-30px_rgba(40,54,31,0.45)]">
            <img
              src={retrato}
              alt="Dra. Fernanda Furmankiewicz sentada no consultório, sorrindo"
              width={851}
              height={1280}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover object-[50%_22%]"
            />
          </figure>
          <p className="absolute -bottom-4 right-4 z-10 rounded-full bg-papel px-4 py-2 text-[0.8rem] font-medium text-tinta shadow-sm sm:right-8">
            {profissional.nome}
          </p>
        </div>
      </div>
    </section>
  );
}
