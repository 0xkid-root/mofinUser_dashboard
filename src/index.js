import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Providers from "./provider/PrivyProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Providers>
      {" "}
      <App />
    </Providers>
  </React.StrictMode>
);
