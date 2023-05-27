import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import ReactRouterScroll from "./ReactRouterScroll.tsx"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ReactRouterScroll />
    <App />
  </BrowserRouter>
)
