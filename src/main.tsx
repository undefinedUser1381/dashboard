import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./i18next/i18next.ts";
import { NextUIProvider } from "@nextui-org/react";
import { HashRouter } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <HashRouter>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </HashRouter>
);
