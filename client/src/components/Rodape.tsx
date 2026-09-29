import { navegacao, profissional, contato, instagramUrl, enderecoLinha } from "@/content/site";
import Traco from "./Traco";

export default function Rodape() {
  return (
    <footer className="bg-linho py-14">
      <div className="envoltorio">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative grid h-11 w-11 place-items-center text-folha">
                <Traco className="absolute inset-0 h-full w-full" />
                <span className="font-serif italic text-tinta">F</span>
              </span>
              <div className="leading-tight">
                <p className="font-serif text-lg text-tinta">{profissional.nome}</p>
                <p className="text-[0.85rem] text-grafite">
                  {profissional.profissao} · {profissional.crn}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-[0.92rem] leading-relaxed text-grafite">{enderecoLinha}</p>
          </div>

          <nav aria-label="Rodapé">
            <p className="rotulo mb-4 text-folha">Navegue</p>
            <ul className="grid grid-cols-2 gap-y-2 text-[0.95rem] text-grafite">
              {navegacao.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="hover:text-folha">
                    {n.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="rotulo mb-4 text-folha">Contato</p>
            <ul className="space-y-2 text-[0.95rem] text-grafite">
              <li>
                <a href={`mailto:${contato.email}`} className="hover:text-folha">
                  {contato.email}
                </a>
              </li>
              <li>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-folha">
                  @{contato.instagram}
                </a>
              </li>
              <li>Atendimento particular · presencial e online</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-tinta/10 pt-6 text-[0.82rem] text-grafite sm:flex-row sm:justify-between">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} {profissional.nome}. {profissional.crn}.
          </p>
          <p>As informações deste site não substituem a consulta individual.</p>
        </div>
      </div>
    </footer>
  );
}
