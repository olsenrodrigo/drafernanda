import foto from "@/assets/fotos/fernanda-consultorio.jpg";
import { sobre } from "@/content/site";

export default function Sobre() {
  return (
    <section id="sobre" className="bg-papel py-20 md:py-28">
      <div className="envoltorio grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="revelar lg:sticky lg:top-28 lg:self-start">
          <figure>
            <img
              src={foto}
              alt="Dra. Fernanda Furmankiewicz à mesa do consultório"
              width={1050}
              height={1400}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-[50%_35%]"
            />
          </figure>
        </div>

        <div className="pt-6 lg:pt-0">
          <div className="revelar">
            <p className="rotulo mb-4 text-argila">Sobre</p>
            <h2 className="text-[2rem] sm:text-4xl leading-tight text-tinta md:text-[2.75rem]">{sobre.titulo}</h2>
            <div className="mt-7 space-y-5 text-[1.075rem] leading-[1.75] text-grafite">
              {sobre.paragrafos.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>

          <div className="revelar mt-14">
            <h3 className="mb-2 font-serif text-2xl text-tinta">{sobre.trajetoriaTitulo}</h3>
            <ol className="divide-y divide-tinta/10">
              {sobre.trajetoria.map((item, i) => (
                <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-3 py-5">
                  <span className="pt-0.5 font-serif text-lg italic text-argila">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="leading-relaxed text-tinta/85">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
