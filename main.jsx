import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = document.getElementById("root");

try {
  const GrabPJ = (await import("./GRABPJ.jsx")).default;
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <GrabPJ />
    </React.StrictMode>
  );
} catch (err) {
  root.innerHTML = `<pre style="color:red;white-space:pre-wrap;padding:20px;">${err.stack || err.message}</pre>`;
}
