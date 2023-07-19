import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import SingleProject from './pages/SingleProject'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="/project/:id" element={<SingleProject />} />
        <Route path="contact" element={<Contact />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App
