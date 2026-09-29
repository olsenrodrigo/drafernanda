import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Assets com hash no nome podem ficar em cache por um ano.
  app.use(
    "/assets",
    express.static(path.join(distPath, "assets"), { immutable: true, maxAge: "1y" }),
  );
  app.use(express.static(distPath));

  // Site de uma página: qualquer outra rota é 404 de verdade (evita "soft 404").
  app.use("/{*path}", (_req, res) => {
    res.status(404).sendFile(path.resolve(distPath, "404.html"));
  });
}
