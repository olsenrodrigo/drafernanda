import { build as viteBuild } from "vite";
import { readFile, writeFile, rm } from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";
import react from "@vitejs/plugin-react";

/**
 * Depois do build do cliente: monta um bundle SSR de `client/src/entry-ssr.tsx`
 * e grava a página inicial já renderizada dentro do `index.html` (que tem os
 * hashes dos assets), mais `404.html`, `sitemap.xml`, `robots.txt` e `llms.txt`.
 */

const RAIZ = process.cwd();
const PUBLICO = path.resolve(RAIZ, "dist/public");
const TEMP = path.resolve(RAIZ, "dist/ssr");

async function bundleSsr() {
  await viteBuild({
    configFile: false,
    logLevel: "warn",
    plugins: [react()],
    resolve: { alias: { "@": path.resolve(RAIZ, "client", "src") } },
    build: {
      ssr: path.resolve(RAIZ, "client/src/entry-ssr.tsx"),
      outDir: TEMP,
      emptyOutDir: true,
      copyPublicDir: false,
      rollupOptions: { output: { entryFileNames: "entry-ssr.mjs", format: "es" } },
    },
    // No SSR os imports de imagem viram a URL final do build do cliente.
    ssr: { noExternal: true },
  });
}

export async function gerar() {
  console.log("pre-renderizando...");
  await bundleSsr();

  const { renderizar, origem, llms } = (await import(
    pathToFileURL(path.join(TEMP, "entry-ssr.mjs")).href
  )) as {
    renderizar: (p: string) => { corpo: string; cabeca: string };
    origem: string;
    llms: string;
  };

  const molde = await readFile(path.join(PUBLICO, "index.html"), "utf-8");

  const montar = (rota: string) => {
    const { corpo, cabeca } = renderizar(rota);
    return molde
      .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
      .replace(/[ \t]*<meta\s+name="description"[\s\S]*?\/?>\s*/i, "")
      .replace("</head>", `  ${cabeca}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root" data-prerender="true">${corpo}</div>`);
  };

  await writeFile(path.join(PUBLICO, "index.html"), montar("/"), "utf-8");
  await writeFile(path.join(PUBLICO, "404.html"), montar("/pagina-nao-encontrada"), "utf-8");

  const hoje = new Date().toISOString().slice(0, 10);
  await writeFile(
    path.join(PUBLICO, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${origem}/</loc>\n    <lastmod>${hoje}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
    "utf-8",
  );

  const bots = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-User",
    "PerplexityBot",
    "Google-Extended",
    "Applebot-Extended",
    "Bingbot",
  ];
  await writeFile(
    path.join(PUBLICO, "robots.txt"),
    [
      "User-agent: *",
      "Allow: /",
      "",
      "# Buscadores de IA liberados de propósito",
      ...bots.flatMap((b) => [`User-agent: ${b}`, "Allow: /", ""]),
      `Sitemap: ${origem}/sitemap.xml`,
      "",
    ].join("\n"),
    "utf-8",
  );

  await writeFile(path.join(PUBLICO, "llms.txt"), llms, "utf-8");
  await rm(TEMP, { recursive: true, force: true });
  console.log("index.html + 404.html + sitemap.xml + robots.txt + llms.txt");
}
