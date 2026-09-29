import { profissional } from "@/content/site";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-linho px-6 text-center">
      <div>
        <p className="rotulo text-argila">Página não encontrada</p>
        <h1 className="mt-4 text-4xl text-tinta">Este endereço não existe.</h1>
        <p className="mt-4 text-grafite">O conteúdo do site de {profissional.nome} está na página inicial.</p>
        <a href="/" className="botao botao-cheio mt-8">
          Ir para a página inicial
        </a>
      </div>
    </main>
  );
}
