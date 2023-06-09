import React from "react"
import ReactDOM from "react-dom/client"
import { DataContextProvider } from "./context/data-context"

import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>
)
