import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ShopProvider } from "./providers/shopProvider.jsx";
import {PopupProvider} from './providers/useCartPopup.jsx'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopProvider>
      <PopupProvider>
        <App />
      </PopupProvider>
    </ShopProvider>
  </React.StrictMode>
);
