import { useState, type FormEvent } from "react";
import { ArrowRight, MapPin, Mail, Instagram, CalendarDays, Monitor, Wallet } from "lucide-react";
import {
  agendar,
  contato,
  enderecoLinha,
  instagramUrl,
  mapaUrl,
  mapaEmbed,
  temWhatsapp,
} from "@/content/site";

const icones = [CalendarDays, Monitor, Wallet];

function mascararTelefone(valor: string) {
  const d = valor.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export default function Agendar() {
  const [dados, setDados] = useState({
    nome: "",
    telefone: "",
    email: "",
    objetivo: "",
    mensagem: "",
  });
  const [erro, setErro] = useState("");
  const [enviado, setEnviado] = useState(false);

  const alterar = (campo: keyof typeof dados, valor: string) =>
    setDados((d) => ({ ...d, [campo]: campo === "telefone" ? mascararTelefone(valor) : valor }));

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    setErro("");

    if (dados.nome.trim().length < 3) return setErro("Informe seu nome completo.");
    if (dados.telefone.replace(/\D/g, "").length < 10)
      return setErro("Informe um WhatsApp com DDD.");
    if (!dados.objetivo) return setErro("Escolha uma opção sobre o acompanhamento.");

    const ficha = [
      `Nome: ${dados.nome.trim()}`,
      `WhatsApp: ${dados.telefone}`,
      dados.email.trim() ? `E-mail: ${dados.email.trim()}` : "",
      `Acompanhamento: ${dados.objetivo}`,
      dados.mensagem.trim() ? `Mensagem: ${dados.mensagem.trim()}` : "",
    ].filter(Boolean);
    const texto = ["Olá, Dra. Fernanda! Gostaria de agendar uma consulta.", "", ...ficha].join("\n");

    if (temWhatsapp) {
      window.open(
        `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(texto)}`,
        "_blank",
        "noopener,noreferrer",
      );
    } else {
      const assunto = `Agendamento de consulta — ${dados.nome.trim()}`;
      window.location.href = `mailto:${contato.email}?subject=${encodeURIComponent(
        assunto,
      )}&body=${encodeURIComponent(texto)}`;
    }
    setEnviado(true);
  };

  return (
    <section id="agendar" className="relative bg-folha-escura text-papel">
      <div className="envoltorio grid gap-14 py-20 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="revelar">
          <p className="rotulo mb-4 text-argila-clara">Agendamento</p>
          <h2 className="text-[2rem] sm:text-4xl leading-tight md:text-5xl">{agendar.titulo}</h2>
          <p className="mt-4 font-serif text-2xl italic leading-snug text-papel/80">
            {agendar.subtitulo}
          </p>

          <dl className="mt-12 space-y-6">
            {agendar.unidade.map((u, i) => {
              const Icone = icones[i];
              return (
                <div key={u.rotulo} className="flex gap-4">
                  <Icone size={20} strokeWidth={1.6} className="mt-1 shrink-0 text-salvia" aria-hidden="true" />
                  <div>
                    <dt className="text-[0.85rem] font-semibold tracking-wide text-papel/60 uppercase">
                      {u.rotulo}
                    </dt>
                    <dd className="mt-0.5 text-papel">{u.texto}</dd>
                  </div>
                </div>
              );
            })}
            <div className="flex gap-4">
              <MapPin size={20} strokeWidth={1.6} className="mt-1 shrink-0 text-salvia" aria-hidden="true" />
              <div>
                <dt className="text-[0.85rem] font-semibold tracking-wide text-papel/60 uppercase">
                  Endereço
                </dt>
                <dd className="mt-0.5">
                  <a href={mapaUrl} target="_blank" rel="noopener noreferrer" className="link-sublinhado">
                    {enderecoLinha}
                  </a>
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-papel/15 pt-8">
            <a
              href={`mailto:${contato.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-papel/25 px-4 py-2.5 text-[0.92rem] transition-colors hover:border-papel/60"
            >
              <Mail size={16} aria-hidden="true" />
              {contato.email}
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-papel/25 px-4 py-2.5 text-[0.92rem] transition-colors hover:border-papel/60"
            >
              <Instagram size={16} aria-hidden="true" />@{contato.instagram}
            </a>
          </div>
        </div>

        <div className="revelar">
          <form
            onSubmit={enviar}
            noValidate
            className="rounded-[1.5rem] bg-papel p-6 text-tinta shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)] sm:p-9"
          >
            <h3 className="font-serif text-2xl">{agendar.formTitulo}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-grafite">
              {agendar.formTexto}
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-[0.9rem] font-medium">Nome completo</span>
                <input
                  className="campo"
                  name="nome"
                  autoComplete="name"
                  required
                  value={dados.nome}
                  onChange={(e) => alterar("nome", e.target.value)}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[0.9rem] font-medium">WhatsApp</span>
                <input
                  className="campo"
                  name="telefone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel-national"
                  placeholder="(11) 90000-0000"
                  required
                  value={dados.telefone}
                  onChange={(e) => alterar("telefone", e.target.value)}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[0.9rem] font-medium">
                  E-mail <span className="font-normal text-grafite">(opcional)</span>
                </span>
                <input
                  className="campo"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={dados.email}
                  onChange={(e) => alterar("email", e.target.value)}
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-[0.9rem] font-medium">O que você busca no acompanhamento?</span>
                <select
                  className="campo appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22><path d=%22M1 1l5 5 5-5%22 stroke=%22%233d5134%22 stroke-width=%221.6%22 fill=%22none%22/></svg>')] bg-[length:12px_8px] bg-[position:right_1rem_center] bg-no-repeat pr-10"
                  name="objetivo"
                  required
                  value={dados.objetivo}
                  onChange={(e) => alterar("objetivo", e.target.value)}
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  {agendar.objetivos.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-[0.9rem] font-medium">
                  Mensagem <span className="font-normal text-grafite">(opcional)</span>
                </span>
                <textarea
                  className="campo min-h-[7rem] resize-y"
                  name="mensagem"
                  rows={4}
                  value={dados.mensagem}
                  onChange={(e) => alterar("mensagem", e.target.value)}
                />
              </label>
            </div>

            <p role="alert" aria-live="polite" className="mt-4 min-h-[1.25rem] text-[0.9rem] text-argila">
              {erro}
            </p>

            <button type="submit" className="botao botao-cheio group mt-2 w-full">
              {temWhatsapp ? agendar.botaoWhatsapp : agendar.botaoEmail}
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <p className="mt-3 text-center text-[0.85rem] leading-relaxed text-grafite">
              {temWhatsapp ? agendar.avisoWhatsapp : agendar.avisoEmail}
            </p>

            {enviado && !erro && (
              <p className="mt-4 text-center text-[0.9rem] text-folha" aria-live="polite">
                {temWhatsapp
                  ? "O WhatsApp foi aberto em outra aba. Para concluir, envie a mensagem."
                  : "Seu aplicativo de e-mail foi aberto com a solicitação. Para concluir, envie a mensagem."}
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="h-[320px] w-full bg-folha md:h-[380px]">
        <iframe
          title={`Mapa: ${enderecoLinha}`}
          src={mapaEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0 opacity-90 grayscale-[35%]"
        />
      </div>
    </section>
  );
}
