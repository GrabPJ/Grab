import React from "react";
import ReactDOM from "react-dom/client";
import GrabPJ from "./GRABPJ.jsx";
import "./index.css";

class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <pre style={{ color: "red", whiteSpace: "pre-wrap", padding: 20 }}>
          {this.state.error.stack || this.state.error.message}
        </pre>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <GrabPJ />
    </ErrorBoundary>
  </React.StrictMode>
);
