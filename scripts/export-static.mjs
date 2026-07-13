import { spawn } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";

const port = 4173;
const baseUrl = process.env.STATIC_EXPORT_URL || `http://127.0.0.1:${port}/`;
const command = process.platform === "win32" ? "npx.cmd" : "npx";
const server = process.env.STATIC_EXPORT_URL
  ? null
  : spawn(command, ["vinext", "dev", "--hostname", "127.0.0.1", "--port", String(port)], {
      env: { ...process.env, WRANGLER_LOG_PATH: ".wrangler/wrangler-pages.log" },
      stdio: "ignore",
      shell: process.platform === "win32",
    });

async function waitForPage() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return response.text();
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("Timed out while rendering the static homepage.");
}

try {
  let html = await waitForPage();
  const assetNames = await fs.readdir(path.join("dist", "client", "assets"));
  const cssFile = assetNames.find((name) => /^index-.*\.css$/.test(name));
  if (!cssFile) throw new Error("Could not find the built stylesheet.");

  html = html
    .replace(/<link rel="stylesheet"[^>]*>/, `<link rel="stylesheet" href="./assets/${cssFile}">`)
    .replace(/<link rel="modulepreload"[^>]*>/g, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/g, "")
    .replace("</head>", '<link rel="canonical" href="https://ability66.github.io/">\n</head>');

  await fs.writeFile(path.join("dist", "client", "index.html"), html, "utf8");
  await fs.writeFile(path.join("dist", "client", ".nojekyll"), "", "utf8");
} finally {
  server?.kill("SIGTERM");
}
