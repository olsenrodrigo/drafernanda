import type { Express } from "express";
import type { Server } from "http";

/**
 * O site não guarda dados: o formulário monta a mensagem no navegador e abre o
 * WhatsApp (ou o e-mail). Por isso não há banco nem endpoint de contato.
 */
export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  app.get("/api/saude", (_req, res) => res.json({ ok: true }));
  return httpServer;
}
