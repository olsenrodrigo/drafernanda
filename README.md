# Site — Dra. Fernanda Furmankiewicz

Landing page da nutricionista Fernanda Furmankiewicz (www.minhanutricionista.com.br).
Base: whitelabel_v2 (Vite + React 19 + Tailwind 4 + Express), sem banco de dados.

## Rodar

```bash
npm install
npm run dev              # desenvolvimento em http://localhost:5000
npm run build && PORT=5057 npm start   # produção local
```

O build gera a página já renderizada em `dist/public/index.html` (para Google e
buscadores de IA), além de `404.html`, `sitemap.xml`, `robots.txt` e `llms.txt`.

## Onde editar

- Todo o texto: `client/src/content/site.ts` (espelha o documento de copy).
- Cores e fontes: `client/src/index.css` (`@theme`).
- Fotos: `client/src/assets/fotos/`.

## Pendências da cliente

- **WhatsApp**: preencher `contato.whatsapp` em `site.ts` (só dígitos, com 55 + DDD).
  Enquanto estiver vazio, os botões levam ao formulário e o formulário abre o
  e-mail com a mensagem pronta; com o número, tudo passa a abrir o WhatsApp.
- **CRN**: falta a UF (`profissional.crn`).
- **Endereço**: complemento, bairro e CEP (`endereco`).
- **Depoimentos**: seção não publicada até haver 2 a 4 depoimentos autorizados.

## Deploy

VPS em `/var/www/sitedrafernanda`, pm2 `sitedrafernanda`, porta 3029.
Atualizar: `bash /var/www/atualizar-drafernanda.sh`.
