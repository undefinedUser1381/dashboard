import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./i18next/i18next.ts";
import { NextUIProvider } from "@nextui-org/react";
import { HashRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./stores/store.ts";

createRoot(document.getElementById("root")!).render(
    <HashRouter>
      <NextUIProvider>
        <Provider store={store}>
        <App />
        </Provider>
      </NextUIProvider>
    </HashRouter>
);
