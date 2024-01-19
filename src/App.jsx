import "./styles/App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NavBar from "./components/Header/NavBar.jsx";

function App() {
  const titles = [
    { title: "home" },
    { title: "about" },
    { title: "projects" },
    { title: "contact" },
  ];

  return (
    <div className="app">
      <BrowserRouter>
        <NavBar titles={titles} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
