import ReactDOM from "react-dom/client"
import "./index.scss"
import { BrowserRouter } from "react-router-dom"
import ReactRouterScroll from "./ReactRouterScroll.js"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ReactRouterScroll />
    <App />
  </BrowserRouter>
)
