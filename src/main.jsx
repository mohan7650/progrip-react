import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

/* Global style layers — order matters:
   1. variables.css  → design tokens
   2. global.css     → reset, layout utilities, buttons, cards, grids
   3. typography.css → headings, eyebrows, micro labels               */
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/typography.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
