import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import {
  SITE_URL,
  seo,
  profissional,
  contato,
  endereco,
  instagramUrl,
  duvidas,
  atendimentos,
  sinais,
  destaques,
  diferenciais,
  sobre,
  enderecoLinha,
  agendar,
} from "@/content/site";

/**
 * Entrada usada só no build, por `script/prerender.ts`: transforma a página em
 * HTML para quem não executa JavaScript (Google na primeira passada, e os
 * crawlers de IA — GPTBot, ClaudeBot, PerplexityBot).
 */

const escapar = (texto: string) =>
  texto.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function jsonLd() {
  const url = `${SITE_URL}/`;
  const negocio: Record<string, unknown> = {
    "@type": "MedicalBusiness",
    "@id": `${url}#consultorio`,
    name: profissional.nome,
    description: seo.description,
    url,
    image: `${SITE_URL}/opengraph.jpg`,
    medicalSpecialty: "https://schema.org/DietNutrition",
    email: contato.email,
    priceRange: "Particular",
    address: {
      "@type": "PostalAddress",
      streetAddress: endereco.logradouro,
      addressLocality: endereco.cidade,
      addressRegion: endereco.uf,
      ...(endereco.cep ? { postalCode: endereco.cep } : {}),
      addressCountry: "BR",
    },
    areaServed: { "@type": "City", name: "São Paulo" },
    sameAs: [instagramUrl],
    founder: { "@id": `${url}#fernanda` },
    knowsAbout: atendimentos.servicos.map((s) => s.titulo),
  };
  if (contato.whatsapp) negocio.telephone = `+${contato.whatsapp}`;

  const pessoa = {
    "@type": "Person",
    "@id": `${url}#fernanda`,
    name: profissional.nome,
    jobTitle: profissional.profissao,
    alumniOf: { "@type": "CollegeOrUniversity", name: "Universidade de São Paulo (USP)" },
    worksFor: { "@id": `${url}#consultorio` },
    sameAs: [instagramUrl],
  };

  const faq = {
    "@type": "FAQPage",
    mainEntity: duvidas.map((d) => ({
      "@type": "Question",
      name: d.pergunta,
      acceptedAnswer: { "@type": "Answer", text: d.resposta },
    })),
  };

  return { "@context": "https://schema.org", "@graph": [negocio, pessoa, faq] };
}

export function renderizar(path: string) {
  const corpo = renderToString(
    <Router ssrPath={path}>
      <App />
    </Router>,
  );

  if (path !== "/") {
    return {
      corpo,
      cabeca: [
        `<title>Página não encontrada | ${escapar(profissional.nome)}</title>`,
        `<meta name="robots" content="noindex" />`,
      ].join("\n    "),
    };
  }

  const url = `${SITE_URL}/`;
  const imagem = `${SITE_URL}/opengraph.jpg`;
  const cabeca = [
    `<title>${escapar(seo.title)}</title>`,
    `<meta name="description" content="${escapar(seo.description)}" />`,
    `<meta name="author" content="${escapar(profissional.nome)}" />`,
    `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta name="geo.region" content="BR-SP" />`,
    `<meta name="geo.placename" content="São Paulo" />`,
    `<meta property="og:title" content="${escapar(seo.title)}" />`,
    `<meta property="og:description" content="${escapar(seo.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:site_name" content="${escapar(profissional.nome)}" />`,
    `<meta property="og:image" content="${imagem}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapar(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapar(seo.description)}" />`,
    `<meta name="twitter:image" content="${imagem}" />`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd()).replace(/</g, "\\u003c")}</script>`,
  ].join("\n    ");

  return { corpo, cabeca };
}

export const origem = SITE_URL;

export const llms = [
  `# ${profissional.nome}`,
  "",
  `> ${seo.description}`,
  "",
  "## Ficha",
  "",
  `- Profissional: ${profissional.nome}, ${profissional.profissao} (${profissional.crn})`,
  "- Formação: Nutrição pela Universidade de São Paulo (USP)",
  "- Experiência: mais de 30 anos de carreira, em diferentes áreas da nutrição",
  `- Endereço: ${enderecoLinha}`,
  ...agendar.unidade.map((u) => `- ${u.rotulo}: ${u.texto}`),
  `- E-mail: ${contato.email}`,
  `- Instagram: ${instagramUrl}`,
  ...(contato.whatsapp ? [`- WhatsApp: https://wa.me/${contato.whatsapp}`] : []),
  `- Site: ${SITE_URL}/`,
  "",
  "## Sobre",
  "",
  ...sobre.paragrafos.flatMap((p) => [p, ""]),
  "## Áreas de atendimento",
  "",
  ...atendimentos.servicos.map((s) => `- ${s.titulo}: ${s.texto}`),
  "",
  `${atendimentos.formatos.titulo}: ${atendimentos.formatos.texto}`,
  "",
  "## Quando procurar um nutricionista",
  "",
  sinais.intro,
  "",
  ...sinais.itens.map((s) => `- ${s.titulo}: ${s.texto}`),
  "",
  sinais.fechamento,
  "",
  ...destaques.flatMap((d) => [
    `## ${d.titulo}`,
    "",
    ...d.paragrafos.flatMap((p) => [p, ""]),
    "Foco do acompanhamento:",
    ...d.foco.map((f) => `- ${f}`),
    "",
    "Como funciona:",
    ...d.passos.map((p, i) => `${i + 1}. ${p.titulo}: ${p.texto}`),
    "",
  ]),
  "## Como é o acompanhamento",
  "",
  ...diferenciais.itens.map((d) => `- ${d.titulo}: ${d.texto}`),
  "",
  "## Perguntas frequentes",
  "",
  ...duvidas.flatMap((d) => [`### ${d.pergunta}`, "", d.resposta, ""]),
].join("\n");
