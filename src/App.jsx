import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Signin from "./pages/signin"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<Signin/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
