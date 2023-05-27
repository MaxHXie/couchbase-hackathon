import "./App.scss"
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import { Footer } from "./components/Footer"
import LandingPage from "./pages/LandingPage"

function App() {
  return (
    <div className="pageContainer" style={{ height: "100%" }}>
      <div className="pageHeader">
        <NavBar />
      </div>
      <div className="pageContent">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
      <div className="pageFooter">
        <Footer />
      </div>
    </div>
  )
}

export default App
