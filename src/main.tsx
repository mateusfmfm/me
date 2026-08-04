import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { detectLanguage } from "./detectLanguage";
import { initI18n } from "./i18n";
import App from "./App.tsx";
import "./input.css";

async function bootstrap() {
  const lng = await detectLanguage();
  await initI18n(lng);

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

void bootstrap();
