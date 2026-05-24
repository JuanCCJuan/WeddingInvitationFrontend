/* STYLES */
import "./main.css";

/* DEPENDENCIES */
import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { type Root, createRoot } from "react-dom/client";

/* COMPONENTS */
import { App } from "./router/App";
import { PopupProvider } from "./features/user/providers/PopupProvider";
import { InvitationProvider } from "./features/user/providers/InvitationProvider";

// Crea y renderiza la raíz del proyecto

const root: Root = createRoot(document.querySelector("#root")!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <InvitationProvider>
        <PopupProvider>
          <App />
        </PopupProvider>
      </InvitationProvider>
    </BrowserRouter>
  </StrictMode>
);