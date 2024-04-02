import "./styles/App.scss";
import NavBar from "./components/NavBar/NavBar.jsx";
import HeadLine from "./components/HeadLine/HeadLine.jsx";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const titles = [
    { title: "about" },
    { title: "projects" },
    { title: "contact" },
  ];

  return (
    <div className="app">
      <BrowserRouter>
        <HeadLine />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/about" element={<Navigate to="/" />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        {/* <Contact /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
