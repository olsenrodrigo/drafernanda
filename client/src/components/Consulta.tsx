import { Clock, BookOpen, Activity, Users, Video, Leaf } from "lucide-react";
import { diferenciais } from "@/content/site";

const icones = [Clock, BookOpen, Activity, Users, Video, Leaf];

export default function Consulta() {
  return (
    <section id="consulta" className="py-20 md:py-28">
      <div className="envoltorio">
        <div className="revelar max-w-2xl">
          <p className="rotulo mb-4 text-argila">A consulta</p>
          <h2 className="text-[2rem] sm:text-4xl leading-tight text-tinta md:text-[2.75rem]">{diferenciais.titulo}</h2>
          <p className="mt-5 text-lg leading-relaxed text-grafite">{diferenciais.intro}</p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.itens.map((item, i) => {
            const Icone = icones[i];
            return (
              <article key={item.titulo} className="revelar border-t-2 border-folha/80 pt-6">
                <Icone size={22} strokeWidth={1.6} className="text-argila" aria-hidden="true" />
                <h3 className="mt-4 text-[1.35rem] leading-snug text-tinta">{item.titulo}</h3>
                <p className="mt-3 leading-relaxed text-grafite">{item.texto}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
