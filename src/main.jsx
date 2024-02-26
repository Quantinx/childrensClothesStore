import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ShopProvider } from "./providers/ShopProvider.jsx";
import { PopupProvider } from "./providers/useCartPopup.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <PopupProvider>
        <ShopProvider>
          <App />
        </ShopProvider>
      </PopupProvider>
    </Router>
  </React.StrictMode>
);
