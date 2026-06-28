import express from "express";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.join(__dirname, "dist");

app.use(compression());
app.use(express.json());

// Serve built static assets with long cache for hashed files.
app.use(
  express.static(distPath, {
    maxAge: "1y",
    setHeaders: (res, filePath) => {
      if (filePath.endsWith("index.html")) {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  })
);

// Contact form endpoint (placeholder — logs and echoes back).
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ ok: false, error: "Please provide name, email and message." });
  }
  // In production wire this to email / CRM / database.
  console.log("[contact] new enquiry:", { name, email });
  return res.json({
    ok: true,
    message: "Thanks for reaching out. We'll reply within one business day.",
  });
});

// SPA fallback.
app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`\n  Code Works running → http://localhost:${PORT}\n`);
});
