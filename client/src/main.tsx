import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HeaderProvider } from "./contexts/HeaderContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeaderProvider>
      <App />
    </HeaderProvider>
  </StrictMode>
);
