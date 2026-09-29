import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const raiz = document.getElementById("root")!;

// O build grava o HTML da página inicial já renderizado (script/prerender.ts) e
// marca a raiz com `data-prerender`. Nesse caso o React hidrata o que já está
// na tela em vez de recriar tudo.
if (raiz.dataset.prerender === "true") {
  hydrateRoot(raiz, <App />);
} else {
  createRoot(raiz).render(<App />);
}
